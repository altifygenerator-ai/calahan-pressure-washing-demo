import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Calahan Pressure Washing LLC",
  shortName: "Calahan",
  tagline: "Residential & Commercial Pressure Washing • Free Estimates",

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    phone: "18124449045",
    phoneDisplay: "(812) 444-9045",
    email: "herbiecalahan92@gmail.com",
    location: "Based in Bicknell, IN",
    facebookLabel: "Calahan pressure washing LLC",
  },

  hero: {
    eyebrow: "Residential & Commercial Pressure Washing",
    title: "Pressure Washing & Soft Washing for Homes and Businesses",
    text:
      "Based out of Bicknell and serving surrounding areas including Bloomington and Vincennes. Calahan Pressure Washing LLC handles homes, driveways, concrete, decks, fences, and commercial properties with free estimates available.",
    primaryCta: "Call for a Free Estimate",
    secondaryCta: "View Services",
    backgroundImage: "/images/hero.jpg",
  },

  trust: [
    {
      label: "Free Estimates",
      text: "Call, email, or send the quote form details to get started.",
    },
    {
      label: "Starting at $200",
      text: "House cleaning starting price shown by the business.",
    },
    {
      label: "Residential & Commercial",
      text: "Exterior cleaning for homes, businesses, and local properties.",
    },
    {
      label: "Bicknell Based",
      text: "Serving surrounding areas including Bloomington and Vincennes.",
    },
  ],

  services: [
    {
      title: "Residential Pressure Washing",
      text:
        "Exterior cleaning for homes, siding, porches, patios, walkways, and outdoor surfaces that need a cleaner look.",
      image: "/images/service-house.jpg",
    },
    {
      title: "Commercial Pressure Washing",
      text:
        "Pressure washing and exterior cleaning for commercial properties that need a cleaner, sharper first impression.",
      image: "/images/service-commercial.jpg",
    },
    {
      title: "Driveways & Concrete",
      text:
        "Pressure washing for driveways, concrete, sidewalks, patios, and other hard surfaces around the property.",
      image: "/images/service-concrete.jpg",
    },
    {
      title: "Decks & Fences",
      text:
        "Cleaning for decks, fences, and outdoor areas where buildup can make a property look older than it is.",
      image: "/images/service-deck.jpg",
    },
  ],

  gallery: [
    {
      src: "/images/work-1.jpg",
      alt: "House exterior pressure washing work by Calahan Pressure Washing LLC",
    },
    {
      src: "/images/work-2.jpg",
      alt: "Clean siding after pressure washing service",
    },
    {
      src: "/images/work-3.jpg",
      alt: "Residential exterior cleaning work",
    },
    {
      src: "/images/work-4.jpg",
      alt: "Concrete and exterior surface cleaning",
    },
    {
      src: "/images/work-5.jpg",
      alt: "Deck and porch cleaning work",
    },
    {
      src: "/images/work-6.jpg",
      alt: "Siding and house wash service photo",
    },
    {
      src: "/images/work-7.jpg",
      alt: "Pressure washing work in southern Indiana",
    },
    {
      src: "/images/work-8.jpg",
      alt: "Exterior home cleaning project",
    },
  ],

  pricing: [
    {
      label: "House Cleaning",
      value: "Starting at $200",
      text:
        "Pricing shown by the business for house cleaning. Final pricing depends on the property, surface type, and job details.",
    },
    {
      label: "Estimates",
      value: "Free",
      text:
        "Call, email, or send the quote form details to get started with a free estimate.",
    },
  ],
};