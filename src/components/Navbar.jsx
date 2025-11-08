import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

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
        <div
          onClick={() => handleScroll("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
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
        </div>

        {/* Hamburger Menu Icon (for Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-toggle"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1e3a8a",
          }}
        >
          <span style={{ fontSize: "26px" }}>{menuOpen ? "✕" : "☰"}</span>
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
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleScroll(id)}
                className="nav-btn"
                style={{
                  background: "none",
                  border: "none",
                  color: "#334155",
                  fontWeight: "500",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#2563eb")}
                onMouseLeave={(e) => (e.target.style.color = "#334155")}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block !important;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            right: 10px;
            background-color: #ffffff;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            width: 180px;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            display: none;
            animation: fadeIn 0.3s ease forwards;
          }

          .nav-links.open {
            display: flex;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </header>
  );
}
