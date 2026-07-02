"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { customerAvatars } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/constants";
import { fadeInUp, staggerContainer, floatingAnimation, floatingSlowAnimation } from "@/lib/utils";

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 80]);
  const contentY = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-secondary/60 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" />
      </div>

      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.span
              variants={fadeInUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Artisan Bakery Since 2014
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl leading-[1.1] font-semibold text-dark sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Indulge in{" "}
              <span className="font-accent text-5xl text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                Sweet
              </span>{" "}
              Perfection
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-gray md:text-lg"
            >
              Handcrafted cakes, delicate pastries, and luxury gift baskets —
              baked fresh daily with premium ingredients and a touch of elegance
              for every celebration.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(245, 123, 165, 0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-shadow"
              >
                Order Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-white/60 px-7 py-3 text-sm font-medium text-dark backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-secondary/30"
                >
                  View Menu
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <div className="flex -space-x-3">
                {customerAvatars.map((avatar, index) => (
                  <div
                    key={avatar}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm"
                    style={{ zIndex: customerAvatars.length - index }}
                  >
                    <Image
                      src={avatar}
                      alt={`Happy customer ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray">
                  <span className="font-semibold text-dark">2,500+</span> happy
                  customers
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <motion.div
              animate={floatingSlowAnimation}
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card"
            >
              <Image
                src="/images/cake-6.png"
                alt="Featured rose velvet celebration cake with elegant decorations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent" />
            </motion.div>

            <motion.div
              animate={floatingAnimation}
              className="absolute -top-4 -right-2 z-10 rounded-2xl glass px-4 py-3 shadow-soft sm:-right-6"
            >
              <p className="font-accent text-2xl text-primary">Best Seller</p>
              <p className="text-xs font-medium text-gray">Rose Velvet Dream</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -3, 0],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-4 -left-4 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card sm:-left-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-dark">Fresh Daily</p>
                <p className="text-xs text-gray">Baked with love</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/4 -left-6 h-16 w-16 rounded-full bg-secondary/70 blur-sm"
              aria-hidden="true"
            />
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute bottom-1/4 -right-4 h-12 w-12 rounded-2xl bg-primary/20 rotate-12"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
