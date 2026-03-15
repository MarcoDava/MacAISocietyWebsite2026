import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { GitHubProject, GitHubProjectsPayload } from '../types/github';

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

export default function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [langFilter, setLangFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState<string | number>('All');
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<GitHubProject | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/github-projects.json');
        if (!res.ok) throw new Error(`Failed to load (${res.status})`);
        const data = (await res.json()) as GitHubProjectsPayload;
        if (!cancelled) setProjects(data.projects ?? []);
      } catch (err) {
        if (!cancelled) setError('Projects are temporarily unavailable.');
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => { cancelled = true; };
  }, []);

  // Derive filter options from data
  const languages = ['All', ...Array.from(new Set(projects.map((p) => p.language))).sort()];
  const years = ['All', ...Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => Number(b) - Number(a))];

  const filtered = projects.filter((p) => {
    if (langFilter !== 'All' && p.language !== langFilter) return false;
    if (yearFilter !== 'All' && p.year !== yearFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-30 md:py-38 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            Projects
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl"
          >
            Real AI projects built by MacAI members — straight from our GitHub organization.
          </motion.p>
        </div>
      </section>

      {/* Filters & search */}
      <section className="py-8 bg-[#0f0066]/50 backdrop-blur-sm sticky top-[4rem] z-40 border-b border-[#1CB1E3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <p className="text-[#A7C2C3] text-sm mb-2">Loading projects…</p>
          )}
          {error && (
            <p className="text-[#A7C2C3] text-sm mb-2">{error}</p>
          )}
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-lg bg-[#1800AD]/60 border border-[#1CB1E3]/30 text-[#F0F4F4] placeholder-[#A7C2C3] focus:outline-none focus:border-[#3DDFF5] mb-4"
            aria-label="Search projects"
          />
          <div className="flex flex-wrap gap-3">
            <span className="text-[#A7C2C3] text-sm mr-2">Year:</span>
            {years.map((y) => (
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
            <span className="text-[#A7C2C3] text-sm mx-2">Language:</span>
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLangFilter(l)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  langFilter === l ? 'bg-[#3DDFF5] text-[#1800AD]' : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#1800AD]/40 rounded-xl p-6 border border-[#1CB1E3]/20 animate-pulse"
                >
                  <div className="aspect-video rounded-lg bg-[#1CB1E3]/10 mb-4" />
                  <div className="h-5 w-2/3 bg-[#1CB1E3]/20 rounded mb-2" />
                  <div className="h-4 w-full bg-[#1CB1E3]/10 rounded mb-1" />
                  <div className="h-4 w-3/4 bg-[#1CB1E3]/10 rounded" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-[#A7C2C3] py-12">
              No projects match your filters.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setModal(project)}
                  className="text-left bg-[#0f0066]/60 rounded-xl overflow-hidden border border-[#1CB1E3]/20 card-lift"
                >
                  <div className="aspect-video bg-[#1CB1E3]/10 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#3DDFF5]/50 text-sm">
                        {project.name}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#1CB1E3]/20 text-[#3DDFF5] text-xs">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#F0F4F4]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[#A7C2C3] text-sm line-clamp-2">
                      {project.description}
                    </p>
                    {project.topics.length > 0 && (
                      <p className="mt-3 text-[#3DDFF5] text-xs">
                        {project.topics.join(' · ')}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <motion.p
              {...fadeIn}
              className="text-[#A7C2C3] mb-4"
            >
              Want to propose a project or join an existing one?
            </motion.p>
            <Link to="/contact" className="btn-cta">Contribute — apply or join Slack/Discord</Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-[#0f0066] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#1CB1E3]/30 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start gap-4">
                <h2 id="modal-title" className="font-heading text-2xl font-bold text-[#F0F4F4]">{modal.name}</h2>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="p-2 text-[#A7C2C3] hover:text-[#F0F4F4] rounded-lg focus-ring"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              {modal.image && (
                <div className="mt-4 w-full h-64 rounded-xl overflow-hidden">
                  <img src={modal.image} alt={modal.name} className="w-full h-full object-cover" />
                </div>
              )}
              <p className="mt-4 text-[#A7C2C3] text-sm">
                {modal.year}
                {modal.forks > 0 ? ` · 🍴 ${modal.forks}` : ''}
              </p>
              <p className="mt-4 text-[#F0F4F4]">{modal.description}</p>
              {modal.topics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {modal.topics.map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-[#1CB1E3]/20 text-[#3DDFF5] text-xs">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-6 flex gap-4">
                <a
                  href={modal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3DDFF5] hover:underline font-bold"
                >
                  View on GitHub →
                </a>
                {modal.homepage && (
                  <a
                    href={modal.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A7C2C3] hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
