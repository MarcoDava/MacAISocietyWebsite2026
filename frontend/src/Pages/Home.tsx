import { Link } from 'react-router-dom';
import Countdown from '../Components/Countdown';
import CountUp from '../Components/CountUp';
import { motion } from 'motion/react';
import { Spotlight } from '../Components/ui/spotlight';
import { EncryptedText } from '../Components/ui/encrypted-text';
import { useState } from 'react';
import { CURRENT_PARTNERS } from '../data/partners';
import { InfiniteMovingCards } from '../Components/ui/infinite-moving-cards';
import TestimonialCarousel from '../Components/TestimonialCarousel';
// Row 1 images
import row1MicrosoftTeams from '../assets/Content/Row1/MicrosoftTeams-image (5).png';
import row1Dsc02544 from '../assets/Content/Row1/DSC02544.jpg';
import row1IntroToAi from '../assets/Content/Row1/Intro to AI Workshop (2).jpeg';
import row1Dsc02547 from '../assets/Content/Row1/DSC02547.jpg';
import row1Cucai2024 from '../assets/Content/Row1/cucai-2024-037_53567022162_o.jpg';

// Row 2 images
import row2Img3359 from '../assets/Content/Row2/IMG_3359_Fotor.jpg';
import row2Cucai2024_040 from '../assets/Content/Row2/cucai-2024-040_53568077373_o.jpg';
import row2Img4886 from '../assets/Content/Row2/IMG_4886.JPG';
import row2Img4887 from '../assets/Content/Row2/IMG_4887.JPG';
import row2Img3360 from '../assets/Content/Row2/IMG_3360_Fotor.jpg';

// Row 3 images
import row3IntroToAi1 from '../assets/Content/Row3/Intro to AI Workshop (1).jpeg';
import row3Dsc02557 from '../assets/Content/Row3/DSC02557.jpg';
import row3Dsc02554 from '../assets/Content/Row3/DSC02554.jpg';
import row3Dsc02558 from '../assets/Content/Row3/DSC02558.jpg';

const row1Images = [
  { src: row1MicrosoftTeams, alt: 'MacAI online collaboration screenshot' },
  { src: row1Dsc02544, alt: 'MacAI members collaborating at an event' },
  { src: row1IntroToAi, alt: 'Intro to AI workshop' },
  { src: row1Dsc02547, alt: 'MacAI workshop in session' },
  { src: row1Cucai2024, alt: 'CUCAI 2024 event photo' },
];

const row2Images = [
  { src: row2Img3359, alt: 'MacAI event group photo' },
  { src: row2Cucai2024_040, alt: 'CUCAI 2024 on-stage moment' },
  { src: row2Img4886, alt: 'MacAI members at a workshop' },
  { src: row2Img4887, alt: 'MacAI event photo' },
  { src: row2Img3360, alt: 'MacAI event networking' },
];

const row3Images = [
  { src: row3IntroToAi1, alt: 'Intro to AI workshop – alternate angle' },
  { src: row3Dsc02557, alt: 'MacAI members collaborating at another event' },
  { src: row3Dsc02554, alt: 'MacAI hackathon team photo' },
  { src: row3Dsc02558, alt: 'MacAI workshop in progress' },
];

const STATS = [
  { value: -1, suffix: '+', label: 'Members' },
  { value: -1, suffix: '+', label: 'Industry Speakers' },
  { value: 1, suffix: '', label: 'Flagship Hackathon' },
  { value: -1, suffix: '+', label: 'Workshops Hosted' },
  { value: -1, suffix: '+', label: 'Sponsors' },
];

const OFFERINGS = [
  { imgsrc: row1MicrosoftTeams, title: 'Workshops', desc: 'Hands-on sessions on ML, NLP, computer vision, and more.' },
  { imgsrc: row1Dsc02544, title: 'Hackathons', desc: 'MacHacks and other events where you build and compete.' },
  { imgsrc: row1Dsc02547, title: 'Networking', desc: 'Connect with industry speakers and like-minded peers.' },
  { imgsrc: row2Img4886, title: 'Projects', desc: 'Join CUCAI and other real-world AI projects.' },
];

const SPOTLIGHT = [
  { quote: 'I wanted to learn AI in a supportive environment. MacAI gave me that and a community.', name: 'Member' },
  { quote: 'The workshops and hackathons helped me land my first ML internship.', name: 'Member' },
  { quote: 'MacAI feels like home. Everyone is here to grow together.', name: 'Member' },
];

const QUIZ_QUESTIONS = [
  { id: 'interest', q: 'What interests you most?', options: ['Building projects', 'Learning in workshops', 'Mentoring others', 'Competing at hackathons'] },
  { id: 'time', q: 'How much time can you give?', options: ['A few hours per month', 'Regular weekly commitment', 'Intensive during events only'] },
  { id: 'goal', q: "What's your main goal?", options: ['Land an internship or job', 'Learn AI from scratch', 'Meet people and network', 'Ship a portfolio project'] },
];

const PATHWAYS: Record<string, string> = {
  projects: 'Join a project team and ship something real. Check out our Projects page and apply.',
  workshops: 'Attend workshops and grow your skills. Keep an eye on events and our Discord.',
  mentor: 'Share your experience as a mentor. Reach out to the team to get involved.',
  hackathons: 'MacHacks 2026 is for you. Register and join us on March 21st.',
};

const fadeInRight = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};
const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};
const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};
export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = QUIZ_QUESTIONS[step];
  const isLast = step === QUIZ_QUESTIONS.length - 1;

  const handleNext = (value: string) => {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    if (isLast) {
      const pathway = value.toLowerCase().includes('project') ? 'projects' : value.toLowerCase().includes('workshop') ? 'workshops' : value.toLowerCase().includes('mentor') ? 'mentor' : 'hackathons';
      setAnswers((a) => ({ ...a, pathway }));
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };
    return (
    <div className="bg-[#1800AD] text-[#F0F4F4]">
      {/* 1) Hero – Hook (vision + energy) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.15),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-20"
          fill="white"
          />
          <div className="relative z-20 max-w-xl">
            <EncryptedText 
            text="Building the Future of AI at McMaster." 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F4F4] leading-tight z-10" 
            revealDelayMs={20}
            charset="abcdefghijklmnopqrstuvwxyz"
            />
            <motion.p initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0,0.40, 1], x: [-60, -5, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-6 text-xl text-[#A7C2C3] max-w-xl">
              Canada's next generation of AI innovators, creators, and problem-solvers starts here.
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0,0.20, 1], x: [-60, -10, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-4 text-[#3DDFF5] font-medium">Empowering the McMaster community through AI education and collaboration.</motion.p>
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0,0.10, 1], x: [-60, -20, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-cta">
                Join the Society
              </Link>
              <Link to="/machacks" className="btn-secondary">
                Explore MacHacks 2026
              </Link>
            </motion.div>
          </div>
          <div className="mt-10 hidden md:flex aspect-square rounded-2xl flex-col items-center justify-center">
            <div className="block relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <InfiniteMovingCards items={row1Images} direction="right" speed="slow" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <InfiniteMovingCards items={row2Images} direction="left" speed="slow" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <InfiniteMovingCards items={row3Images} direction="right" speed="slow" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="h-screen pointer-events-none absolute inset-x-0 top-18 md:hidden opacity-30">
          <div className="max-w-xl mx-auto">
            <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
              <InfiniteMovingCards items={row1Images} direction="right" speed="slow" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
              <InfiniteMovingCards items={row2Images} direction="left" speed="slow" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2) What we offer – Immediate Value */}
      <motion.section {...fadeInRight} className="text-black py-24 md:py-32 bg-[#F0F4F4] rounded-b-[5vh] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInDown} className="font-heading text-4xl font-bold mb-4">Elevate your AI journey</motion.h2>
            <motion.p {...fadeIn} className="max-w-2xl mx-auto text-lg text-black/70">
              MacAI provides a comprehensive ecosystem for learners and builders alike. From foundational knowledge to real-world deployment, we've got you covered.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {OFFERINGS.map(({ imgsrc, title, desc }) => (
              <motion.div
                key={title}
                {...fadeInRight}
                className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img src={imgsrc} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1800AD] mb-3">{title}</h3>
                <p className="text-black/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3) Social proof — Condensed & Modern */}
      <section className="py-24 md:py-32 bg-[#0f0066]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {STATS.map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                {...fadeIn}
                className="text-center group"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#3DDFF5] mb-2 group-hover:scale-110 transition-transform">
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className="text-macai-sage font-medium tracking-wide uppercase text-xs">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Testimonials — The Human Element */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#0f0066] to-[#1800AD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInDown} className="font-heading text-3xl font-bold text-[#F0F4F4]">
              Stories from our community
            </motion.h2>
          </div>
          <TestimonialCarousel items={SPOTLIGHT} />
        </div>
      </section>

      {/* 5) MacHacks — The Big Event */}
      <section className="py-24 md:py-32 pb-36 md:pb-70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1CB1E3]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeInDown}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1CB1E3]/20 text-[#3DDFF5] text-sm font-bold tracking-wider uppercase mb-6">
              Coming Soon
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[#F0F4F4] mb-6">MacHacks 2026</h2>
            <p className="text-xl text-macai-sage mb-12 max-w-2xl mx-auto">
              Our flagship hackathon returns on March 21st. Join hundreds of students to build, learn, and compete for $10k+ in prizes.
            </p>
          </motion.div>
          <Countdown />
          <motion.div {...fadeIn} className="mt-16">
            <Link to="/machacks" className="btn-cta text-lg px-10 py-4">
              Reserve Your Spot
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6) Pathway Quiz — Discovery & Interaction */}
      <section className="py-24 md:py-32 bg-[#F0F4F4] text-black rounded-t-[5vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {done ? (
              <motion.div {...fadeIn} className="text-center py-12">
                <span className="text-[#1800AD] font-bold tracking-widest uppercase text-sm mb-4 block">Result</span>
                <h2 className="text-4xl font-bold text-[#1800AD] mb-6">Your MacAI Pathway</h2>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#1800AD]/10">
                  <p className="text-xl text-[#1800AD]/80 leading-relaxed italic">
                    {PATHWAYS[answers.pathway ?? 'projects'] || PATHWAYS.projects}
                  </p>
                </div>
                <button onClick={() => setDone(false)} className="mt-10 text-[#1800AD] font-bold hover:underline">Take it again</button>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-heading text-4xl font-bold text-[#1800AD] mb-6">
                    Find your place in the society
                  </h2>
                  <p className="text-black/60 text-lg mb-8">
                    Not sure where to start? Tell us a bit about your goals and we'll point you to the perfect pathway.
                  </p>
                </div>
                <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 shadow-2xl border border-black/5">
                  <div className="mb-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-black/40">
                    <span>Question {step + 1} of {QUIZ_QUESTIONS.length}</span>
                    <div className="w-24 h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1800AD]" style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }} />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl text-[#1800AD] mb-8">{current.q}</h3>
                  <div className="space-y-3">
                    {current.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleNext(opt)}
                        className="w-full text-left px-6 py-4 rounded-xl border-2 border-black/5 hover:border-[#1800AD] hover:bg-[#1800AD]/5 transition-all group relative overflow-hidden"
                      >
                        <span className="relative z-10 font-bold text-black/80 group-hover:text-[#1800AD]">{opt}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          
          <div className="mt-24 pt-16 border-t border-black/5 flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-8 py-4 rounded-xl hover:bg-[#1800AD] hover:text-white transition-all">
              Join the Society
            </Link>
            <Link to="/machacks" className="btn-cta text-lg px-8 py-4 rounded-xl">
              Explore MacHacks 2026
            </Link>
          </div>
        </div>
      </section>

      {/* 3) What we offer */}
      <motion.section {...fadeInRight} className="text-black py-16 md:py-50 bg-[#F0F4F4] rounded-[5vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p {...fadeIn} className="text-center text-macai-sage font-bold tracking-widest uppercase text-xs mb-10">Supported by our partners</motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {CURRENT_PARTNERS.map((partner) => (
              <motion.a
                whileHover={{ scale: 1.05 }}
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <img src={partner.logoUrl} alt={partner.name} className="w-32 h-16 object-contain filter grayscale invert brightness-200" />
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/partnerships" className="text-[#3DDFF5] font-bold hover:underline tracking-wide uppercase text-xs">Become a Partner</Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}