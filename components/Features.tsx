"use client";

import { motion } from "framer-motion";
import { Croissant, Palette, Truck, Heart, type LucideIcon } from "lucide-react";
import { features } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  useScrollAnimation,
} from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Croissant,
  Palette,
  Truck,
  Heart,
};

export default function Features() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="pre-orders"
      className="section-padding relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block font-accent text-3xl text-primary">
            Why Choose Us
          </span>
          <h2
            id="features-heading"
            className="font-heading text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
          >
            Crafted with Care, Delivered with Love
          </h2>
          <p className="mt-4 text-gray">
            Every detail matters — from the first whisk to the final ribbon on
            your gift box.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.article
                key={feature.id}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 60px rgba(245, 123, 165, 0.18)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-3xl bg-white p-7 shadow-card transition-colors hover:bg-secondary/20"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
