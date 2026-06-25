"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, getWhatsAppUrl } from "@/lib/constants";
import { useScrollPosition, cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav
          className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="group flex items-center gap-2"
            aria-label="Heavenly Bites - Home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-accent text-white shadow-soft">
              H
            </span>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-semibold leading-tight text-dark md:text-2xl">
                Heavenly Bites
              </span>
              <span className="hidden text-[10px] tracking-widest text-gray uppercase sm:block">
                Artisan Bakery
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-dark/80 transition-colors hover:bg-secondary/60 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-shadow hover:shadow-glow sm:flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Order on WhatsApp
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-dark shadow-sm backdrop-blur-sm transition-colors hover:bg-secondary xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-dark/20 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(320px,85vw)] flex-col bg-white shadow-2xl xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-secondary/50 p-6">
                <span className="font-heading text-xl font-semibold text-dark">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/50 text-dark"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 p-6" role="list">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-dark transition-colors hover:bg-secondary/50 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-secondary/50 p-6">
                <motion.a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-white shadow-soft"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Order on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
