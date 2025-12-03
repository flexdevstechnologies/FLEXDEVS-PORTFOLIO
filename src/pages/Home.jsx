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
      <section className="hero atlas-hero" id="home" aria-labelledby="home-heading">
        <div className="hero-inner atlas-hero-inner">
          
          {/* LEFT: copy */}
          <div className="hero-copy">
            <span className="hero-badge atlas-hero-badge">⚡ Leading UI/UX Experts</span>

            <h1 id="home-heading" className="hero-title atlas-hero-title">
              Stunning <span className="accent-gradient">Web Interfaces</span> to elevate your brand
            </h1>

            <p className="hero-subtitle atlas-hero-sub">
              We craft fast, modern, and responsive frontends that convert visitors
              into customers—tailored for startups and growing businesses.
            </p>

            <div className="hero-buttons atlas-hero-buttons">
              <button
                className="hero-btn primary atlas-hero-cta"
                onClick={() => scrollToWithOffset("contact")}
                aria-label="Get a free consultation"
              >
                Get a Free Consultation 🚀
              </button>

              <button
                className="hero-btn secondary atlas-hero-secondary"
                onClick={() => scrollToWithOffset("portfolio")}
                aria-label="View Our Work"
              >
                View Our Work →
              </button>
            </div>
          </div>

          {/* RIGHT: visual */}
          <div className="hero-visual atlas-hero-visual" aria-hidden>
            <div className="cube atlas-cube">
              <div className="sphere atlas-sphere"></div>
              <div className="ring atlas-ring ring1"></div>
              <div className="ring atlas-ring ring2"></div>
              <div className="ring atlas-ring ring3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
