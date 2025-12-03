import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Flexdevs Technologies</title>
      </Helmet>

      <section className="section-wrapper">
        <div className="section-inner">
          <h1 className="section-title">Let’s Work Together</h1>
          <p className="section-subtitle">
            Have an idea or project in mind? Let’s bring it to life with modern UI engineering.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form hover-animate"
            style={{ margin: "0 auto", marginTop: "35px", maxWidth: "600px" }}
          >
            <input type="hidden" name="access_key" value="61da6a0b-51b9-40c6-8fe7-43808a9002c7" />

            <label>Full Name</label>
            <input type="text" name="name" required placeholder="Your Name" />

            <label>Email</label>
            <input type="email" name="email" required placeholder="you@business.com" />

            <label>Mobile Number</label>
            <input type="tel" name="phone" required placeholder="+91 98765 43210" />

            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Tell us about your project..."></textarea>

            <button type="submit" className="hero-btn primary" style={{ marginTop: "10px" }}>
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
