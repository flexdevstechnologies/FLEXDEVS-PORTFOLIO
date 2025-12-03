import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="FlexDevs Logo" className="logo-img" />
          <span className="logo-text">FLEXDEVS TECHNOLOGIES</span>
        </a>

        {/* Hamburger (Mobile only) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </header>
  );
}
