import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header" role="banner" aria-label="Main Navigation">
      <div className="navbar-container">

        {/* LEFT: Logo */}
        <div className="nav-left">
          <a href="#home" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="FlexDevs Logo" className="logo-img" />
            <span className="logo-text">FLEXDEVS TECHNOLOGIES</span>
          </a>
        </div>

        {/* CENTER: nav links (centered on desktop) */}
        <div className="nav-center">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="primary-navigation">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: CTA + hamburger */}
        <div className="nav-right">
          <button
            className="nav-cta"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            aria-label="Work with us"
          >
            Work with us
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
