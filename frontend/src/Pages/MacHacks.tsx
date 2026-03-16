import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import CountUp from '../Components/CountUp';
import Countdown from '../Components/Countdown';
import { HeroParallax } from '../Components/HeroParallax';
import {
  EVENT_INFO,
  SCHEDULE,
  SCHEDULE_CATEGORIES,
  SPONSORS,
  PARALLAX_PRODUCTS,
  FAQ,
  MACHACKS_THEME as theme,
  // type Sponsor,
} from '../data/machacks-config';

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};



export default function MacHacks() {
  const [scheduleFilter, setScheduleFilter] = useState<string>('all');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const filteredSchedule = scheduleFilter === 'all'
    ? SCHEDULE
    : SCHEDULE.filter((s) => s.category === scheduleFilter);

  return (
    <div className="bg-[#060606]">
      {/* Hero with MacHacks banner background */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Background video */}
        <video
          className="absolute sm:flex inset-0 top-16 sm:top-0 sm:w-full sm:h-full object:cover bg-gradient-to-t from-[#000000] via-transparent to-transparent "
          src="/machacks-hero-animated.mp4"
          autoPlay
          muted
          playsInline
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />

        {/* Countdown timer only */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2,delay: 3}} className="relative z-10 mt-[47vh] mb-12 sm:mb-20 md:mb-32">
          <Countdown />
        </motion.div>
      </section>

      {/* Event overview */}
      <section className="py-16 md:py-24 bg-[#221A1D]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Event overview</h2>
          <motion.p
            {...fadeIn}
            className="text-[#E1E0E0] max-w-3xl text-lg leading-relaxed"
          >
            {EVENT_INFO.description}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-[#4F7C80]/20 text-[#4F7C80] text-sm font-medium border border-[#4F7C80]/30">
              {EVENT_INFO.date}
            </span>
            <span className="px-4 py-2 rounded-full bg-[#4F7C80]/20 text-[#4F7C80] text-sm font-medium border border-[#4F7C80]/30">
              {EVENT_INFO.location}
            </span>
            <span className="px-4 py-2 rounded-full bg-[#8B3D5A]/20 text-[#8B3D5A] text-sm font-medium border border-[#8B3D5A]/30">
              AI challenges
            </span>
          </div>
        </div>
      </section>

      {/* Past MacHacks timeline & parallax */}
      <section className="relative py-16 md:py-24 bg-[#060606] border-t border-[#35494C]/40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#221A1D]/40 to-[#060606] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Past MacHacks Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <motion.div
              {...fadeIn}
              className="rounded-2xl bg-[#221A1D] border border-[#35494C]/40 p-6 md:p-8"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#8B3D5A]">
                <CountUp end={3} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-[#E1E0E0]/70">
                Weekends of hacking
              </p>
              <p className="mt-4 text-sm text-[#E1E0E0]/80">In 2021, 2022, 2023.</p>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="rounded-2xl bg-[#221A1D] border border-[#35494C]/40 p-6 md:p-8"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#4F7C80]">
                <CountUp end={500} suffix="+" />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-[#E1E0E0]/70">
                Attendees
              </p>
              <p className="mt-4 text-sm text-[#E1E0E0]/80">From over 15 countries.</p>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="rounded-2xl bg-[#221A1D] border border-[#35494C]/40 p-6 md:p-8"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C0A35B]">
                <CountUp end={71} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-[#E1E0E0]/70">
                Submissions
              </p>
              <p className="mt-4 text-sm text-[#E1E0E0]/80">
                View MacHacks 2 and MacHacks 3 submissions.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <HeroParallax products={PARALLAX_PRODUCTS} />
        </div>
      </section>

      {/* Schedule & workshops */}
      <section className="py-16 md:py-24 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Schedule & workshops</h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SCHEDULE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setScheduleFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scheduleFilter === cat
                    ? 'bg-[#8B3D5A] text-white shadow-[0_0_20px_rgba(139,61,90,0.3)]'
                    : 'bg-[#221A1D] text-[#E1E0E0] hover:bg-[#35494C]/30 border border-[#35494C]/30'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Schedule items */}
          <ul className="space-y-4">
            {filteredSchedule.map(({ time, title, category }) => (
              <motion.li
                key={time + title}
                {...fadeIn}
                className="bg-[#221A1D] rounded-xl p-4 md:p-6 border border-[#35494C]/30
                  flex flex-wrap items-center gap-4
                  hover:border-[#4F7C80]/50 transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(79,124,128,0.1)]"
              >
                <span className="font-heading font-bold text-[#4F7C80] w-32 md:w-40">{time}</span>
                <span className="text-white flex-1">{title}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  category === 'Advanced'
                    ? 'bg-[#8B3D5A]/20 text-[#8B3D5A]'
                    : category === 'Beginner'
                    ? 'bg-[#4F7C80]/20 text-[#4F7C80]'
                    : 'bg-[#35494C]/30 text-[#E1E0E0]'
                }`}>
                  {category}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 md:py-24 bg-[#221A1D]/30 relative overflow-hidden">
        {/* Circuit board background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${theme.accentMagenta} 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, ${theme.accentCyan} 2px, transparent 2px),
            linear-gradient(90deg, ${theme.accentTeal}10 1px, transparent 1px),
            linear-gradient(${theme.accentTeal}10 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sponsors
            </h2>
            <motion.p
              {...fadeIn}
              className="text-[#E1E0E0] max-w-2xl mx-auto"
            >
              MacHacks wouldn't be possible without our amazing sponsors and partners.
            </motion.p>
          </div>

          {/* All Sponsors - Unified Display */}
          {SPONSORS.length > 0 && (
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {SPONSORS.map((sponsor) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-sm bg-[#221A1D] rounded-xl p-6 md:p-8
                      border border-[#35494C]/40 flex items-center justify-center
                      hover:border-[#4F7C80]/70 transition-all duration-300 group
                      min-h-[180px] "
                    whileHover={{ y: -4, boxShadow: `0 0 30px rgba(79, 124, 128, 0.2)` }}
                  >
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsor.name} className="max-h-48 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity rounded-lg" />
                    ) : (
                      <span className="font-heading text-xl font-bold text-[#E1E0E0] group-hover:text-white transition-colors text-center">
                        {sponsor.name}
                      </span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* Become a sponsor CTA */}
          <div className="text-center mt-12">
            <p className="text-[#E1E0E0]/60 mb-4">
              Interested in supporting MacHacks {EVENT_INFO.year}?
            </p>
            <Link
              to="/partnerships"
              className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg
                bg-[#8B3D5A] text-white border-2 border-[#8B3D5A]
                hover:bg-[#A44A68] hover:border-[#A44A68]
                transition-all duration-300 w-[70vw]"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#221A1D]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-3">
          {FAQ.map(({ q, a }, i) => (
              <motion.li
                key={i}
                {...fadeIn}
                className="rounded-xl border border-[#35494C]/30 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex justify-between items-center
                    bg-[#221A1D] text-white hover:bg-[#221A1D]/80 transition-colors"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span className="font-medium">{q}</span>
                  <span className="text-[#8B3D5A] text-xl">{faqOpen === i ? '−' : '+'}</span>
                </button>
                {faqOpen === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 py-4 bg-[#060606] text-[#E1E0E0] text-sm border-t border-[#35494C]/20"
                  >
                    {a}
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
