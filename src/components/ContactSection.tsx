"use client";

import { FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      location: String(formData.get("location") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      setStatusMessage("Your estimate request was sent. Calahan Pressure Washing LLC will follow up soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or email instead."
      );
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Request a residential or commercial pressure washing estimate."
            text="Share the property type, service needed, location, and a few details about the job. Calahan Pressure Washing LLC can follow up with next steps for a free estimate."
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
                <span>Service Area</span>
                <strong>Bicknell, Bloomington, Vincennes & nearby areas</strong>
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
            Send the property location, service needed, and a few job details.
            Calahan Pressure Washing LLC can follow up with next steps.
          </p>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </label>
            </div>

            <label>
              Email
              <input type="email" name="email" placeholder="Email address" />
            </label>

            <label>
              Property Location
              <input
                type="text"
                name="location"
                placeholder="City or property area"
              />
            </label>

            <label>
              Service Needed
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Residential pressure washing</option>
                <option>Commercial pressure washing</option>
                <option>House washing</option>
                <option>Driveway or concrete cleaning</option>
                <option>Deck or fence cleaning</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label>
              Job Details
              <textarea
                name="message"
                placeholder="Tell us what needs cleaned, the property type, and any helpful details."
                rows={5}
                required
              />
            </label>

            <button
              className="btn btn-primary form-submit"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Estimate Request"}
            </button>

            {statusMessage ? (
              <p className={`form-status ${status}`}>
                {statusMessage}
              </p>
            ) : null}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}