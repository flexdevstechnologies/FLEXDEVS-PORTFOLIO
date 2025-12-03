// src/components/Footer.jsx
export default function Footer() {
  // Smooth scroll with offset so the sticky navbar doesn't cover headings
  const scrollToWithOffset = (id, offset = 80) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Helper to attach to <a> clicks
  const handleFooterClick = (e, id) => {
    e.preventDefault();
    scrollToWithOffset(id);
  };

  return (
    <footer className="footer">
      <p>
        <strong>Flexdevs Technologies</strong> — Creating seamless web experiences with
        React & modern UI engineering.
      </p>
      <p>📧 flexdevstechnologies@gmail.com | 📞 +91-9842370274 , 9344697820</p>
      <p>© {new Date().getFullYear()} Flexdevs Technologies. All rights reserved.</p>

      {/* Footer nav (same look, but scrolls instead of routing) */}
      <p>
        <a href="#about" onClick={(e) => handleFooterClick(e, "about")}>About</a> |{" "}
        <a href="#services" onClick={(e) => handleFooterClick(e, "services")}>Services</a> |{" "}
        <a href="#portfolio" onClick={(e) => handleFooterClick(e, "portfolio")}>Portfolio</a> |{" "}
        <a href="#contact" onClick={(e) => handleFooterClick(e, "contact")}>Contact</a>
      </p>
    </footer>
  );
}
