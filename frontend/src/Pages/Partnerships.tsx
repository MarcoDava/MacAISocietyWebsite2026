import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NEW_SPONSORS = [
  { name: 'Sponsor A', tier: 'Platinum' },
  { name: 'Sponsor B', tier: 'Gold' },
  { name: 'Sponsor C', tier: 'Silver' },
];

const PAST_SPONSORS = [
  { name: 'Past Sponsor 1', year: 2024 },
  { name: 'Past Sponsor 2', year: 2024 },
  { name: 'Past Sponsor 3', year: 2023 },
];

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.5 },
};

export default function Partnerships() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            Partnerships
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl"
          >
            None of what we do would be possible without our sponsors. Thank you for believing in the next generation of AI talent.
          </motion.p>
        </div>
      </section>

      {/* New sponsors highlight */}
      <section className="py-16 md:py-24 bg-[#0f0066]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-6">Our new sponsors this year</h2>
          <motion.p
            {...fadeIn}
            className="text-[#A7C2C3] max-w-3xl mb-12"
          >
            We're proud to partner with organizations that share our mission. Their support fuels workshops, hackathons, and community events — and helps students gain real-world skills and connections.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEW_SPONSORS.map(({ name, tier }) => (
              <div
                key={name}
                className="bg-[#1800AD]/60 rounded-xl p-8 border border-[#1CB1E3]/20 flex flex-col items-center justify-center min-h-[160px] card-lift"
              >
                <div className="w-32 h-16 bg-[#1CB1E3]/20 rounded flex items-center justify-center text-[#3DDFF5]/70 text-sm">
                  Logo
                </div>
                <p className="mt-4 font-heading font-bold text-[#F0F4F4]">{name}</p>
                <p className="text-[#3DDFF5] text-sm">{tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All sponsors – current + past */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-8">All our sponsors</h2>
          <div className="mb-12">
            <h3 className="font-heading text-xl text-[#3DDFF5] mb-6">2025–2026</h3>
            <div className="flex flex-wrap gap-8 items-center">
              {NEW_SPONSORS.map(({ name }) => (
                <div
                  key={name}
                  className="w-28 h-14 bg-[#1CB1E3]/10 rounded-lg border border-[#1CB1E3]/30 flex items-center justify-center text-[#A7C2C3] text-xs"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-xl text-[#A7C2C3] mb-6">Previous years</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {PAST_SPONSORS.map(({ name, year }) => (
                <div
                  key={name + year}
                  className="w-24 h-12 bg-[#0f0066]/60 rounded-lg border border-[#1CB1E3]/20 flex items-center justify-center text-[#A7C2C3] text-xs"
                >
                  {name} ({year})
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1CB1E3]/10 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4">Interested in collaborating?</h2>
          <motion.p
            {...fadeIn}
            className="text-[#A7C2C3] mb-8"
          >
            We're always looking for partners who want to support student AI innovation. Get in touch to discuss sponsorship and opportunities.
          </motion.p>
          <Link to="/contact" className="btn-cta">Contact us</Link>
        </div>
      </section>
    </>
  );
}
