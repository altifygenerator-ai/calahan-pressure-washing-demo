import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {siteData.trust.map((item, index) => (
          <FadeIn className="trust-card" delay={index * 0.06} key={item.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}