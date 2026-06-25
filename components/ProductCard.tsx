"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/types";
import { getWhatsAppUrl } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const whatsappMessage = `Hi! I'd like to order: ${product.name} (Rs. ${product.price.toLocaleString()})`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-heading text-xl font-semibold text-dark">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-heading text-2xl font-semibold text-primary">
            Rs. {product.price.toLocaleString()}
          </p>

          <motion.a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-soft transition-shadow hover:shadow-glow"
            aria-label={`Add ${product.name} to order`}
          >
            <Plus className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
