"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Heart,
} from "lucide-react";
import {
  siteConfig,
  footerQuickLinks,
  footerCustomerCare,
} from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-dark text-white"
      aria-label="Site footer"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom section-padding !pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-accent text-lg text-white">
                H
              </span>
              <span className="font-heading text-xl font-semibold">
                Heavenly Bites
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}. Crafting premium artisan baked goods with
              love, elegance, and the finest ingredients.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
              Customer Care
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerCustomerCare.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="text-xs text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-white/40">
            Made with <Heart className="h-3 w-3 fill-primary text-primary" aria-hidden="true" /> in Lahore
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
