import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="FlexDevs Technologies Logo" className="logo-img" />
          <span className="logo-text">FLEXDEVS TECHNOLOGIES </span>
        </a>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navbar Links */}
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
      </nav>

      {/* Inline Styles */}
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          z-index: 1000;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-img {
          width: 45px;
          height: 45px;
          object-fit: contain;
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e3a8a;
        }

        /* Desktop Navigation */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 28px;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: #334155;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #2563eb;
        }

        /* Hamburger hidden on desktop */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #1e3a8a;
        }

        /* ====== MOBILE STYLING ====== */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #ffffff;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            display: none;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: all 0.3s ease-in-out;
          }

          /* Visible only when active */
          .nav-links.active {
            display: flex;
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .nav-link {
            font-size: 1.1rem;
            padding: 10px 0;
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}
