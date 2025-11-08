import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Our Portfolio — Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          Projects that <span>Power Businesses</span>
        </h1>
        <p>
          Each solution we deliver helps small businesses transform into
          powerful digital brands that scale with confidence.
        </p>
      </section>

      <section className="cards-grid">
        {[
          {
            name: "TastyBuddy",
            desc: "A digital companion for cloud kitchens — helping small food brands streamline operations and boost online visibility.",
          },
          {
            name: "Every Rupee",
            desc: "Peer-to-peer microloan platform built for college students — secure, simple, and community-driven.",
          },
          {
            name: "FlexDash",
            desc: "An interactive business analytics dashboard offering insights, clean UI, and scalability for startups.",
          },
        ].map((proj, i) => (
          <div key={i} className="info-card hover-animate">
            <h3>🚀 {proj.name}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
