import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';
import CountUp from '../Components/CountUp';
import { HeroParallax } from '../Components/HeroParallax';
import macHacksImage from '../assets/MacHacksImageContent.avif';
import {
  EVENT_INFO,
  SPONSORS,
  PAST_MACHACKS_SPONSORS,
  PARALLAX_PRODUCTS,
  MACHACKS_THEME as theme,
} from '../data/machacks-config';


export default function MacHacks() {
  const featuredSponsors = SPONSORS.filter(s => s.tier === 'featured');
  const standardSponsors = SPONSORS.filter(s => s.tier === 'standard');
  const communitySponsors = SPONSORS.filter(s => s.tier === 'community');

  return (
    <div className="bg-[#060606]">
      {/* Hero with MacHacks banner background */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Background video */}
        <div className="absolute sm:flex inset-0 top-16 sm:top-0 sm:w-full sm:h-full justify-center items-end">
         
            <video
              className="relative w-full h-full object-contain md:object-cover rounded-[25vh]"
              src="/machacks-hero-animated.mp4"
              autoPlay
              muted
              playsInline
            />
          
        </div>
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />

        {/* Devpost CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 1 }} className="relative z-10 mt-[55vh] mb-12 sm:mb-20 md:mb-32">
          <a
            href="https://machacks.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Recently+ended&_gl=1*fstwdi*_gcl_au*NTU2Mjc2MTA5LjE3NjgwMDAwMjM.*_ga*MTQxMjc5NzA2LjE3NDEyODY3Nzg.*_ga_0YHJK3Y10M*czE3NzQzNjQwMTUkbzQ5JGcwJHQxNzc0MzY0MDE1JGo2MCRsMCRoMA.."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E00064] text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#c0004f] transition-colors shadow-[0_0_30px_rgba(224,0,100,0.4)]"
          >
            View MacHacks 2026 on Devpost
          </a>
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

      {/* What is MacHacks? — About Us section */}
      <section className="py-16 md:py-24 bg-[#060606] border-t border-[#35494C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text – left */}
            <motion.div {...fadeIn}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                What is MacHacks?
              </h2>
              <p className="text-[#E1E0E0] text-lg leading-relaxed mb-6">
                MacHacks — presented by the McMaster Artificial Intelligence Society — is one of Canada's first major hackathons with a focus on Artificial Intelligence. The competition is sprint-style and enables students from all disciplines and experience levels to come together to produce innovative solutions.
              </p>
              <p className="text-[#E1E0E0] text-lg leading-relaxed mb-6">
                This year's event will be a one day MLH certified HackDay on Saturday March 21st, from 9am-9pm in PGCLL. We can't wait to see you there! More information regarding scheduling and workshops will be released on our Instagram and website in the coming weeks.
              </p>
              <p className="text-[#E1E0E0]/80 mb-8">
                Interested in partnering with us and impacting students through MacHacks 2026?{' '}
                <Link to="/partnerships" className="text-[#8B3D5A] hover:underline font-medium">Contact us!</Link>
              </p>
            </motion.div>

            {/* Image – right */}
            <motion.div
              {...fadeIn}
              className="relative"
            >
              <div className="bg-[#221A1D] rounded-2xl border border-[#35494C]/40 aspect-[4/3] flex items-center justify-center overflow-hidden group">
                <img 
                  src={macHacksImage} 
                  alt="MacHacks Event" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
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

      {/* Schedule & workshops — temporarily hidden */}
      {/* <section className="py-16 md:py-24 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Schedule & workshops</h2>
          ...
        </div>
      </section> */}

      {/* Sponsors Section – Tiered */}
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

          {/* Featured – Geotab own row */}
          {featuredSponsors.length > 0 && (
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4F7C80]/60 mb-4 text-center">Featured Partner</p>
              <div className="flex justify-center">
                {featuredSponsors.map((sponsor) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-lg rounded-2xl p-8 md:p-10
                      bg-white border border-gray-200 flex flex-col items-center justify-center
                      hover:border-gray-300 transition-all duration-300 group
                      min-h-[200px]"
                    whileHover={{ y: -4, boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)` }}
                  >
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsor.name} className="max-h-24 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity rounded-lg" />
                    ) : (
                      <span className="font-heading text-2xl font-bold text-black transition-colors text-center">
                        {sponsor.name}
                      </span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* Standard sponsors grid */}
          {standardSponsors.length > 0 && (
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {standardSponsors.map((sponsor) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-sm rounded-xl p-6 md:p-8
                      bg-white border border-gray-200 flex items-center justify-center
                      hover:border-gray-300 transition-all duration-300 group
                      min-h-[180px]"
                    whileHover={{ y: -4, boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)` }}
                  >
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsor.name} className="max-h-48 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity rounded-lg" />
                    ) : (
                      <span className="font-heading text-xl font-bold text-black transition-colors text-center">
                        {sponsor.name}
                      </span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* Community – MLH bottom */}
          {communitySponsors.length > 0 && (
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E1E0E0]/40 mb-4 text-center">Community Partners</p>
              <div className="flex justify-center">
                {communitySponsors.map((sponsor) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-6
                      bg-white border border-gray-100 flex items-center justify-center
                      hover:border-gray-200 transition-all duration-300 group
                      min-h-[120px] w-48"
                    whileHover={{ y: -2, boxShadow: `0 5px 15px rgba(0, 0, 0, 0.05)` }}
                  >
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsor.name} className="max-h-16 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity rounded-lg" />
                    ) : (
                      <span className="font-heading text-lg font-bold text-black transition-colors text-center">
                        {sponsor.name}
                      </span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* Past MacHacks Sponsors */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white/80 mb-8 text-center uppercase tracking-widest">
              Sponsors from previous years
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
              {PAST_MACHACKS_SPONSORS.map((sponsor) => (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black rounded-xl p-4 md:p-6
                    border border-white/10 flex items-center justify-center
                    hover:border-white/30 transition-all duration-300 group
                    h-24 w-40 md:w-48"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {sponsor.logoUrl ? (
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="max-h-14 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                  ) : (
                    <span className="text-sm font-bold text-black/50 group-hover:text-black/80 transition-colors text-center">
                      {sponsor.name}
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

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

      {/* FAQ — temporarily hidden */}
      {/* <section id="faq" className="py-16 md:py-24 bg-[#221A1D]/50">
        ...
      </section> */}
    </div>
  );
}

