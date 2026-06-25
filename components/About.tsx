"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Leaf, Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { aboutFeatures } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  floatingAnimation,
  useScrollAnimation,
} from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Leaf,
  Sparkles,
};

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeInUp}
              className="mb-3 inline-block font-accent text-3xl text-primary"
            >
              Our Story
            </motion.span>

            <motion.h2
              id="about-heading"
              variants={fadeInUp}
              className="font-heading text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
            >
              A Passion for{" "}
              <span className="font-accent text-primary">Sweet</span> Artistry
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base leading-relaxed text-gray md:text-lg"
            >
              Heavenly Bites began as a small home kitchen dream — a place where
              flour, sugar, and imagination came together to create magic. Today,
              we are Lahore&apos;s beloved artisan bakery, known for turning
              everyday moments into extraordinary celebrations.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base leading-relaxed text-gray"
            >
              Our master bakers blend time-honored techniques with contemporary
              design, ensuring every cake tells a story and every bite leaves a
              lasting memory.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid gap-5 sm:grid-cols-3"
            >
              {aboutFeatures.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.id} className="text-center sm:text-left">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/60 text-primary">
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                    </div>
                    <h3 className="text-sm font-semibold text-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray">{feature.description}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-shadow hover:shadow-glow"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card"
                >
                  <Image
                    src="/images/about-1.jpg"
                    alt="Baker decorating a cake with precision"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square overflow-hidden rounded-3xl shadow-card"
                >
                  <Image
                    src="/images/about-2.jpg"
                    alt="Fresh pastries on display"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square overflow-hidden rounded-3xl shadow-card"
                >
                  <Image
                    src="/images/about-3.jpg"
                    alt="Elegant wedding cake centerpiece"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card"
                >
                  <Image
                    src="/images/about-4.jpg"
                    alt="Artisan baking ingredients"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={floatingAnimation}
              className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-2xl bg-white px-6 py-3 shadow-card"
            >
              <p className="text-center font-heading text-2xl font-semibold text-primary">
                10+
              </p>
              <p className="text-center text-xs font-medium text-gray">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
