export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}
