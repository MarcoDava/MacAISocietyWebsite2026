import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Countdown from '../Components/Countdown';
import { HeroParallax } from '../Components/HeroParallax';

const SCHEDULE = [
  { time: '9:00 AM', title: 'Doors & check-in', category: 'General' },
  { time: '10:00 AM', title: 'Opening keynote', category: 'General' },
  { time: '11:00 AM', title: 'Hacking begins', category: 'Hacking' },
  { time: '12:00 PM', title: 'Workshop: Intro to ML', category: 'Beginner' },
  { time: '2:00 PM', title: 'Workshop: APIs & tools', category: 'Beginner' },
  { time: '4:00 PM', title: 'Advanced track: NLP', category: 'Advanced' },
  { time: '8:00 PM', title: 'Mentorship office hours', category: 'General' },
  { time: 'Next day 10:00 AM', title: 'Submissions & demos', category: 'General' },
];

const PAST_YEARS = [
  { year: 2023, attendees: '200+', countries: '5', link: 'https://devpost.com', thumbnail: "https://picsum.photos/seed/machacks2023/600/400" },
  { year: 2022, attendees: '150+', countries: '4', link: 'https://devpost.com', thumbnail: "https://picsum.photos/seed/machacks2022/600/400" },
  { year: 2021, attendees: '100+', countries: '3', link: 'https://devpost.com', thumbnail: "https://picsum.photos/seed/machacks2021/600/400" },
];

const PARALLAX_PRODUCTS = Array.from({ length: 15}, (_, i) => {
  const item = PAST_YEARS[i % PAST_YEARS.length];
  return {
    title: `MacHacks ${item.year}`,
    link: item.link,
    thumbnail: item.thumbnail,
  };
});

const FAQ = [
  { q: 'Who can participate?', a: 'Any current university or high school student. Some tracks may have prerequisites.' },
  { q: 'Is it free?', a: 'Yes. MacHacks is free to attend. Food and swag are provided.' },
  { q: 'Team size?', a: 'Teams of 2–4. You can also sign up solo and we\'ll help you find a team.' },
  { q: 'What should I bring?', a: 'Laptop, charger, and enthusiasm. We\'ll share a full list closer to the event.' },
];

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

export default function MacHacks() {
  const [scheduleFilter, setScheduleFilter] = useState<string>('all');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const filteredSchedule = scheduleFilter === 'all' ? SCHEDULE : SCHEDULE.filter((s) => s.category === scheduleFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(61,223,245,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            MacHacks 2026
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl mx-auto"
          >
            McMaster AI Society's flagship hackathon. March 21st, 2026. AI challenges, industry mentorship, and prizes.
          </motion.p>
          <div className="mt-10">
            <Countdown />
          </div>
          <div className="mt-10">
            <button type="button" className="btn-cta text-lg px-8 py-4">
              Register for MacHacks 2026
            </button>
            <motion.p
              {...fadeIn}
              className="mt-4 text-[#A7C2C3] text-sm"
            >
              Registration opening soon. Sign up below for updates.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Event overview */}
      <section className="py-16 md:py-24 bg-[#0f0066]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-6">Event overview</h2>
          <motion.p
            {...fadeIn}
            className="text-[#A7C2C3] max-w-3xl"
          >
            MacHacks 2026 is a one-day hackathon focused on AI and innovation. You'll work in teams, attend workshops led by partners and industry experts, and compete for prizes. Location and full agenda will be confirmed soon — we'll keep you updated.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-[#1CB1E3]/20 text-[#3DDFF5] text-sm">March 21, 2026</span>
            <span className="px-4 py-2 rounded-full bg-[#1CB1E3]/20 text-[#3DDFF5] text-sm">McMaster University</span>
            <span className="px-4 py-2 rounded-full bg-[#1CB1E3]/20 text-[#3DDFF5] text-sm">AI challenges</span>
          </div>
        </div>
      </section>

      {/* Schedule & workshops */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-6">Schedule & workshops</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {['all', 'General', 'Hacking', 'Beginner', 'Advanced'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setScheduleFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scheduleFilter === cat
                    ? 'bg-[#3DDFF5] text-[#1800AD]'
                    : 'bg-[#1CB1E3]/20 text-[#A7C2C3] hover:text-[#F0F4F4]'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
          <ul className="space-y-4">
            {filteredSchedule.map(({ time, title, category }) => (
              <li
                key={time + title}
                className="bg-[#0f0066]/60 rounded-xl p-4 md:p-6 border border-[#1CB1E3]/20 flex flex-wrap items-center gap-4 card-lift"
              >
                <span className="font-heading font-bold text-[#3DDFF5] w-32">{time}</span>
                <span className="text-[#F0F4F4]">{title}</span>
                <span className="ml-auto px-3 py-1 rounded-full bg-[#1CB1E3]/20 text-[#A7C2C3] text-xs">{category}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Past MacHacks */}
      <HeroParallax products={PARALLAX_PRODUCTS} />

      {/* Sponsors CTA */}
      <section className="pb-16 md:pb-24 pt-4 md:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4">Sponsors & partners</h2>
          <motion.p
            {...fadeIn}
            className="text-[#A7C2C3] mb-8"
          >
            MacHacks wouldn't be possible without our sponsors. Interested in supporting 2026?
          </motion.p>
          <Link to="/partnerships" className="btn-cta">Partner with us</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#0f0066]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-8">FAQ</h2>
          <ul className="space-y-2">
            {FAQ.map(({ q, a }, i) => (
              <motion.li
                key={i}
                {...fadeIn}
                className="rounded-xl border border-[#1CB1E3]/20 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#1800AD]/40 text-[#F0F4F4] hover:bg-[#1800AD]/60 transition-colors"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span className="font-medium">{q}</span>
                  <span className="text-[#3DDFF5]">{faqOpen === i ? '−' : '+'}</span>
                </button>
                {faqOpen === i && (
                  <motion.div
                    {...fadeIn}
                    className="px-6 py-4 bg-[#1800AD]/20 text-[#A7C2C3] text-sm border-t border-[#1CB1E3]/20"
                  >
                    {a}
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
