import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn, fadeInRight } from '@/lib/animations';
import koreanDelegatesImg from '../assets/About/KoreanDelegatesHost.jpg';
import founderImg from '../assets/About/MacAIFounder.jpg';
import workshopImg from '../assets/About/FirstWorkshopMicrosoft.jpg';

import review1819 from '../assets/About/yearEndReview2018-2019.pdf';
import review1920 from '../assets/About/yearEndReview2019-2020.pdf';
import review2021 from '../assets/About/yearEndReview2020-2021.pdf';


const YEAR_REVIEWS = [
  { year: '2018-2019', file: review1819 },
  { year: '2019-2020', file: review1920 },
  { year: '2020-2021', file: review2021 },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04002a] via-[#1800AD] to-[#1400a0]" />
        <div className="absolute -top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#1CB1E3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#3DDFF5]/10 blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
          >
            <p className="font-mono text-[#3DDFF5] text-xs tracking-[0.3em] uppercase mb-5">
              McMaster AI Society · Since 2017
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.02] tracking-tight">
              Our Story,<br />
              <span className="bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] bg-clip-text text-transparent">
                Our Mission
              </span>
            </h1>
            <p className="mt-6 text-[#A7C2C3] text-lg max-w-md leading-relaxed">
              Founded in 2017, MacAI has grown into one of Canada's most active student AI societies — driving education, innovation, and community at McMaster and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInRight} className="max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-6">Our Mission</h2>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
              Our mission is to promote the study and implementation of AI to the undergraduate and graduate students of McMaster. We accomplish this through a wide variety of events and initiatives, including monthly workshops, a yearly hackathon (MacHacks) and various projects within our society and in collaboration with other organizations, a yearly networking social, and much more.
            </p>
            <motion.div {...fadeIn}>
              <a
                href="https://www.linkedin.com/company/mcmasterai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-6 py-3 rounded-lg hover:bg-[#1800AD] hover:text-white transition-all"
              >
                Find out about our upcoming events here
                <span>↗</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History & Accomplishments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeInRight}>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                We have big plans for new and innovative ways to deliver this mission, the likes of which are virtually unprecedented for a student group. We developed McMaster's first ever open undergraduate AI course, INNOVATE 1Z03, taught by Rhodes Scholar and Mac AI Advisory Board member Matthew Jordan. Four different companies created by Mac AI executives have been accepted into The Forge business incubator. We have formed landmark club partnerships with the Magarvey Laboratories and the W Booth School of Engineering Practice and Technology to develop Mac AI projects.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="rounded-2xl overflow-hidden shadow-lg border border-[#1800AD]/10">
              <img src={koreanDelegatesImg} alt="South Korean dignitaries and Mac AI executives" className="w-full h-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeIn} className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-[#1800AD]/10">
              <img src={founderImg} alt="Mac AI Founder" className="w-full h-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div {...fadeInRight} className="order-1 lg:order-2">
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                We have experience on the world stage, having been a featured organization at the 2018 AI World Forum, hosted a bipartisan delegation of 25 South Korean representatives, and submitted projects to international competitions like NTIRE 2020. Our members have also used what they learned at Mac AI to create some amazing projects of their own, including leading as the first-placed finalist in the Canada-wide Leaders Prize for fake news detection.
              </p>
              <motion.div {...fadeIn}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 font-heading font-bold text-[#1800AD] border-2 border-[#1800AD] px-6 py-3 rounded-lg hover:bg-[#1800AD] hover:text-white transition-all"
                >
                  Find out more about our projects here
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeInRight}>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                We are volunteer-led by a dedicated group of undergraduate and graduate students from nearly all academic faculties at McMaster University. Our diverse team embodies the many different initiatives we host and our broad appeal to all students at McMaster. The Mac AI core executive team is supported by sub-teams for each Director, a MacHacks organizing committee, and the Mac AI Advisory Board.
              </p>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                Growing quickly since our 2017 founding, the McMaster AI Society has become the largest student-run AI organization in the world with over 1,000 members, numerous completed projects, and hundreds of successful events.
              </p>
              <motion.div {...fadeIn}>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 btn-cta"
                >
                  Find out more at our team page
                </Link>
              </motion.div>
            </motion.div>
            <motion.div {...fadeIn} className="rounded-2xl overflow-hidden shadow-lg border border-[#1800AD]/10">
              <img src={workshopImg} alt="Mac AI Workshop" className="w-full h-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Year End Reviews */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#1800AD]">Year End Reviews</h2>
            <p className="mt-4 text-[#4A5568] max-w-2xl mx-auto">
              Our annual reports documenting the achievements, projects, and impact of the MacAI Society.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {YEAR_REVIEWS.map((review) => (
              <motion.div
                key={review.year}
                {...fadeIn}
                className="bg-white p-8 rounded-2xl border border-[#1800AD]/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#1800AD]/10 rounded-xl flex items-center justify-center mb-6 text-[#1800AD] group-hover:bg-[#1800AD] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1800AD] mb-2">{review.year} Review</h3>
                <p className="text-[#4A5568] text-sm mb-6">Annual society report</p>
                <a
                  href={review.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1800AD] font-bold hover:underline"
                >
                  View Report (PDF)
                  <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
