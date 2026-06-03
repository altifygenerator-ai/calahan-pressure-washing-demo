import {
  FaEnvelope,
  FaFacebookMessenger,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Call, email, or send the quote details."
            text="Share the property type, service needed, and a few details about the job. Calahan Pressure Washing LLC can follow up with next steps for a free estimate."
          />

          <div className="contact-list">
            <a href={`tel:${siteData.contact.phone}`} className="contact-row lift-card">
              <FaPhone />
              <div>
                <span>Call</span>
                <strong>{siteData.contact.phoneDisplay}</strong>
              </div>
            </a>

            <a
              href={`mailto:${siteData.contact.email}`}
              className="contact-row lift-card"
            >
              <FaEnvelope />
              <div>
                <span>Email</span>
                <strong>{siteData.contact.email}</strong>
              </div>
            </a>

            <div className="contact-row lift-card">
              <FaLocationDot />
              <div>
                <span>Location</span>
                <strong>{siteData.contact.location}</strong>
              </div>
            </div>

            <div className="contact-row lift-card">
              <FaFacebookMessenger />
              <div>
                <span>Facebook</span>
                <strong>{siteData.contact.facebookLabel}</strong>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="quote-form-card" delay={0.1}>
          <h3>Request a Free Estimate</h3>
          <p>
            This form is ready to connect to a Resend email route when the site
            goes live.
          </p>

          <form className="quote-form">
            <div className="form-grid">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>

              <label>
                Phone
                <input type="tel" name="phone" placeholder="Phone number" />
              </label>
            </div>

            <label>
              Email
              <input type="email" name="email" placeholder="Email address" />
            </label>

            <label>
              Service Needed
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>House washing</option>
                <option>Driveway or concrete cleaning</option>
                <option>Deck or fence cleaning</option>
                <option>Commercial property cleaning</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label>
              Job Details
              <textarea
                name="message"
                placeholder="Tell us what needs cleaned, the property type, and any helpful details."
                rows={5}
              />
            </label>

            <button className="btn btn-primary form-submit" type="submit">
              Send Estimate Request
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}