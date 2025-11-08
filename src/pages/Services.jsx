import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          Fueling <span>Digital Growth</span> Through Modern Frontend Solutions
        </h1>
        <p>
          We empower startups and small businesses to build strong online
          identities with modern, scalable, and visually engaging web platforms.
        </p>
      </section>

      <section className="cards-grid">
        {[
          {
            title: "Business Portfolio Websites",
            desc: "Showcase your brand with fast, elegant, and responsive portfolio websites designed to convert visitors into customers.",
            icon: "💼",
          },
          {
            title: "Web Interface Design",
            desc: "We craft user interfaces that blend usability and aesthetics — ensuring your digital presence feels premium and effortless.",
            icon: "🎨",
          },
          {
            title: "Modern UI Development",
            desc: "Our team delivers blazing-fast, pixel-perfect frontends using React, ensuring your users love every click.",
            icon: "⚡",
          },
          {
            title: "UI/UX Portfolio Development",
            desc: "We build portfolios that demonstrate design excellence and user understanding — perfect for creative professionals.",
            icon: "🧠",
          },
          {
            title: "Frontend Engineering",
            desc: "Robust, modular, and scalable frontend codebases engineered for long-term business growth.",
            icon: "🔧",
          },
        ].map((service, index) => (
          <div key={index} className="info-card hover-animate">
            <h3>
              {service.icon} {service.title}
            </h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
