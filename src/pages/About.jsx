import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Flexdevs Technologies</title>
      </Helmet>

      <section className="section-wrapper">
        <div className="section-inner">
          <h1 className="section-title">Who We Are</h1>
          <p className="section-subtitle">
            A passionate team dedicated to building high-quality, user-focused digital experiences.
          </p>

          <div className="atlas-grid">
            <div className="atlas-card">
              <div className="atlas-icon">🌍</div>
              <h3>Our Vision</h3>
              <p>
                To help every business — big or small — grow with modern and meaningful digital presence.
              </p>
            </div>

            <div className="atlas-card">
              <div className="atlas-icon">💡</div>
              <h3>Our Approach</h3>
              <p>
                We combine creativity, strategy, and engineering excellence to deliver the best results.
              </p>
            </div>

            <div className="atlas-card">
              <div className="atlas-icon">🤝</div>
              <h3>Our Clients</h3>
              <p>
                We work with startups, professionals, and brands that value innovation and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
