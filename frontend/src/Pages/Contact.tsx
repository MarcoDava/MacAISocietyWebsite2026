import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const errors = {
    name: form.name.trim().length < 2 ? 'Name must be at least 2 characters' : '',
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Enter a valid email' : '',
    message: form.message.trim().length < 10 ? 'Message must be at least 10 characters' : '',
  };
  const valid = !errors.name && !errors.email && !errors.message;

  const fadeIn = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 1, delay: 0.2 },
  };

  const FORMSPREE_ID = 'xbdzagdr';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus('done');
        setForm({ name: '', email: '', message: '' });
        setTouched({});
      } else {
        fallbackMailTo();
        setSubmitStatus('error');
      }
    } catch {
      fallbackMailTo();
      setSubmitStatus('error');
    }
  };

  const fallbackMailTo = () => {
    const subject = encodeURIComponent(`MacAI Contact — ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    window.open(`mailto:info@mcmasterai.ca?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <>
      {/* Hero – blue header */}
      <section className="relative py-30 md:py-38 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1800AD] via-[#0f0066] to-[#1800AD]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(28,177,227,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F0F4F4]">
            Contact
          </h1>
          <motion.p
            {...fadeIn}
            className="mt-4 text-xl text-[#A7C2C3] max-w-2xl"
          >
            Have a question or want to get involved? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Form section – off-white body */}
      <section className="py-16 md:py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#1800AD] mb-6">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[#4A5568] mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#1800AD]/20 text-[#1800AD] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#1800AD] focus:ring-1 focus:ring-[#1800AD]/30"
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-[#E00064]">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[#4A5568] mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#1800AD]/20 text-[#1800AD] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#1800AD] focus:ring-1 focus:ring-[#1800AD]/30"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-[#E00064]">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[#4A5568] mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#1800AD]/20 text-[#1800AD] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#1800AD] focus:ring-1 focus:ring-[#1800AD]/30 resize-y"
                  aria-invalid={touched.message && !!errors.message}
                  aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-[#E00064]">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={!valid || submitStatus === 'sending'}
                className="btn-cta disabled:opacity-50 disabled:pointer-events-none"
              >
                {submitStatus === 'sending' ? 'Sending...' : submitStatus === 'done' ? 'Sent!' : 'Send message'}
              </button>
              {submitStatus === 'error' && (
                <p className="text-sm text-[#E00064]">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          </div>

          {/* Map & info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#1800AD] mb-6">Find us</h2>
            <motion.p
              {...fadeIn}
              className="text-[#4A5568] mb-4"
            >
              McMaster University<br />
              1280 Main St W, Hamilton, ON L8S 4L8
            </motion.p>
            <a
              href="https://www.google.com/maps?q=McMaster+University+1280+Main+St+W+Hamilton+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#1800AD] hover:underline mb-8 font-medium"
            >
              Open in Google Maps →
            </a>
            <motion.div
              {...fadeIn}
              className="aspect-video bg-white rounded-xl border border-[#1800AD]/10 overflow-hidden shadow-sm"
            >
              <iframe
                title="Map of McMaster University"
                src="https://www.google.com/maps?q=McMaster+University+1280+Main+St+W+Hamilton+ON&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <div className="mt-8">
              <h3 className="font-heading font-bold text-[#1800AD] mb-3">Connect with us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/mcmasterai/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1800AD] hover:underline font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:info@mcmasterai.ca"
                  className="text-[#1800AD] hover:underline font-medium"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
