"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useScrollAnimation } from "@/lib/utils";

export default function BestSellers() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="menu"
      className="section-padding bg-white/50"
      aria-labelledby="bestsellers-heading"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block font-accent text-3xl text-primary">
            Our Favorites
          </span>
          <h2
            id="bestsellers-heading"
            className="font-heading text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
          >
            Best Sellers
          </h2>
          <p className="mt-4 text-gray">
            Discover our most loved creations — each one a masterpiece of flavor
            and artistry.
          </p>
        </motion.div>

        <div
          id="gift-baskets"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
