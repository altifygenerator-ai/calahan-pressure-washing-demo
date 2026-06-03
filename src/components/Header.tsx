import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { siteData } from "@/data/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <div className="brand-logo">
            <Image
              src="/images/logo.png"
              alt="Calahan Pressure Washing LLC logo"
              width={76}
              height={76}
              priority
            />
          </div>

          <div>
            <span>{siteData.name}</span>
            <small>{siteData.tagline}</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {siteData.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-call" href={`tel:${siteData.contact.phone}`}>
          <FaPhone />
          {siteData.contact.phoneDisplay}
        </a>
      </div>
    </header>
  );
}