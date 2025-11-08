import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Flexdevs Technologies Logo"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
          <span
            style={{
              color: "#1e3a8a",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Flexdevs Technologies
          </span>
        </Link>

        {/* Hamburger Icon (Visible only on Mobile) */}
        <button
          onClick={toggleMenu}
          className="menu-toggle"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1e3a8a",
          }}
        >
          <span style={{ fontSize: "26px" }}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          style={{
            listStyle: "none",
            display: "flex",
            gap: "28px",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {["Home", "Services", "Portfolio", "About", "Contact"].map(
            (page) => (
              <li key={page}>
                <NavLink
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  onClick={closeMenu}
                  style={({ isActive }) => ({
                    color: isActive ? "#2563eb" : "#334155",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1rem",
                    transition: "color 0.2s ease",
                  })}
                >
                  {page}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile Menu Styles */}
      <style>{`
        @media (max-width: 768px) {
          .menu-toggle {
            display: block !important;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: #ffffff;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
            display: none;
          }

          .nav-links.open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
