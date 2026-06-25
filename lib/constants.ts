export const siteConfig = {
  name: "Heavenly Bites",
  tagline: "Where Every Bite Feels Like Heaven",
  description:
    "Premium artisan bakery crafting exquisite cakes, pastries, and gift baskets with love. Freshly baked daily in Lahore.",
  url: "https://heavenlybites.com",
  whatsapp: "923001234567",
  whatsappMessage: "Hello! I'd like to place an order from Heavenly Bites.",
  email: "hello@heavenlybites.com",
  phone: "+92 300 1234567",
  address: "123 Rose Garden Lane, Gulberg III, Lahore, Pakistan",
  social: {
    instagram: "https://instagram.com/heavenlybites",
    facebook: "https://facebook.com/heavenlybites",
    pinterest: "https://pinterest.com/heavenlybites",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Pre Orders", href: "#pre-orders" },
  { label: "Gift Baskets", href: "#gift-baskets" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const footerQuickLinks = [
  { label: "Our Menu", href: "#menu" },
  { label: "Best Sellers", href: "#menu" },
  { label: "Pre Orders", href: "#pre-orders" },
  { label: "Gift Baskets", href: "#gift-baskets" },
  { label: "About Us", href: "#about" },
];

export const footerCustomerCare = [
  { label: "FAQs", href: "#contact" },
  { label: "Delivery Info", href: "#contact" },
  { label: "Return Policy", href: "#contact" },
  { label: "Privacy Policy", href: "#contact" },
  { label: "Terms of Service", href: "#contact" },
];

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
