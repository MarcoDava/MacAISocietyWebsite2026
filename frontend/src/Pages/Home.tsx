import { Link } from 'react-router-dom';
import Countdown from '../Components/Countdown';
import CountUp from '../Components/CountUp';

const STATS = [
  { value: 100, suffix: '+', label: 'Members' },
  { value: 50, suffix: '+', label: 'Industry Speakers' },
  { value: 1, suffix: '', label: 'Flagship Hackathon' },
  { value: 30, suffix: '+', label: 'Workshops Hosted' },
  { value: 20, suffix: '+', label: 'Sponsors' },
];

const OFFERINGS = [
  { title: 'Workshops', desc: 'Hands-on sessions on ML, NLP, computer vision, and more.' },
  { title: 'Hackathons', desc: 'MacHacks and other events where you build and compete.' },
  { title: 'Networking', desc: 'Connect with industry speakers and like-minded peers.' },
  { title: 'Projects', desc: 'Join CUCAI and other real-world AI projects.' },
];

const SPOTLIGHT = [
  { quote: 'I wanted to learn AI in a supportive environment. MacAI gave me that and a community.', name: 'Member' },
  { quote: 'The workshops and hackathons helped me land my first ML internship.', name: 'Member' },
  { quote: 'MacAI feels like home. Everyone is here to grow together.', name: 'Member' },
];

export default function Home() {
  return (
    <>
      {/* 1) Hero – Hook (vision + energy) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.15),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F4F4] leading-tight">
              Building the Future of AI at McMaster.
            </h1>
            <p className="mt-6 text-xl text-[#A7C2C3] max-w-xl">
              Canada's next generation of AI innovators, creators, and problem-solvers starts here.
            </p>
            <p className="mt-4 text-[#3DDFF5] font-medium">TBD</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-cta">
                Join the Society
              </Link>
              <Link to="/machacks" className="btn-secondary">
                Explore MacHacks 2026
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-square rounded-2xl bg-[#1CB1E3]/10 border border-[#3DDFF5]/30 flex items-center justify-center">
              <span className="text-[#3DDFF5]/50 text-sm">Visual / illustration placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Social proof */}
      <section className="py-16 md:py-24 bg-[#0f0066]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center text-[#F0F4F4] mb-12">
            Our community in numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="bg-[#1800AD]/60 rounded-xl p-6 text-center card-lift border border-[#1CB1E3]/20"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#3DDFF5]">
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className="mt-1 text-[#A7C2C3] text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) What we offer */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4">What we offer</h2>
          <p className="text-[#A7C2C3] max-w-2xl mb-12">
            From workshops and hackathons to networking and real-world projects, MacAI gives you the tools and community to grow in AI. Whether you're just starting or already building, there's a place for you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFERINGS.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#0f0066]/60 rounded-xl p-6 border border-[#1CB1E3]/X card-lift"
              >
                <h3 className="font-heading text-xl font-bold text-[#3DDFF5]">{title}</h3>
                <p className="mt-2 text-[#A7C2C3] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Upcoming events + countdown */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1CB1E3]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4">MacHacks 2026</h2>
          <p className="text-[#A7C2C3] mb-8">March 21st, 2026 — Our flagship hackathon. Build, learn, compete.</p>
          <Countdown />
          <Link to="/machacks" className="btn-cta inline-block mt-10">
            Sign up for the Hackathon
          </Link>
        </div>
      </section>

      {/* 5) Member spotlight */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-12 text-center">
            Why our members joined MacAI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SPOTLIGHT.map(({ quote, name }) => (
              <blockquote
                key={quote.slice(0, 30)}
                className="bg-[#0f0066]/60 rounded-xl p-8 border border-[#1CB1E3]/X card-lift"
              >
                <p className="text-[#F0F4F4] italic">"{quote}"</p>
                <cite className="mt-4 block text-[#3DDFF5] not-italic">— {name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Get involved – quiz CTA + buttons */}
      <section className="py-16 md:py-24 bg-[#0f0066]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-4 text-center">
            Get involved
          </h2>
          <p className="text-[#A7C2C3] text-center max-w-xl mx-auto mb-10">
            Not sure where to start? Take a quick quiz to find the right path for you — projects, workshops, or mentoring.
          </p>
          <div className="flex justify-center mb-12">
            <Link to="/get-involved" className="btn-cta">
              Which MacAI pathway is right for you?
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Join the Society
            </Link>
            <Link to="/machacks" className="btn-cta">
              Explore MacHacks 2026
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get Involved
            </Link>
            <Link to="/partnerships" className="btn-secondary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsor strip – bottom of landing */}
      <section className="py-12 border-t border-[#1CB1E3]/20 bg-[#0f0066]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#A7C2C3] text-sm mb-6">Supported by our partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Partner 1', 'Partner 2', 'Partner 3'].map((name) => (
              <div
                key={name}
                className="w-24 h-12 bg-[#1CB1E3]/10 rounded-lg border border-[#1CB1E3]/20 flex items-center justify-center text-[#3DDFF5]/70 text-xs"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link to="/partnerships" className="text-[#3DDFF5] hover:underline text-sm">View all sponsors</Link>
          </p>
        </div>
      </section>
    </>
  );
}
