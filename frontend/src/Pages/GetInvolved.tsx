import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

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

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

export default function GetInvolved() {
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

  if (done) {
    const p = answers.pathway || 'projects';
    return (
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4">Your MacAI pathway</h1>
        <motion.p {...fadeIn} className="text-[#A7C2C3] mb-8">
          {PATHWAYS[p] || PATHWAYS.projects}
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-cta">Join or contact the team</Link>
          <Link to="/projects" className="btn-secondary">View projects</Link>
          <Link to="/machacks" className="btn-secondary">MacHacks 2026</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-20">
      <h1 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-2">Which MacAI pathway is right for you?</h1>
      <motion.p {...fadeIn} className="text-[#A7C2C3] mb-10">
        Answer a few quick questions.
      </motion.p>
      <motion.div
        {...fadeIn}
        className="bg-[#0f0066]/60 rounded-xl p-8 border border-[#1CB1E3]/20"
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
    </section>
  );
}
