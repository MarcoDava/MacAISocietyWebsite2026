import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { CURRENT_PARTNERS, PAST_PARTNERS } from '../data/partners';
import CountUp from '@/Components/CountUp';

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, delay: 0.2 },
};

export default function Partnerships() {
  const [form, setForm] = useState({ orgName: '', contactName: '', email: '', partnershipType: '', message: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const errors = {
    orgName: form.orgName.trim().length < 2 ? 'Organization name required' : '',
    contactName: form.contactName.trim().length < 2 ? 'Contact name required' : '',
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Enter a valid email' : '',
    partnershipType: !form.partnershipType ? 'Select a partnership type' : '',
    message: form.message.trim().length < 10 ? 'Message must be at least 10 characters' : '',
  };
  const valid = !errors.orgName && !errors.contactName && !errors.email && !errors.partnershipType && !errors.message;

  const FORMSPREE_ID = 'xbdzagdr';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ orgName: true, contactName: true, email: true, partnershipType: true, message: true });
    if (!valid) return;
    setSubmitStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'partnership',
          organizationName: form.orgName,
          contactName: form.contactName,
          email: form.email,
          partnershipType: form.partnershipType,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus('done');
        setForm({ orgName: '', contactName: '', email: '', partnershipType: '', message: '' });
        setTouched({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const featuredSponsors = CURRENT_PARTNERS.filter(p => p.tier === 'featured');
  const standardSponsors = CURRENT_PARTNERS.filter(p => p.tier === 'standard');
  const communitySponsors = CURRENT_PARTNERS.filter(p => p.tier === 'community');

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white border border-[#1800AD]/20 text-[#1800AD] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#1800AD] focus:ring-1 focus:ring-[#1800AD]/30";

  return (
    <>
      {/* Hero */}
      <section className="relative mt-10 py-15 md:py-25 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04002a] via-[#1800AD] to-[#1400a0]" />
        <div className="absolute -top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#1CB1E3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#3DDFF5]/10 blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[#3DDFF5] text-xs tracking-[0.3em] uppercase mb-5">
              McMaster AI Society · Partners
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.02] tracking-tight">
              Growing Together<br />
              <span className="bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] bg-clip-text text-transparent">
                With Our Sponsors
              </span>
            </h1>
            <p className="mt-6 text-[#A7C2C3] text-lg max-w-md leading-relaxed">
              None of what we do would be possible without our sponsors. Thank you for believing in the next generation of AI talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats – dark blue band */}
      <section className="py-12 bg-[#1800AD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { end: 110, suffix: '+', prefix: '', label: 'Students Reached' },
              { end: 12, suffix: '+', prefix: '', label: 'Events Funded' },
              { end: 6, suffix: '+', prefix: '', label: 'Industry Partners' },
              { end: 10, suffix: 'k+', prefix: '$', label: 'In Prizes Awarded' },
            ].map(({ end, suffix, prefix, label }) => (
              <div key={label} className="text-white">
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#3DDFF5]">
                  <CountUp end={end} suffix={suffix} prefix={prefix} />
                </div>
                <div className="text-[#A7C2C3] text-sm mt-1 uppercase tracking-wide font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors – off-white body */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Improved section header */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-3">Our sponsors this year</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] rounded-full mb-4" />
            <motion.p
              {...fadeIn}
              className="text-[#4A5568] max-w-3xl"
            >
              Their support directly fuels workshops, hackathons and career opportunities for McMaster's next generation of AI talent. We're proud to partner with organizations that share our mission.
            </motion.p>
            <p className="text-[#4A5568] max-w-3xl mt-4">
              This year marks a significant milestone for MacAI — with more sponsors, more workshops, and more impact than ever before.
            </p>
          </div>

          {/* Featured – Flagship Partner premium card */}
          {featuredSponsors.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gradient-to-r from-[#1CB1E3]/10 to-[#3DDFF5]/10 border border-[#1CB1E3]/30 rounded-full px-4 py-1 text-[#1800AD] text-xs font-bold uppercase tracking-widest">
                  Flagship Partner
                </span>
              </div>
              <div className="flex justify-center">
                {featuredSponsors.map(({ name, logoUrl, website }) => (
                  <a
                    key={name}
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex flex-col items-center justify-center min-h-[200px] max-w-lg w-full rounded-2xl p-10 bg-white
                      shadow-[0_0_60px_rgba(28,177,227,0.1)] hover:shadow-[0_0_80px_rgba(28,177,227,0.2)]
                      border border-[#1CB1E3]/20 hover:border-[#1CB1E3]/50
                      card-lift transition-all duration-300"
                    style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1CB1E3, #3DDFF5, #1800AD) border-box', border: '2px solid transparent' }}
                  >
                    {/* Flagship badge on card */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Flagship Partner
                    </div>
                    {logoUrl ? (
                      <img src={logoUrl} alt={name} className="h-full max-w-full object-contain mb-4" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Supporting Partners grid */}
          {standardSponsors.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gradient-to-r from-[#1CB1E3]/10 to-[#3DDFF5]/10 border border-[#1CB1E3]/30 rounded-full px-4 py-1 text-[#1800AD] text-xs font-bold uppercase tracking-widest">
                  Supporting Partners
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {standardSponsors.map(({ name, logoUrl, website }) => (
                  <a
                    key={name}
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-8 border border-[#1800AD]/10 flex flex-col items-center justify-center min-h-[180px] card-lift shadow-sm hover:shadow-lg transition-all"
                  >
                    {logoUrl ? (
                      <img src={logoUrl} alt={name} className="h-full max-w-full object-contain" />
                    ) : (
                      <div className="w-32 h-16 bg-[#1800AD]/10 rounded flex items-center justify-center text-[#1800AD]/50 text-sm">
                        Logo
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Community Partners */}
          {communitySponsors.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gradient-to-r from-[#1CB1E3]/10 to-[#3DDFF5]/10 border border-[#1CB1E3]/30 rounded-full px-4 py-1 text-[#1800AD] text-xs font-bold uppercase tracking-widest">
                  Community Partners
                </span>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                {communitySponsors.map(({ name, logoUrl, website }) => (
                  <a
                    key={name}
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-6 border border-[#1800AD]/10 flex flex-col items-center justify-center min-h-[120px] w-48 card-lift shadow-sm hover:shadow-lg transition-all"
                  >
                    {logoUrl ? (
                      <img src={logoUrl} alt={name} className="max-h-12 max-w-full object-contain" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past sponsors – flat grid */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-3">Past Partners</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1CB1E3] to-[#3DDFF5] rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {PAST_PARTNERS.filter(p => p.logoUrl).map((partner) => (
              <a
                key={partner.name + partner.year}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 border border-[#1800AD]/10 flex items-center justify-center h-24 w-full card-lift shadow-sm hover:shadow-md transition-all group"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.alt || partner.name}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with MacAI? – dark blue */}
      <section className="py-16 md:py-24 bg-[#1800AD] rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-6">Why partner with MacAI?</h2>
              <p className="text-[#A7C2C3] text-lg mb-8">
                Partnering with McMaster AI Society means direct access to Canada's brightest emerging AI talent — and a chance to shape the future of the field.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Talent Pipeline', desc: 'Connect with top AI/ML students actively seeking internships and full-time roles.' },
                  { title: 'Brand Visibility', desc: 'Showcase your brand at workshops, MacHacks, and CUCAI — reaching 100+ students per event.' },
                  { title: 'Community Impact', desc: 'Directly fund meaningful AI education, making a real difference in students\' careers.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#3DDFF5] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#F0F4F4]">{title}:</span>{' '}
                      <span className="text-[#A7C2C3]">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Access to top AI talent', 'Brand exposure at events', 'Workshop co-hosting', 'Recruitment opportunities', 'Community goodwill', 'Innovation partnerships'].map((item) => (
                <div key={item} className="bg-[#F0F4F4]/5 border border-[#3DDFF5]/20 rounded-xl p-4 text-center">
                  <p className="text-[#F0F4F4] text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Contact Form */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Form card with gradient header */}
          <div className="rounded-2xl shadow-xl overflow-hidden border border-[#1800AD]/10">
            {/* Gradient header band */}
            <div className="bg-[#1800AD]  px-8 py-8 text-center">
              <h2 className="font-heading text-3xl font-bold text-white mb-2">Let's Build Something Together</h2>
              <p className="text-white/80 text-sm">
                We're always looking for partners who want to support student AI innovation. Fill out the form below and we'll be in touch.
              </p>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} className="bg-white px-8 md:px-10 py-8 md:py-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="partner-org" className="block text-sm font-medium text-[#4A5568] mb-2">Organization Name</label>
                  <input
                    id="partner-org"
                    type="text"
                    placeholder="Your organization"
                    value={form.orgName}
                    onChange={(e) => setForm(f => ({ ...f, orgName: e.target.value }))}
                    onBlur={() => setTouched(t => ({ ...t, orgName: true }))}
                    className={inputClasses}
                    aria-invalid={touched.orgName && !!errors.orgName}
                  />
                  {touched.orgName && errors.orgName && <p className="mt-1 text-sm text-[#E00064]">{errors.orgName}</p>}
                </div>
                <div>
                  <label htmlFor="partner-name" className="block text-sm font-medium text-[#4A5568] mb-2">Contact Name</label>
                  <input
                    id="partner-name"
                    type="text"
                    placeholder="Your name"
                    value={form.contactName}
                    onChange={(e) => setForm(f => ({ ...f, contactName: e.target.value }))}
                    onBlur={() => setTouched(t => ({ ...t, contactName: true }))}
                    className={inputClasses}
                    aria-invalid={touched.contactName && !!errors.contactName}
                  />
                  {touched.contactName && errors.contactName && <p className="mt-1 text-sm text-[#E00064]">{errors.contactName}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="partner-email" className="block text-sm font-medium text-[#4A5568] mb-2">Email</label>
                  <input
                    id="partner-email"
                    type="email"
                    placeholder="you@organization.com"
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    onBlur={() => setTouched(t => ({ ...t, email: true }))}
                    className={inputClasses}
                    aria-invalid={touched.email && !!errors.email}
                  />
                  {touched.email && errors.email && <p className="mt-1 text-sm text-[#E00064]">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="partner-type" className="block text-sm font-medium text-[#4A5568] mb-2">Partnership Type</label>
                  <select
                    id="partner-type"
                    value={form.partnershipType}
                    onChange={(e) => setForm(f => ({ ...f, partnershipType: e.target.value }))}
                    onBlur={() => setTouched(t => ({ ...t, partnershipType: true }))}
                    className={inputClasses}
                    aria-invalid={touched.partnershipType && !!errors.partnershipType}
                  >
                    <option value="">Select type...</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="event-collaboration">Event Collaboration</option>
                    <option value="workshop">Workshop</option>
                    <option value="other">Other</option>
                  </select>
                  {touched.partnershipType && errors.partnershipType && <p className="mt-1 text-sm text-[#E00064]">{errors.partnershipType}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="partner-message" className="block text-sm font-medium text-[#4A5568] mb-2">Message</label>
                <textarea
                  id="partner-message"
                  rows={5}
                  placeholder="Tell us about your partnership interest..."
                  value={form.message}
                  onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                  onBlur={() => setTouched(t => ({ ...t, message: true }))}
                  className={`${inputClasses} resize-y`}
                  aria-invalid={touched.message && !!errors.message}
                />
                {touched.message && errors.message && <p className="mt-1 text-sm text-[#E00064]">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={!valid || submitStatus === 'sending'}
                className="btn-cta w-full disabled:opacity-50 disabled:pointer-events-none"
              >
                {submitStatus === 'sending' ? 'Sending...' : submitStatus === 'done' ? 'Sent! We\'ll be in touch.' : 'Send Partnership Inquiry'}
              </button>
              {submitStatus === 'error' && (
                <p className="text-sm text-[#E00064] text-center">Something went wrong. Please try again or email us at info@mcmasterai.ca.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
