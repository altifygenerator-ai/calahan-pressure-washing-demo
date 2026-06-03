import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            {siteData.name}
          </Link>
          <p>{siteData.tagline}</p>
        </div>

        <div className="footer-links">
          {siteData.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <a href={`tel:${siteData.contact.phone}`}>
            {siteData.contact.phoneDisplay}
          </a>
          <a href={`mailto:${siteData.contact.email}`}>
            {siteData.contact.email}
          </a>
          <span>{siteData.contact.location}</span>
        </div>
      </div>
    </footer>
  );
}