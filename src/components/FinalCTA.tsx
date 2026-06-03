import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <FadeIn className="final-cta-card">
          <p className="eyebrow">Free Estimates Available</p>
          <h2>Ready to get the outside of the property cleaned up?</h2>
         <p>
  Call, email, or send the quote form details for residential and
  commercial pressure washing, soft washing, concrete, decks, fences,
  siding, and exterior cleaning around Bicknell, Bloomington, Vincennes,
  and nearby surrounding areas.
</p>

          <div className="final-actions">
            <a className="btn btn-primary" href={`tel:${siteData.contact.phone}`}>
              <FaPhone />
              {siteData.contact.phoneDisplay}
            </a>

            <a
              className="btn btn-secondary"
              href={`mailto:${siteData.contact.email}`}
            >
              <FaEnvelope />
              Email for Estimate
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}