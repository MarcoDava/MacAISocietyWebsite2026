import { useState } from 'react';
import { motion } from 'motion/react';
import { EXEC_TEAM, ADVISORY_BOARD } from '../data/team';

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

export default function Team() {
  const [expandedAdvisor, setExpandedAdvisor] = useState<string | null>(null);

  return (
    <>
      {/* Hero – blue header */}
      <section className="relative py-30 md:py-38 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            Our Team
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl"
          >
            These student leaders are committed to Mac AI's vision.
          </motion.p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-12 text-center">Executive Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {EXEC_TEAM.map((member) => (
              <motion.div
                key={member.name}
                {...fadeIn}
                className="bg-white rounded-2xl p-6 border border-[#1800AD]/10 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-[#1800AD]/5 border-2 border-[#1800AD]/10 group-hover:border-[#1800AD]/30 transition-colors">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#1800AD]/30 text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-bold text-[#1800AD] text-lg">{member.name}</h3>
                <p className="text-[#4A5568] text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-4">Advisory Board</h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              The advisory board consists of industry professionals, researchers, executives, and others who seek to further the mission of Mac AI.
            </p>
          </div>
          <div className="space-y-8">
            {ADVISORY_BOARD.map((advisor) => (
              <motion.div
                key={advisor.name}
                {...fadeIn}
                className="bg-[#F0F4F4] rounded-2xl border border-[#1800AD]/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-[#1800AD]/5 border border-[#1800AD]/10">
                      {advisor.image ? (
                        <img
                          src={advisor.image}
                          alt={advisor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#1800AD]/30 text-xl font-bold">
                          {advisor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-xl font-bold text-[#1800AD]">{advisor.name}</h3>
                        <span className="px-3 py-1 rounded-full bg-[#1800AD]/10 text-[#1800AD] text-xs font-bold">
                          {advisor.title}
                        </span>
                      </div>
                      <p className="text-[#4A5568] leading-relaxed">
                        {expandedAdvisor === advisor.name
                          ? advisor.bio
                          : advisor.bio.slice(0, 300) + (advisor.bio.length > 300 ? '...' : '')
                        }
                      </p>
                      {advisor.bio.length > 300 && (
                        <button
                          type="button"
                          onClick={() => setExpandedAdvisor(
                            expandedAdvisor === advisor.name ? null : advisor.name
                          )}
                          className="mt-3 text-[#1800AD] font-bold text-sm hover:underline"
                        >
                          {expandedAdvisor === advisor.name ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
