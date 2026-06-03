import Link from "next/link";
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8, 12, 17, 0.92), rgba(8, 12, 17, 0.76), rgba(8, 12, 17, 0.42)), url(${siteData.hero.backgroundImage})`,
      }}
    >
      <div className="hero-overlay" />

      <div className="container hero-content">
        <FadeIn className="hero-copy">
          <p className="eyebrow">{siteData.hero.eyebrow}</p>

          <h1>{siteData.hero.title}</h1>

          <p className="hero-text">{siteData.hero.text}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${siteData.contact.phone}`}>
              <FaPhone />
              {siteData.hero.primaryCta}
            </a>

            <Link className="btn btn-secondary" href="#services">
              {siteData.hero.secondaryCta}
              <FaArrowRight />
            </Link>
          </div>

          <div className="hero-proof">
            <span>House cleaning starting at $200</span>
            <span>Free Estimates</span>
            <span>{siteData.contact.location}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}