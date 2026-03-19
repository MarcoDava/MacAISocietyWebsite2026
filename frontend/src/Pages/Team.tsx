import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXEC_TEAM, ADVISORY_BOARD } from '@/data/team';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Team() {
  const [expandedAdvisor, setExpandedAdvisor] = useState<string | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04002a] via-[#1800AD] to-[#1400a0]" />
        {/* Ambient glow orbs */}
        <div className="absolute -top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#1CB1E3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#3DDFF5]/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[#3DDFF5] text-xs tracking-[0.3em] uppercase mb-5">
              McMaster AI Society · 2025–2026
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.02] tracking-tight">
              The People<br />
              <span className="bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] bg-clip-text text-transparent">
                Behind the Mission
              </span>
            </h1>
            <p className="mt-6 text-[#A7C2C3] text-lg max-w-md leading-relaxed">
              Student leaders and industry advisors united by a commitment to AI that's open, rigorous, and human-centred.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXECUTIVE TEAM ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1800AD]">
              Executive Team
            </h2>
          </motion.div>

          {/* Portrait card grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {EXEC_TEAM.map((member) => (
              <motion.article
                key={member.name}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-xl bg-[#F0F4F4]"
                style={{ aspectRatio: '3 / 4' }}
              >
                {/* Photo */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[#1800AD]/30 text-5xl font-black">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                )}

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08004a]/40 via-[#08004a]/20 to-transparent" />

                {/* Border on hover */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/5 group-hover:ring-[#1CB1E3]/60 transition-all duration-500" />

                {/* Role badge (appears on hover) */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-0.5 rounded-full bg-[#1CB1E3]/25 backdrop-blur-sm text-white text-[9px] font-mono uppercase tracking-widest">
                    {member.role}
                  </span>
                </div>

                {/* Name + role at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-mono text-[#3DDFF5] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-0.5 leading-tight">
                    {member.role}
                  </p>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base leading-tight">
                    {member.name}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ADVISORY BOARD ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1800AD] mb-4">
              Advisory Board
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl leading-relaxed">
              Industry professionals, researchers, and executives who shape Mac AI's long-term vision.
            </p>
          </motion.div>

          {/* Advisor cards */}
          <div className="space-y-6">
            {ADVISORY_BOARD.map((advisor, i) => (
              <motion.article
                key={advisor.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#F0F4F4] rounded-2xl overflow-hidden border border-[#1800AD]/10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  {/* Photo column — fixed size, never stretches */}
                  <div className="relative flex-shrink-0 w-full aspect-square md:w-52 md:h-52 lg:w-56 lg:h-56 md:aspect-auto">
                    {advisor.image ? (
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#1800AD]/10 flex items-center justify-center text-[#1800AD]/30 text-6xl font-black">
                        {advisor.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    )}
                    {/* Vertical accent line */}
                    <div className="hidden md:block absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-[#3DDFF5] via-[#1CB1E3] to-[#1800AD]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 md:p-10">
                    {/* Name + badge + LinkedIn */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-heading text-2xl md:text-3xl font-black text-[#1800AD]">
                        {advisor.name}
                      </h3>
                      {advisor.title === 'Chair' && (
                        <span className="px-3 py-1 rounded-full bg-[#1800AD] text-white font-mono text-[10px] uppercase tracking-[0.18em]">
                          {advisor.title}
                        </span>
                      )}
                      {advisor.linkedin && (
                        <a
                          href={advisor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${advisor.name} on LinkedIn`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#1800AD]/20 text-[#1800AD] hover:bg-[#1800AD] hover:text-white hover:border-[#1800AD] transition-all duration-200 font-mono text-[10px] uppercase tracking-[0.18em]"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                    </div>

                    {/* Bio with expand */}
                    <div>
                      <AnimatePresence initial={false} mode="wait">
                        {expandedAdvisor === advisor.name ? (
                          <motion.p
                            key="full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-[#4A5568] leading-relaxed whitespace-pre-line"
                          >
                            {advisor.bio}
                          </motion.p>
                        ) : (
                          <motion.p
                            key="short"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-[#4A5568] leading-relaxed"
                          >
                            {advisor.bio.slice(0, 280)}{advisor.bio.length > 280 ? '…' : ''}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {advisor.bio.length > 280 && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedAdvisor(
                              expandedAdvisor === advisor.name ? null : advisor.name
                            )
                          }
                          className="mt-4 inline-flex items-center gap-1.5 text-[#1800AD] hover:text-[#1CB1E3] font-mono text-[11px] uppercase tracking-widest transition-colors duration-200"
                        >
                          {expandedAdvisor === advisor.name ? 'Collapse' : 'Read full bio'}
                          <svg
                            className={`w-3 h-3 transition-transform duration-300 ${expandedAdvisor === advisor.name ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
