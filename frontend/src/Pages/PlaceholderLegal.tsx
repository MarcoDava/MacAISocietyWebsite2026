import { motion } from 'motion/react';

type Props = { title: string };

export default function PlaceholderLegal({ title }: Props) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="font-heading text-3xl font-bold text-[#F0F4F4] mb-6">{title}</h1>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[#A7C2C3]"
      >
        This page will contain the full {title.toLowerCase()} for the McMaster AI Society website. Content to be added.
      </motion.p>
    </section>
  );
}
