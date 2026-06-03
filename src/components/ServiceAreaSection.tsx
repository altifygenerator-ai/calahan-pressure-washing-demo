import {
  FaCircleCheck,
  FaLocationDot,
  FaMapLocationDot,
  FaPhone,
  FaRoute,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const areaCards = [
  {
    icon: FaLocationDot,
    label: "Based In",
    title: "Bicknell, Indiana",
    text: "Calahan Pressure Washing LLC is based out of Bicknell and serves nearby areas.",
  },
  {
    icon: FaMapLocationDot,
    label: "Serving",
    title: "Bloomington & Vincennes",
    text: "Residential and commercial pressure washing available toward Bloomington and Vincennes.",
  },
  {
    icon: FaRoute,
    label: "Nearby Areas",
    title: "About an Hour Radius",
    text: "Keeping the service area focused helps jobs stay realistic, reliable, and easy to schedule.",
  },
];

export default function ServiceAreaSection() {
  return (
    <section className="section service-area-section" id="service-area">
      <div className="container service-area-grid">
        <FadeIn className="service-area-copy">
          <SectionHeading
            eyebrow="Service Area"
            title="Based in Bicknell, serving nearby homes and businesses."
            text="Calahan Pressure Washing LLC serves residential and commercial properties around Bicknell, Bloomington, Vincennes, and nearby surrounding areas within about an hour."
          />

          <div className="service-area-note">
            <FaCircleCheck />
            <p>
              Not sure if your property is in range? Call or send the quote form
              with your location and service needed.
            </p>
          </div>

          <div className="service-area-actions">
            <a className="btn btn-primary" href={`tel:${siteData.contact.phone}`}>
              <FaPhone />
              Call {siteData.contact.phoneDisplay}
            </a>

            <a className="btn btn-secondary" href="#contact">
              Send Quote Details
            </a>
          </div>
        </FadeIn>

        <div className="service-area-cards">
          {areaCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <article className="service-area-card lift-card">
                  <div className="service-area-icon">
                    <Icon />
                  </div>

                  <div>
                    <span>{card.label}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}