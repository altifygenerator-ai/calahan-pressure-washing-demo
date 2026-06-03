import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Exterior cleaning for the surfaces people notice first."
          text="Calahan Pressure Washing LLC handles pressure washing and soft washing for homes, concrete, decks, fences, driveways, and commercial properties around Bloomington."
        />

        <div className="services-grid">
          {siteData.services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.06}>
              <article className="service-card lift-card">
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={720}
                    height={520}
                  />
                </div>

                <div className="service-content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <a href="#contact" className="text-link">
                    Get an estimate <FaArrowRight />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}