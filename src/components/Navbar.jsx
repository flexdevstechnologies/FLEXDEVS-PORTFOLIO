import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  // ===== Scroll shrink effect for floating navbar =====
  useEffect(() => {
    const nav = document.querySelector(".floating-navbar");
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="navbar-header floating-navbar"
      role="banner"
      aria-label="Main Navigation"
    >
      <div className="navbar-container">
        
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="FlexDevs Technologies Logo" className="logo-img" />
          <span className="logo-text">Flexdevs Technologies</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="desktop-nav">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["Home", "Services", "Portfolio", "About", "Contact"].map((page) => (
              <li key={page}>
                <a
                  href={`#${page.toLowerCase()}`}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav-cta"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Work with us
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
