import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

type GalleryImage = {
  id: string;
  src: string;
  thumb: string;
  caption: string;
  event: string;
  year: string;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape' | 'square';
};

type GalleryPayload = {
  syncedAt: string;
  count: number;
  images: GalleryImage[];
};

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

// Stable shuffle using a simple seed-based approach
function stableShuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  // Use array length as part of the seed for consistency
  let seed = copy.length * 2654435761;
  for (let i = copy.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [eventFilter, setEventFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Reset loading state when a new image is selected
  useEffect(() => {
    if (selected) setImgLoaded(false);
  }, [selected]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch('/gallery.json');
        if (!res.ok) throw new Error(`Failed to load gallery (${res.status})`);
        const data = (await res.json()) as GalleryPayload;
        if (!cancelled) setImages(data.images ?? []);
      } catch (err) {
        console.error('Failed to load gallery:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => { cancelled = true; };
  }, []);

  // Derive filter options from data
  const events = ['All', ...Array.from(new Set(images.map((i) => i.event))).sort()];
  const years = ['All', ...Array.from(new Set(images.map((i) => i.year))).sort((a, b) => b.localeCompare(a))];

  const isFiltered = eventFilter !== 'All' || yearFilter !== 'All';

  const filtered = images.filter((p) => {
    if (eventFilter !== 'All' && p.event !== eventFilter) return false;
    if (yearFilter !== 'All' && p.year !== yearFilter) return false;
    return true;
  });

  // When no filters are active, shuffle for a mixed aesthetic look.
  // When filters are applied, sort by year (newest first).
  const displayImages = isFiltered
    ? [...filtered].sort((a, b) => b.year.localeCompare(a.year))
    : stableShuffled(filtered);

  // Modal navigation derived values
  const selectedIndex = selected ? displayImages.findIndex(img => img.id === selected.id) : -1;
  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex < displayImages.length - 1;
  const goToPrev = () => selectedIndex > 0 && setSelected(displayImages[selectedIndex - 1]);
  const goToNext = () => selectedIndex < displayImages.length - 1 && setSelected(displayImages[selectedIndex + 1]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && selectedIndex > 0) setSelected(displayImages[selectedIndex - 1]);
      if (e.key === 'ArrowRight' && selectedIndex < displayImages.length - 1) setSelected(displayImages[selectedIndex + 1]);
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, selectedIndex, displayImages]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-30 md:py-38 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            Gallery
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl"
          >
            Curated moments from workshops, MacHacks, and CUCAI — our community in action.
          </motion.p>
          {!loading && images.length > 0 && (
            <motion.div {...fadeIn} className="mt-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#3DDFF5]/20 text-[#3DDFF5] text-sm font-bold border border-[#3DDFF5]/30">
                {images.length} moments captured
              </span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white/80 border-b border-[#1800AD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Event filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#4A5568] text-sm font-medium shrink-0">Category:</span>
            {events.map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => setEventFilter(e)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  eventFilter === e ? 'bg-[#1800AD] text-[#F0F4F4] shadow-[0_0_12px_rgba(24,0,173,0.3)]' : 'bg-[#1800AD]/10 text-[#4A5568] hover:text-[#1800AD]'
                }`}
              >
                {e}
              </button>
            ))}
          </div>
          {/* Year filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#4A5568] text-sm font-medium shrink-0">Year:</span>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYearFilter(y)}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                  yearFilter === y ? 'bg-[#1800AD] text-[#F0F4F4] shadow-[0_0_12px_rgba(24,0,173,0.3)]' : 'bg-[#1800AD]/10 text-[#4A5568] hover:text-[#1800AD]'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic grid */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl bg-gradient-to-r from-[#1CB1E3]/10 via-[#1CB1E3]/5 to-[#1CB1E3]/10 border border-[#1CB1E3]/20 animate-pulse ${
                    i % 3 === 0 ? 'aspect-[3/4] row-span-2' : 'aspect-[4/3]'
                  }`}
                />
              ))}
            </div>
          ) : displayImages.length === 0 ? (
            <p className="text-center text-[#4A5568] py-12">No photos match your filters.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
              {displayImages.map((item) => {
                const isPortrait = item.orientation === 'portrait';
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item)}
                    className={`rounded-xl overflow-hidden border border-[#1800AD]/10 bg-[#1800AD]/5 focus:outline-none focus:ring-2 focus:ring-[#1800AD] group relative ${
                      isPortrait ? 'row-span-2' : ''
                    }`}
                  >
                    {item.src ? (
                      <>
                        <img
                          src={item.thumb || item.src}
                          alt={item.caption || `${item.event} photo`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0066]/90 via-[#1800AD]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          {item.caption && (
                            <p className="text-white text-sm font-medium leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              {item.caption}
                            </p>
                          )}
                          <p className="text-[#3DDFF5] text-xs mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            {item.event} · {item.year}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-[#1800AD]/10 flex items-center justify-center text-[#1800AD]/30 text-sm">
                        Photo
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Video highlights 
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#1800AD] mb-6">Highlight reels</h2>
          <motion.div
            {...fadeIn}
            className="aspect-video bg-[#1800AD]/5 rounded-xl border border-[#1800AD]/10 flex items-center justify-center text-[#4A5568]"
          >
            Video embed placeholder (MacHacks / workshop highlights)
          </motion.div>
        </div>
      </section>
*/}
      {/* Modal with loading spinner */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`bg-[#0f0066] rounded-2xl overflow-hidden border border-[#1CB1E3]/30 shadow-xl relative ${
              selected.orientation === 'portrait' ? 'max-w-md' : 'max-w-4xl'
            } w-full`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation arrows */}
            {hasPrev && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
            )}
            {hasNext && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                →
              </button>
            )}
            {/* Image area with fixed placeholder size + spinner */}
            <div
              className="relative bg-[#1800AD]/40"
              style={{
                minHeight: imgLoaded ? undefined : selected.orientation === 'portrait' ? '70vh' : '50vh',
              }}
            >
              {/* Spinner — visible until image loads */}
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-[#1CB1E3]/30 border-t-[#3DDFF5] rounded-full animate-spin" />
                </div>
              )}

              {selected.src ? (
                <img
                  src={selected.src}
                  alt={selected.caption || `${selected.event} photo`}
                  className={`w-full max-h-[85vh] object-contain transition-opacity duration-300 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImgLoaded(true)}
                />
              ) : (
                <div className="aspect-video flex items-center justify-center text-[#3DDFF5]/50">
                  Image
                </div>
              )}
            </div>

            <div className="p-6 flex items-center justify-between">
              <div>
                {selected.caption && (
                  <p className="text-[#F0F4F4]">{selected.caption}</p>
                )}
                <p className="mt-1 text-[#A7C2C3] text-sm">
                  {selected.event} · {selected.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="btn-secondary text-sm ml-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
