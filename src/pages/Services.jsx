import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const services = [
    {
      icon: "💼",
      title: "Business Portfolio Websites",
      desc: "Conversion-ready business websites that highlight your brand and convert visitors into clients."
    },
    {
      icon: "🎨",
      title: "Web Interface Design",
      desc: "Beautiful, intuitive UI designs that deliver the best user experiences."
    },
    {
      icon: "⚡",
      title: "Modern UI Development",
      desc: "We build fast, scalable, mobile-first UIs using React and modern technologies."
    },
    {
      icon: "🧠",
      title: "UI/UX Portfolio Development",
      desc: "Showcase your skills, story, and achievements with premium portfolio websites."
    },
    {
      icon: "🔧",
      title: "Frontend Engineering",
      desc: "Clean, maintainable, and production-ready frontend systems built for long-term success."
    },

    /* ===== NEW SERVICES YOU REQUESTED ===== */

    {
      icon: "📱",
      title: "Custom Mobile Application Development",
      desc: "Build high-performance Android and iOS mobile apps tailored to your business needs with smooth UX, modern UI, and scalable architecture."
    },
    {
      icon: "🖥️",
      title: "Desktop Application Development",
      desc: "Robust desktop software engineered for reliability, security, and efficiency—perfect for enterprise tools, dashboards, and offline-first solutions."
    },
    {
      icon: "📢",
      title: "Digital Marketing for Websites",
      desc: "Boost your online presence with targeted digital marketing strategies that attract the right audience and elevate your brand visibility."
    },
    {
      icon: "🔍",
      title: "SEO & Content Marketing",
      desc: "Improve search rankings and drive organic traffic through optimized content, strategic keywords, and performance-focused SEO frameworks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services — Flexdevs Technologies</title>
      </Helmet>

      {/* Header Section */}
      <section className="section-wrapper">
        <div className="section-inner">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Discover how we can help your business thrive with modern, high-performance digital solutions.
          </p>

          <div className="atlas-grid">
            {services.map((s, i) => (
              <div key={i} className="atlas-card">
                <div className="atlas-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
