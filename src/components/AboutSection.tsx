import Image from "next/image";
import { FaLocationDot, FaShieldHalved, FaWater } from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <FadeIn className="about-image-card lift-card">
          <Image
            src="/images/about-work.jpg"
            alt="Calahan Pressure Washing LLC exterior cleaning work"
            width={900}
            height={720}
          />
          <div className="about-image-label">
            <strong>Calahan Pressure Washing LLC</strong>
            <span>Pressure and Soft Washing</span>
          </div>
        </FadeIn>

        <FadeIn className="about-copy" delay={0.1}>
          <SectionHeading
            eyebrow="About"
            title="A cleaner, sharper look for homes and properties."
            text="Calahan Pressure Washing LLC is a Bloomington area exterior cleaning service focused on pressure washing, soft washing, and property cleaning work. The goal is simple: make the outside of the property look better and make it easy for people to get an estimate."
          />

          <div className="about-points">
            <div className="about-point">
              <FaWater />
              <div>
                <h3>Pressure and soft washing</h3>
                <p>
                  Cleaning options for siding, concrete, decks, fences, porches,
                  and other exterior surfaces.
                </p>
              </div>
            </div>

            <div className="about-point">
              <FaShieldHalved />
              <div>
                <h3>Residential and commercial</h3>
                <p>
                  Exterior cleaning for homeowners and commercial property
                  owners who want the property to look cared for.
                </p>
              </div>
            </div>

            <div className="about-point">
              <FaLocationDot />
              <div>
                <h3>{siteData.contact.location}</h3>
                <p>
                  Local service with phone, email, and message options for fast
                  estimate requests.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}