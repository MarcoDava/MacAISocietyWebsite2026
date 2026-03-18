import { Link } from 'react-router-dom';
import Countdown from '../Components/Countdown';
import CountUp from '../Components/CountUp';
import { motion } from 'motion/react';
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
  { value: 110, suffix: '+', label: 'Members' },
  { value: 15, suffix: '+', label: 'Industry Speakers' },
  { value: 1, suffix: '', label: 'Flagship Hackathon' },
  { value: 12, suffix: '+', label: 'Workshops Hosted' },
  { value: 6, suffix: '+', label: 'Sponsors' },
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
    <div className="bg-[#F0F4F4] text-[#1800AD]">
      {/* 1) Hero – Off-white bg with blue text */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F4] via-[#EAF0FF] to-[#F0F4F4]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(24,0,173,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_80%_50%,rgba(28,177,227,0.08),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative z-20 max-w-xl">
            <EncryptedText
              text="Building the Future of AI at McMaster."
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1800AD] leading-tight z-10"
              revealDelayMs={20}
              charset="abcdefghijklmnopqrstuvwxyz"
            />
            <motion.p initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0, 0.40, 1], x: [-60, -5, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-6 text-xl text-[#4A5568] max-w-xl">
              Canada's next generation of AI innovators, creators, and problem-solvers starts here.
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0, 0.20, 1], x: [-60, -10, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-4 text-[#1800AD] font-semibold">Empowering the McMaster community through AI education and collaboration.</motion.p>
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0, 0.10, 1], x: [-60, -20, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-cta">
                Join the Society
              </Link>
              <Link to="/machacks" className="font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-6 py-3 rounded-lg hover:bg-[#1800AD] hover:text-white transition-all">
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

      {/* 2) What We Offer – White cards with teal-glow hover */}
      <motion.section {...fadeInRight} className="text-[#1800AD] py-24 md:py-32 bg-white rounded-b-[5vh] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInDown} className="font-heading text-4xl font-bold mb-4 text-[#1800AD]">Elevate your AI journey</motion.h2>
            <motion.p {...fadeIn} className="max-w-2xl mx-auto text-lg text-[#4A5568]">
              MacAI provides a comprehensive ecosystem for learners and builders alike. From foundational knowledge to real-world deployment, we've got you covered.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {OFFERINGS.map(({ imgsrc, title, desc }) => (
              <motion.div
                key={title}
                {...fadeInRight}
                className="relative bg-[#F0F4F4] rounded-3xl p-6 border border-[#1800AD]/10 shadow-sm hover:shadow-[0_0_30px_rgba(28,177,227,0.15)] transition-all duration-300 group overflow-hidden"
              >
                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />
                {/* Background gradient shift on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1CB1E3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="relative z-10">
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <img src={imgsrc} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#1800AD] mb-3">{title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3) Stats – Bold dark blue gradient, premium feel */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]">
        {/* Animated teal radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(61,223,245,0.12),transparent_70%)]" />
          <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(28,177,227,0.08),transparent_70%)]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(61,223,245,0.06),transparent_70%)]" />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {STATS.map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                {...fadeIn}
                className="text-center group"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#3DDFF5] mb-2 group-hover:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(61,223,245,0.5)]">
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className="text-[#1CB1E3] font-medium tracking-wide uppercase text-xs">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Testimonials – Dark blue for visual rhythm contrast */}
      <section className="py-24 md:py-32 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInDown} className="font-heading text-3xl font-bold text-[#1800AD]">
              Stories from our community
            </motion.h2>
          </div>
          <TestimonialCarousel items={SPOTLIGHT} />
        </div>
      </section>

      {/* 5) MacHacks – Marquee event announcement, very dark with glows */}
      <section className="relative h-full py-24 md:py-32 m-5 overflow-hidden rounded-[25vh]">
        {/* Background image */}
        <div
          className="absolute inset-0 h-screen"
          style={{ backgroundImage: 'url(/machacksbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Top gradient: fade in from testimonials bg (#F0F0F0)
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#F0F0F0] from-60% to-transparent" />
        {/* Bottom gradient: fade out to pathway quiz bg (#F0F4F4)
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F0F4F] to-transparent" /> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeInDown}>
            {/* Glowing Coming Soon badge */}
            
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(28,177,227,0.3)]">MacHacks</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Our flagship hackathon returns on March 21st. Join hundreds of students to build, learn, and compete.
            </p>
          </motion.div>
          {/* Glow ring around countdown */}
          <div className="inline-block rounded-2xl p-px bg-gradient-to-br from-[#1CB1E3]/40 via-[#3DDFF5]/20 to-[#1800AD]/40 shadow-[0_0_40px_rgba(28,177,227,0.15)]">
            <div className="rounded-2xl bg-[#060606]/80 px-6 py-4 backdrop-blur-sm">
              <Countdown variant="dark" />
            </div>
          </div>
          <motion.div {...fadeIn} className="mt-16">
            <Link to="/machacks" className="btn-cta text-lg px-10 py-4">
              View MacHacks
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6) Pathway Quiz – Light bg, rounded top */}
      <section className="py-24 md:py-32 bg-[#F0F4F4] text-[#1800AD] rounded-t-[5vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {done ? (
              <motion.div {...fadeIn} className="text-center py-12">
                <span className="text-[#1800AD] font-bold tracking-widest uppercase text-sm mb-4 block">Result</span>
                <h2 className="text-4xl font-bold text-[#1800AD] mb-6">Your MacAI Pathway</h2>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#1800AD]/10">
                  <p className="text-xl text-[#4A5568] leading-relaxed italic">
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
                  <p className="text-[#4A5568] text-lg mb-8">
                    Not sure where to start? Tell us a bit about your goals and we'll point you to the perfect pathway.
                  </p>
                </div>
                <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 shadow-2xl border border-[#1800AD]/5">
                  <div className="mb-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#4A5568]/60">
                    <span>Question {step + 1} of {QUIZ_QUESTIONS.length}</span>
                    <div className="w-24 h-1.5 bg-[#1800AD]/10 rounded-full overflow-hidden">
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
                        className="w-full text-left px-6 py-4 rounded-xl border-2 border-[#1800AD]/10 hover:border-[#1800AD] hover:bg-[#1800AD]/5 transition-all group relative overflow-hidden"
                      >
                        <span className="relative z-10 font-bold text-[#4A5568] group-hover:text-[#1800AD]">{opt}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          <div className="mt-24 pt-16 border-t border-[#1800AD]/10 flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-8 py-4 rounded-xl hover:bg-[#1800AD] hover:text-white transition-all">
              Join the Society
            </Link>
            <Link to="/machacks" className="btn-cta text-lg px-8 py-4 rounded-xl">
              Explore MacHacks 2026
            </Link>
          </div>
        </div>
      </section>

      {/* 7) Partners – Tighter padding, gradient separator, improved title */}
      <motion.section {...fadeInRight} className="relative py-16 md:py-24 bg-[#F0F4F4]">
        {/* Thin gradient separator at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1CB1E3]/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInDown} className="text-center mb-12">
            <p className="text-[#1CB1E3] font-bold tracking-widest uppercase text-xs mb-2">Our Sponsors</p>
            <h2 className="font-heading text-2xl font-bold text-[#1800AD]">Supported by our partners</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {CURRENT_PARTNERS.map((partner) => (
              <motion.a
                whileHover={{ scale: 1.05 }}
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center opacity-70 hover:opacity-100 transition-all duration-300 w-full max-w-[200px]"
              >
                <div className="bg-white/50 rounded-xl p-4 w-full aspect-[2/1] flex items-center justify-center border border-[#1800AD]/5 shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/partnerships" className="text-[#1800AD] font-bold hover:underline tracking-wide uppercase text-xs">Become a Partner</Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
