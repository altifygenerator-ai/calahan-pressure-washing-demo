import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Calahan Pressure Washing LLC",
  shortName: "Calahan",
  tagline: "Pressure and Soft Washing • Free Estimates",

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
    location: "Bloomington, IN 47401",
    facebookLabel: "Calahan pressure washing LLC",
  },

  hero: {
    eyebrow: "Bloomington, Indiana Pressure Washing",
    title: "Pressure Washing & Soft Washing for Homes and Properties",
    text:
      "Driveways, concrete, decks, fences, siding, and commercial properties cleaned with a reliable local service. Free estimates available.",
    primaryCta: "Call for a Free Estimate",
    secondaryCta: "View Services",
    backgroundImage: "/images/hero.jpg",
  },

  trust: [
    {
      label: "Free Estimates",
      text: "Simple quotes for exterior cleaning jobs.",
    },
    {
      label: "Starting at $200",
      text: "House cleaning starting price shown by the business.",
    },
    {
      label: "Residential & Commercial",
      text: "Homes, concrete, decks, fences, and commercial properties.",
    },
    {
      label: "Bloomington Area",
      text: "Serving Bloomington, Indiana and nearby property owners.",
    },
  ],

  services: [
    {
      title: "House Washing",
      text:
        "Exterior house washing for siding, porches, trim, and outdoor surfaces that need a clean refresh.",
      image: "/images/service-house.jpg",
    },
    {
      title: "Driveways & Concrete",
      text:
        "Pressure washing for concrete, driveways, walkways, patios, and other hard surfaces around the property.",
      image: "/images/service-concrete.jpg",
    },
    {
      title: "Decks & Fences",
      text:
        "Cleaning for decks, fences, and outdoor areas where buildup can make a property look older than it is.",
      image: "/images/service-deck.jpg",
    },
    {
      title: "Commercial Properties",
      text:
        "Exterior cleaning for commercial properties that need a cleaner, sharper first impression.",
      image: "/images/service-commercial.jpg",
    },
  ],

  gallery: [
    {
      src: "/images/work-1.jpg",
      alt: "House exterior pressure washing work in Bloomington Indiana",
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
      alt: "Bloomington area pressure washing work",
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
        "Pricing shown by the business for house cleaning. Final pricing depends on the property and job details.",
    },
    {
      label: "Estimates",
      value: "Free",
      text:
        "Call, message, or send the quote form details to get started with a free estimate.",
    },
  ],
};