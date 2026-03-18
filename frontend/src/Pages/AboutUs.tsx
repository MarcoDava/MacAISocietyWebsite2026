import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

const fadeInRight = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="bg-[#1800AD]/5 rounded-2xl border border-[#1800AD]/10 aspect-[4/3] flex items-center justify-center overflow-hidden">
      <div className="text-center p-8">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#1800AD]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#1800AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-[#1800AD]/40 text-sm font-medium">{label}</p>
        <p className="text-[#1800AD]/20 text-xs mt-1">Image placeholder</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      {/* Hero – blue header */}
      <section className="relative py-30 md:py-38 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            About Us
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl"
          >
            Founded in 2017, MacAI has grown into one of Canada's most active student AI societies — driving education, innovation, and community at McMaster and beyond.
          </motion.p>
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

      {/* History & Accomplishments – with images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeInRight}>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                We have big plans for new and innovative ways to deliver this mission, the likes of which are virtually unprecedented for a student group. We developed McMaster's first ever open undergraduate AI course, INNOVATE 1Z03, taught by Rhodes Scholar and Mac AI Advisory Board member Matthew Jordan. Four different companies created by Mac AI executives have been accepted into The Forge business incubator. We have formed landmark club partnerships with the Magarvey Laboratories and the W Booth School of Engineering Practice and Technology to develop Mac AI projects.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <ImagePlaceholder label="South Korean dignitaries and Mac AI executives" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <ImagePlaceholder label="Mac AI presentation" />
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <motion.div {...fadeIn}>
              <ImagePlaceholder label="Andrew Leber speaking at a Mac AI meetup" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
