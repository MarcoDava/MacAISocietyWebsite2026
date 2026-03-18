import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { CURRENT_PARTNERS, PAST_PARTNERS } from '../data/partners';

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
      {/* Hero – blue header */}
      <section className="relative py-30 md:py-38 overflow-hidden">
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

      {/* Sponsors – off-white body */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-6">Our sponsors this year</h2>
          <motion.p
            {...fadeIn}
            className="text-[#4A5568] max-w-3xl mb-12"
          >
            We're proud to partner with organizations that share our mission. Their support fuels workshops, hackathons, and community events — and helps students gain real-world skills and connections.
          </motion.p>

          {/* Featured – Geotab own row */}
          {featuredSponsors.length > 0 && (
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1800AD]/60 mb-4">Featured Partner</p>
              <div className="flex justify-center">
                {featuredSponsors.map(({ name, logoUrl, website }) => (
                  <a
                    key={name}
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-10 border border-[#1800AD]/10 flex flex-col items-center justify-center min-h-[350px] w-[40vw] card-lift shadow-sm hover:shadow-xl transition-all"
                  >
                    {logoUrl ? (
                      <img src={logoUrl} alt={name} className="h-full max-w-full object-contain mb-4" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Standard sponsors grid */}
          {standardSponsors.length > 0 && (
            <div className="mb-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {standardSponsors.map(({ name, logoUrl, website }) => (
                  <a
                    key={name}
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-8 border border-[#1800AD]/10 flex flex-col items-center justify-center min-h-[300px] card-lift shadow-sm hover:shadow-lg transition-all"
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

          {/* Community – MLH bottom */}
          {communitySponsors.length > 0 && (
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4A5568]/60 mb-4">Community Partners</p>
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

      {/* All sponsors – current + past */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-heading text-3xl font-bold text-[#1800AD]">Past sponsors</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Partnership Contact Form */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#1800AD] mb-4">Interested in collaborating?</h2>
            <motion.p {...fadeIn} className="text-[#4A5568]">
              We're always looking for partners who want to support student AI innovation. Fill out the form below and we'll be in touch.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#1800AD]/10 space-y-6">
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
      </section>
    </>
  );
}
