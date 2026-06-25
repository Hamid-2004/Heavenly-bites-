import type { Feature, Product, AboutFeature } from "@/types";

export const features: Feature[] = [
  {
    id: "freshly-baked",
    icon: "Croissant",
    title: "Freshly Baked",
    description:
      "Every creation is baked fresh daily using premium ingredients for that perfect melt-in-your-mouth experience.",
  },
  {
    id: "custom-orders",
    icon: "Palette",
    title: "Custom Orders",
    description:
      "From dream wedding cakes to personalized treats — we bring your sweetest visions to life with artistry.",
  },
  {
    id: "fast-delivery",
    icon: "Truck",
    title: "Fast Delivery",
    description:
      "Same-day delivery across Lahore with careful packaging to ensure your treats arrive in perfect condition.",
  },
  {
    id: "made-with-love",
    icon: "Heart",
    title: "Made with Love",
    description:
      "Each recipe is crafted with passion and care, turning simple ingredients into extraordinary moments.",
  },
];

export const products: Product[] = [
  {
    id: "rose-velvet",
    name: "Rose Velvet Dream",
    description: "Layers of velvety sponge with rose-infused buttercream and edible petals.",
    price: 4500,
    category: "Cakes",
    image: "/images/cake-1.jpg",
  },
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss Tart",
    description: "Buttery crust filled with vanilla custard and fresh seasonal strawberries.",
    price: 2800,
    category: "Tarts",
    image: "/images/cake-2.jpg",
  },
  {
    id: "lavender-macarons",
    name: "Lavender Macaron Box",
    description: "A dozen delicate French macarons in lavender, rose, and vanilla flavors.",
    price: 3200,
    category: "Pastries",
    image: "/images/cake-3.jpg",
  },
  {
    id: "chocolate-ganache",
    name: "Dark Chocolate Ganache",
    description: "Rich Belgian chocolate cake with silky ganache and gold leaf accents.",
    price: 5200,
    category: "Cakes",
    image: "/images/cake-4.jpg",
  },
  {
    id: "berry-parfait",
    name: "Berry Parfait Cup",
    description: "Layers of mascarpone cream, berry compote, and crushed almond crumble.",
    price: 1800,
    category: "Desserts",
    image: "/images/cake-5.jpg",
  },
  {
    id: "gift-basket",
    name: "Luxury Gift Basket",
    description: "Curated selection of our finest pastries, cookies, and artisan chocolates.",
    price: 7500,
    category: "Gift Baskets",
    image: "/images/cake-6.jpg",
  },
];

export const aboutFeatures: AboutFeature[] = [
  {
    id: "artisan",
    icon: "Award",
    title: "Artisan Crafted",
    description: "Handmade with traditional techniques and modern elegance.",
  },
  {
    id: "organic",
    icon: "Leaf",
    title: "Premium Ingredients",
    description: "Only the finest organic and locally sourced ingredients.",
  },
  {
    id: "experience",
    icon: "Sparkles",
    title: "10+ Years Experience",
    description: "A decade of creating unforgettable sweet memories.",
  },
];

export const customerAvatars = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
];
