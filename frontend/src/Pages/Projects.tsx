import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type {
  DevpostProject,
  DevpostProjectsPayload,
} from '../types/devpost';

type Project = {
  id: string;
  name: string;
  year: number | 'Unknown';
  domain: string;
  difficulty: string;
  description: string;
  stack: string[];
  team: string[];
  link?: string;
  video?: string;
};

const DOMAINS = ['All', 'Health', 'Robotics', 'NLP', 'Vision'];
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const YEARS = ['All', 2026, 2025];

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

export default function Projects() {
  const [domain, setDomain] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [year, setYear] = useState<string | number>('All');
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<Project | null>(null);

  const [devpostProjects, setDevpostProjects] = useState<DevpostProject[] | null>(null);
  const [devpostLoading, setDevpostLoading] = useState(true);
  const [devpostError, setDevpostError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      try {
        setDevpostLoading(true);
        setDevpostError(null);

        const res = await fetch('/devpost-projects.json', {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to load projects (${res.status})`);
        }

        const data = (await res.json()) as DevpostProjectsPayload | DevpostProject[];
        const loadedProjects = Array.isArray(data)
          ? data
          : Array.isArray((data as DevpostProjectsPayload).projects)
            ? (data as DevpostProjectsPayload).projects
            : [];

        if (cancelled) return;

        setDevpostProjects(loadedProjects);
      } catch (error) {
        if (cancelled) return;
        setDevpostError('Devpost projects are temporarily unavailable.');
        console.error('Failed to load Devpost projects', error);
      } finally {
        if (!cancelled) {
          setDevpostLoading(false);
        }
      }
    }

    void loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  const mappedProjects: Project[] = (devpostProjects ?? []).map((p) => {
    const createdYear = p.createdAt ? new Date(p.createdAt).getFullYear() : 'Unknown';
    return {
      id: p.id,
      name: p.name,
      year: createdYear,
      domain: p.eventName || 'Other',
      difficulty: 'N/A',
      description: p.tagline || p.description,
      stack: p.technologies ?? [],
      team: [],
      link: p.devpostUrl,
      video: undefined,
    };
  });

  const filtered = mappedProjects.filter((p) => {
    if (domain !== 'All' && p.domain !== domain) return false;
    if (difficulty !== 'All' && p.difficulty !== difficulty) return false;
    if (year !== 'All' && p.year !== year) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.description.toLowerCase().includes(search.toLowerCase())) return false;
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
            CUCAI 2025 and 2026 — real AI projects by MacAI members. Browse by year, domain, or difficulty.
          </motion.p>
        </div>
      </section>

      {/* Filters & search */}
      <section className="py-8 bg-[#0f0066]/50 backdrop-blur-sm sticky top-[4rem] z-40 border-b border-[#1CB1E3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {devpostLoading && (
            <p className="text-[#A7C2C3] text-sm mb-2">
              Loading Devpost projects...
            </p>
          )}
          {devpostError && (
            <p className="text-[#A7C2C3] text-sm mb-2">
              {devpostError}
            </p>
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
            {YEARS.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  year === y ? 'bg-[#3DDFF5] text-[#1800AD]' : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
                }`}
              >
                {y}
              </button>
            ))}
            <span className="text-[#A7C2C3] text-sm mx-2">Domain:</span>
            {DOMAINS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDomain(d)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  domain === d ? 'bg-[#3DDFF5] text-[#1800AD]' : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
                }`}
              >
                {d}
              </button>
            ))}
            <span className="text-[#A7C2C3] text-sm mx-2">Difficulty:</span>
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDifficulty(d)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  difficulty === d ? 'bg-[#3DDFF5] text-[#1800AD]' : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {devpostLoading ? (
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
              No Devpost projects match your filters.
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
                  <div className="aspect-video bg-[#1CB1E3]/10 flex items-center justify-center">
                    <span className="text-[#3DDFF5]/50 text-sm">
                      {project.domain || 'Devpost project'}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-2">
                      {project.year !== 'Unknown' && (
                        <span className="px-2 py-0.5 rounded bg-[#1CB1E3]/20 text-[#3DDFF5] text-xs">
                          {project.year}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded bg-[#1CB1E3]/20 text-[#A7C2C3] text-xs">
                        {project.domain}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#F0F4F4]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[#A7C2C3] text-sm line-clamp-2">
                      {project.description}
                    </p>
                    {project.stack.length > 0 && (
                      <p className="mt-3 text-[#3DDFF5] text-xs">
                        {project.stack.join(' · ')}
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
              <p className="mt-2 text-[#A7C2C3] text-sm">
                {modal.year !== 'Unknown' ? `${modal.year} · ` : ''}
                {modal.domain}
              </p>
              <p className="mt-4 text-[#F0F4F4]">{modal.description}</p>
              {modal.stack.length > 0 && (
                <p className="mt-4 text-[#3DDFF5] text-sm">
                  Stack: {modal.stack.join(', ')}
                </p>
              )}
              {modal.link && (
                <a
                  href={modal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#3DDFF5] hover:underline"
                >
                  View on Devpost →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
