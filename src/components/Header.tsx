"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaPhone, FaXmark } from "react-icons/fa6";
import { siteData } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo">
            <Image
              src="/images/logo.png"
              alt="Calahan Pressure Washing LLC logo"
              width={90}
              height={90}
              priority
            />
          </div>

          <div className="brand-text">
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

        <a className="header-call desktop-call" href={`tel:${siteData.contact.phone}`}>
          <FaPhone />
          {siteData.contact.phoneDisplay}
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="container mobile-menu-inner">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {siteData.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="mobile-call"
            href={`tel:${siteData.contact.phone}`}
            onClick={closeMenu}
          >
            <FaPhone />
            Call {siteData.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}