import { FaCircleCheck } from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container pricing-grid">
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing"
            title="Straightforward starting point, with free estimates."
            text="Every property is a little different, so the best next step is to call, message, or send the quote form details. The business has posted house cleaning starting at $200."
          />
        </FadeIn>

        <div className="pricing-cards">
          {siteData.pricing.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <article className="pricing-card lift-card">
                <div>
                  <span>{item.label}</span>
                  <h3>{item.value}</h3>
                  <p>{item.text}</p>
                </div>

                <FaCircleCheck />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}