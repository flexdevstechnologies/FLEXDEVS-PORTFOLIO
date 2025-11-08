import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          We <span>Build Experiences</span>, Not Just Websites
        </h1>
        <p>
          Flexdevs Technologies is a modern web solutions studio helping small
          and medium businesses create high-impact online presences through
          elegant, fast, and user-focused design.
        </p>
      </section>

      <section className="cards-grid">
        <div className="info-card hover-animate">
          <h3>🌍 Our Vision</h3>
          <p>
            Empower every growing business with stunning digital experiences
            that drive visibility, trust, and revenue.
          </p>
        </div>

        <div className="info-card hover-animate">
          <h3>💪 Our Strength</h3>
          <p>
            We merge creative design and technical precision to produce digital
            experiences that make brands unforgettable.
          </p>
        </div>

        <div className="info-card hover-animate">
          <h3>🤝 Our Clients</h3>
          <p>
            We work with passionate founders, startups, and small enterprises —
            people who believe in building a strong digital foundation.
          </p>
        </div>
      </section>
    </>
  );
}
