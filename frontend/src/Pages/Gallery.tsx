import { useState } from 'react';
import { motion } from 'motion/react';

type GalleryItem = {
  id: string;
  src: string;
  caption: string;
  event: string;
  year: number;
};

const PLACEHOLDERS: GalleryItem[] = [
  { id: '1', src: '', caption: 'Students collaborating at a workshop.', event: 'Workshops', year: 2025 },
  { id: '2', src: '', caption: 'MacHacks 2023 — team presenting their project.', event: 'MacHacks 2023', year: 2023 },
  { id: '3', src: '', caption: 'CUCAI 2025 project showcase.', event: 'CUCAI 2025', year: 2025 },
  { id: '4', src: '', caption: 'Keynote and networking at MacHacks.', event: 'MacHacks 2023', year: 2023 },
  { id: '5', src: '', caption: 'Hands-on coding session.', event: 'Workshops', year: 2025 },
  { id: '6', src: '', caption: 'Award ceremony and celebration.', event: 'MacHacks 2023', year: 2023 },
];

const EVENTS = ['All', 'Workshops', 'MacHacks 2023', 'CUCAI 2025'];
const YEARS = ['All', 2025, 2023];

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.5 },
};

export default function Gallery() {
  const [eventFilter, setEventFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState<string | number>('All');
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = PLACEHOLDERS.filter((p) => {
    if (eventFilter !== 'All' && p.event !== eventFilter) return false;
    if (yearFilter !== 'All' && p.year !== yearFilter) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-[#0f0066]/50 border-b border-[#1CB1E3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
          {EVENTS.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setEventFilter(e)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                eventFilter === e ? 'bg-[#3DDFF5] text-[#1800AD]' : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
              }`}
            >
              {e}
            </button>
          ))}
          <span className="text-[#A7C2C3] mx-2">Year:</span>
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYearFilter(y)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                yearFilter === y ? 'bg-[#3DDFF5] text-[#1800AD]' : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </section>

      {/* Mosaic grid – mixed aspect ratios */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className={`rounded-xl overflow-hidden border border-[#1CB1E3]/20 bg-[#1CB1E3]/10 focus:outline-none focus:ring-2 focus:ring-[#3DDFF5] transition-transform hover:scale-[1.02] ${
                  i % 3 === 0 ? 'col-span-2 md:col-span-1' : ''
                } ${i % 5 === 2 ? 'md:row-span-2' : ''}`}
              >
                <div className={`bg-[#1800AD]/40 flex items-center justify-center text-[#3DDFF5]/50 text-sm ${i % 5 === 2 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                  Photo
                </div>
                <div className="p-3 text-left">
                  <p className="text-[#A7C2C3] text-xs">{item.event} · {item.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video highlights */}
      <section className="py-16 md:py-24 bg-[#0f0066]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#F0F4F4] mb-6">Highlight reels</h2>
          <motion.div
            {...fadeIn}
            className="aspect-video bg-[#1800AD]/60 rounded-xl border border-[#1CB1E3]/20 flex items-center justify-center text-[#A7C2C3]"
          >
            Video embed placeholder (MacHacks / workshop highlights)
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0f0066] rounded-2xl max-w-lg w-full overflow-hidden border border-[#1CB1E3]/30 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-[#1800AD]/40 flex items-center justify-center text-[#3DDFF5]/50">
              Image
            </div>
            <div className="p-6">
              <motion.p
                {...fadeIn}
                className="text-[#F0F4F4]"
              >
                {selected.caption}
              </motion.p>
              <motion.p
                {...fadeIn}
                className="mt-2 text-[#A7C2C3] text-sm"
              >
                {selected.event} · {selected.year}
              </motion.p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-4 btn-secondary text-sm"
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
