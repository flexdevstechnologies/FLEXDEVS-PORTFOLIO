import "../styles/globals.css";

export default function Home() {
  // Smooth scroll that compensates for sticky navbar height
  const scrollToWithOffset = (id, offset = 96) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">⚡ Leading UI/UX Experts</span>

            <h1 className="hero-title">
              Stunning <span>Web Interfaces</span> to elevate your brand
            </h1>

            <p className="hero-subtitle">
              We craft fast, modern, and responsive frontends that convert visitors
              into customers—tailored for startups and growing businesses.
            </p>

            <div className="hero-buttons">
              <button
                className="hero-btn primary"
                onClick={() => scrollToWithOffset("contact")}
              >
                Get a Free Consultation 🚀
              </button>

              <button
                className="hero-btn secondary"
                onClick={() => scrollToWithOffset("portfolio")}
              >
                View Our Work →
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual" aria-hidden>
            <div className="cube">
              <div className="sphere"></div>
              <div className="ring ring1"></div>
              <div className="ring ring2"></div>
              <div className="ring ring3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
