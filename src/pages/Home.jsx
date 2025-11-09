import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies — Modern Frontend Solutions</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">⚡ Leading UI/UX Experts</span>
            <h1 className="hero-title">
              Stunning <span>Web Interfaces</span> <br /> to elevate your brand.
            </h1>
            <p className="hero-subtitle">
              We design and develop responsive, modern, and user-focused web
              experiences — crafted for startups, SMBs, and enterprises alike.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-btn primary">
                Get a Free Consultation
              </Link>
              <Link to="/portfolio" className="hero-btn secondary">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="cube">
              <div className="sphere"></div>
              <div className="ring ring1"></div>
              <div className="ring ring2"></div>
              <div className="ring ring3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="info">
        <div className="info-grid">
          <div className="info-card">
            <h3>💡 UI/UX Design</h3>
            <p>
              Creating seamless and visually engaging user interfaces tailored
              to your brand identity.
            </p>
          </div>

          <div className="info-card">
            <h3>⚙️ Frontend Development</h3>
            <p>
              We build fast, scalable, and modern frontend applications with
              React and the latest web technologies.
            </p>
          </div>

          <div className="info-card">
            <h3>🚀 Product Launch Support</h3>
            <p>
              From concept to deployment — we help launch your digital presence
              effectively across all devices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
 