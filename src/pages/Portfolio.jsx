import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  const projects = [
    {
      icon: "🚀",
      name: "TastyBuddy",
      desc: "A digital platform empowering cloud kitchens with visibility and smoother order flow."
    },
    {
      icon: "📱",
      name: "Every Rupee",
      desc: "A micro-loan platform designed for college students to access small funds easily."
    },
    {
      icon: "📊",
      name: "FlexDash",
      desc: "An advanced analytics dashboard helping businesses manage operations efficiently."
    },

    /* ===== NEW PROJECTS YOU REQUESTED ===== */

    {
      icon: "💼",
      name: "Jobify",
      desc: "A smart job-search platform connecting talent with opportunities through personalized recommendations and real-time openings."
    },
    {
      icon: "💰",
      name: "ExpenseTracker",
      desc: "A simple, intuitive web app to record, categorize, and analyze daily expenses for better financial control."
    },
    {
      icon: "🏥",
      name: "MediQuery",
      desc: "A secure hospital database query system enabling fast retrieval of patient records, medical history, and administrative data."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio — Flexdevs Technologies</title>
      </Helmet>

      <section className="section-wrapper">
        <div className="section-inner">
          <h1 className="section-title">Our Work</h1>
          <p className="section-subtitle">
            A showcase of digital products built with precision, creativity, and performance in mind.
          </p>

          <div className="atlas-grid">
            {projects.map((p, i) => (
              <div key={i} className="atlas-card">
                <div className="atlas-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
