import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => handleClick(e, "#hero")}
        >
<span className="navbar__logo-accent">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="4" fill="#12121a"/>
              <text x="16" y="22" text-anchor="middle" font-family="'Times New Roman', Georgia, serif" font-size="18" font-weight="700" fill="#d4a853">ND</text>
            </svg>
          </span>
          <span className="navbar__logo-text">Nisala Dineth</span>
        </a>

        <ul className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${mobileOpen ? "navbar__toggle--active" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
