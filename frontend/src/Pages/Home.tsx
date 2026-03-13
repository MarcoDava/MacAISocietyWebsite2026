import { Link } from 'react-router-dom';
import Countdown from '../Components/Countdown';
import CountUp from '../Components/CountUp';
import { motion } from 'motion/react';
import { Spotlight } from '../Components/ui/spotlight';
import { EncryptedText } from '../Components/ui/encrypted-text';
import { useState } from 'react';
import { CURRENT_PARTNERS } from '../data/partners';
import { InfiniteMovingCards } from '../Components/ui/infinite-moving-cards';
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
            {/* <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: [0,0.40, 1], y: [-10, -4, 0] }} transition={{ duration: 0.5 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F4F4] leading-tight">
              
              Building the Future of AI at McMaster.
            </motion.h1> */}
            <EncryptedText 
            text="Building the Future of AI at McMaster." 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F4F4] leading-tight z-10" 
            revealDelayMs={20}
            charset="abcdefghijklmnopqrstuvwxyz"
            />
            <motion.p initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0,0.40, 1], x: [-60, -5, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-6 text-xl text-[#A7C2C3] max-w-xl">
              Canada's next generation of AI innovators, creators, and problem-solvers starts here.
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0,0.20, 1], x: [-60, -10, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-4 text-[#3DDFF5] font-medium">TBD</motion.p>
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: [0,0.10, 1], x: [-60, -20, 0] }} transition={{ duration: 2, delay: 0.2 }} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-cta">
                Join the Society
              </Link>
              <Link to="/machacks" className="btn-secondary">
                Explore MacHacks 2026
              </Link>
            </motion.div>
          </div>
          {/* Hero carousel – desktop beside text */}
          <div className="hidden md:flex aspect-square rounded-2xl flex-col items-center justify-center">
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

        {/* Mobile hero background carousel behind text */}
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

      {/* 2) Social proof */}
      <section className="py-16 md:py-24 bg-[#0f0066]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInDown} className="font-heading text-3xl font-bold text-center text-[#F0F4F4] mb-12">
            Our community in numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
            {STATS.map(({ value, suffix, label }) => (
              <motion.div
                key={label}
                {...fadeInRight}
                whileHover={{  scale: 1.10, y: -5 , transition: { duration: 0.2 }}}
                className="bg-[#1800AD] rounded-[3vh] p-6 text-center border border-[#1CB1E3]/20 hover:shadow-[0_6px_20px_#000000]/20"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#3DDFF5]">
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className="mt-1 text-[#A7C2C3] text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) What we offer */}
      <motion.section {...fadeInRight} className="text-black py-16 md:py-50 bg-[#F0F4F4] rounded-[5vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInRight} className="font-heading text-3xl font-bold mb-4">What we offer</motion.h2>
          <motion.p {...fadeInRight} className="max-w-2xl mb-12">
            From workshops and hackathons to networking and real-world projects, MacAI gives you the tools and community to grow in AI. Whether you're just starting or already building, there's a place for you.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFERINGS.map(({ imgsrc,   title, desc }) => (
              <motion.div
                key={title}
                {...fadeInRight}
                className="bg-[#1800AD] rounded-[3vh] p-6 border border-[#1CB1E3]/20 card-lift"
              >
                <img src={imgsrc} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="font-heading text-xl font-bold text-[#3DDFF5]">{title}</h3>
                <p className="mt-2 text-[#A7C2C3] text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4) Upcoming events + countdown */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1CB1E3]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeInDown} className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4">MacHacks 2026</motion.h2>
          <motion.p {...fadeInRight} className="text-[#A7C2C3] mb-8">March 21st, 2026 — Our flagship hackathon. Build, learn, compete.</motion.p>
          <Countdown />
          <Link to="/machacks" className="btn-cta inline-block mt-10">
            Sign up for the Hackathon
          </Link>
        </div>
      </section>

      {/* 6) Member spotlight */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInDown} className="font-heading text-3xl font-bold text-[#F0F4F4] mb-12 text-center">
            Why our members joined MacAI
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SPOTLIGHT.map(({ quote, name }) => (
              <motion.blockquote
                key={quote.slice(0, 30)}
                {...fadeInRight}
                className="bg-[#0f0066]/60 rounded-xl p-8 border border-[#1CB1E3]/20 card-lift"
              >
                <p className="text-[#F0F4F4] italic">"{quote}"</p>
                <cite className="mt-4 block text-[#3DDFF5] not-italic">— {name}</cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Get involved – quiz CTA + buttons */}
      <section className="py-16 md:py-24 bg-[#F0F4F4] rounded-[5vh]">
        <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-xl mx-auto px-4 py-20">
            
            {done ?
            
              <section className="max-w-2xl mx-auto px-4 py-20 text-center">
                
                <h1 className="text-3xl font-bold text-[#1800AD] mb-4">Your MacAI pathway</h1>
                <motion.p {...fadeIn} className="text-[#1800AD]/70 mb-8">
                  {PATHWAYS[answers.pathway ?? 'projects'] || PATHWAYS.projects}
                </motion.p>
                
              </section>
              
              :
              <div>
                <h1 className="font-heading text-3xl font-bold text-[#1800AD] mb-2">
                  Which MacAI pathway is right for you?
                </h1>
                <motion.p {...fadeIn} className="text-[#1800AD]/50 mb-10">
                  Answer a few quick questions.
                </motion.p>
                <motion.div
                  {...fadeIn}
                  className="bg-[#1800AD]/60 rounded-xl p-8 border border-[#1CB1E3]/20"
                >
                  <h2 className="font-heading text-xl text-[#3DDFF5] mb-6">
                    {current.q}
                  </h2>
                    <ul className="space-y-3">
                      {current.options.map((opt) => (
                        <li key={opt}>
                          <button
                            type="button"
                            onClick={() => handleNext(opt)}
                            className="w-full text-left px-4 py-3 rounded-lg bg-[#1800AD]/60 border border-[#1CB1E3]/30 text-[#F0F4F4] hover:border-[#3DDFF5] hover:bg-[#1CB1E3]/10 transition-colors"
                          >
                            {opt}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <motion.p
                      {...fadeIn}
                      className="mt-6 text-[#A7C2C3] text-sm"
                    >
                      Question {step + 1} of {QUIZ_QUESTIONS.length}
                    </motion.p>
                  </motion.div>
                </div>
            }
            </section>
                    
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"   className="font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-6 py-3 rounded-md hover:bg-[#1800AD]/5 transition-colors">
              Join the Society
            </Link>
            <Link to="/machacks" className="btn-cta">
              Explore MacHacks 2026
            </Link>
            <Link to="/contact" className="font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-6 py-3 rounded-md hover:bg-[#1800AD]/5 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              to="/partnerships"
              className="font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-6 py-3 rounded-md hover:bg-[#1800AD]/5 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsor strip – bottom of landing */}
      <section className="py-12 border-t border-[#1CB1E3]/20 bg-[#0f0066]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p {...fadeInRight} className="text-center text-[#A7C2C3] text-sm mb-6">Supported by our partners</motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CURRENT_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center text-xs text-[#A7C2C3]"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="w-24 h-12 object-contain"
                />
                <span className="mt-1">{partner.name}</span>
              </a>
            ))}
          </div>
          <motion.p {...fadeInRight} className="text-center mt-6">
            <Link to="/partnerships" className="text-[#3DDFF5] hover:underline text-sm">View all sponsors</Link>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
