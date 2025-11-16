"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >

      <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight">Kontakt</h2>

      <div className="mt-10">
        <ContactForm />
      </div>
    </motion.div>
  );
}
