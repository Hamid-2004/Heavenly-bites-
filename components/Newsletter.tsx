"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useScrollAnimation, fadeInUp } from "@/lib/utils";

export default function Newsletter() {
  const { ref, isInView } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="reviews"
      className="section-padding"
      aria-labelledby="newsletter-heading"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] glass-pink p-8 md:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-secondary/50 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <motion.span
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-3 inline-block font-accent text-3xl text-primary"
            >
              Stay in the Loop
            </motion.span>

            <motion.h2
              id="newsletter-heading"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-heading text-3xl font-semibold text-dark md:text-4xl"
            >
              Join Our Sweet Newsletter
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-4 text-gray"
            >
              Be the first to know about new flavors, seasonal specials, and
              exclusive offers — delivered straight to your inbox.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex items-center justify-center gap-2 text-primary"
                role="status"
              >
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium">
                  Thank you! You&apos;re on our sweet list.
                </span>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="relative flex-1">
                  <Mail
                    className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray"
                    aria-hidden="true"
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-full border border-white/60 bg-white/80 py-3.5 pr-4 pl-12 text-sm text-dark placeholder:text-muted outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(245, 123, 165, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-soft"
                >
                  Notify Me
                  <Send className="h-4 w-4" aria-hidden="true" />
                </motion.button>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
