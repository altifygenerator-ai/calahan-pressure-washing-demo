export type NavItem = {
  label: string;
  href: string;
};

export type ContactInfo = {
  phone: string;
  phoneDisplay: string;
  email: string;
  location: string;
  facebookLabel: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  text: string;
  primaryCta: string;
  secondaryCta: string;
  backgroundImage: string;
};

export type TrustItem = {
  label: string;
  text: string;
};

export type ServiceItem = {
  title: string;
  text: string;
  image: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type PricingItem = {
  label: string;
  value: string;
  text: string;
};

export type SiteData = {
  name: string;
  shortName: string;
  tagline: string;
  nav: NavItem[];
  contact: ContactInfo;
  hero: HeroContent;
  trust: TrustItem[];
  services: ServiceItem[];
  gallery: GalleryImage[];
  pricing: PricingItem[];
};