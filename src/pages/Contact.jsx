import { useState } from "react";
import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies | Contact</title>
      </Helmet>

      {/* SUCCESS VIEW */}
      {submitted && (
        <section className="thanks-wrapper">
          <div className="thanks-panel">
            <div className="thanks-circle">✔</div>

            <h1 className="thanks-title">
              Thanks — <span>we received your message</span>
            </h1>

            <p className="thanks-text">
              Our team has your details and will contact you shortly. We usually
              reply within <strong>1–2 business days</strong>.  
              If it’s urgent, email us at{" "}
              <a href="mailto:flexdevstechnologies@gmail.com" className="thanks-link">
                flexdevstechnologies@gmail.com
              </a>.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="thanks-btn"
            >
              Return to site
            </button>
          </div>
        </section>
      )}

      {/* CONTACT SECTION (hidden when submitted) */}
      {!submitted && (
        <section className="section-wrapper">
          <div className="section-inner">
            <div className="contact-panel">
              <div className="contact-grid">

                {/* LEFT TEXT */}
                <div className="contact-left">
                  <h1 className="contact-hero">
                    Talk to an <span className="accent">FlexDevs</span> expert
                  </h1>

                  <p className="contact-lead">
                    We're here to help. Reach out to us or email{" "}
                    <a href="mailto:flexdevstechnologies@gmail.com" className="contact-link">
                      flexdevstechnologies@gmail.com
                    </a>.
                  </p>

                  <ul className="contact-points">
                    <li><strong>Estimate:</strong> Reply within 1–2 business days.</li>
                    <li><strong>Scope:</strong> UI/UX, React apps, websites, MVPs.</li>
                  </ul>
                </div>

                {/* FORM */}
                <div className="contact-right">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="access_key"
                      value="61da6a0b-51b9-40c6-8fe7-43808a9002c7"
                    />

                    <div className="input-row">
                      <label>
                        Name <span className="req">*</span>
                        <input type="text" name="name" placeholder="Sanjay" required />
                      </label>

                      <label>
                        Email <span className="req">*</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="sample@example.com"
                          required
                        />
                      </label>
                    </div>

                    <label>
                      Phone (Optional)
                      <input type="tel" name="phone" placeholder="+91 9842370274" />
                    </label>

                    <label>
                      Message
                      <textarea
                        name="message"
                        rows="6"
                        placeholder="Tell us about your project..."
                      />
                    </label>

                    <button type="submit" className="send-btn">
                      Send
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
