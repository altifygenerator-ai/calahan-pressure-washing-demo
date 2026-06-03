"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaImages,
  FaXmark,
} from "react-icons/fa6";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function WorkGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage =
    activeIndex !== null ? siteData.gallery[activeIndex] : null;

  function previousImage() {
    if (activeIndex === null) return;

    setActiveIndex((current) => {
      if (current === null) return 0;
      return current === 0 ? siteData.gallery.length - 1 : current - 1;
    });
  }

  function nextImage() {
    if (activeIndex === null) return;

    setActiveIndex((current) => {
      if (current === null) return 0;
      return current === siteData.gallery.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <section className="section gallery-section" id="work">
      <div className="container">
        <div className="gallery-heading-row">
          <SectionHeading
  eyebrow="Recent Work"
  title="Real exterior cleaning work from local properties."
  text="These photos give visitors a quick look at the type of residential exterior cleaning, siding, porch, deck, concrete, and property wash work Calahan Pressure Washing LLC handles."
/>

          <div className="gallery-badge">
            <FaImages />
            <span>Click any photo</span>
          </div>
        </div>

        <div className="gallery-grid">
          {siteData.gallery.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.035}>
              <button
                className="gallery-card lift-card"
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open gallery image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={560}
                />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button
            className="modal-close"
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
          >
            <FaXmark />
          </button>

          <button
            className="modal-arrow modal-arrow-left"
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>

          <div className="modal-image-wrap">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1200}
              height={900}
              priority
            />
          </div>

          <button
            className="modal-arrow modal-arrow-right"
            type="button"
            onClick={nextImage}
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>
        </div>
      ) : null}
    </section>
  );
}