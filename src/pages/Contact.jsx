import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies | Contact</title>
      </Helmet>

      <section className="section-wrapper">
        <div className="section-inner">

          {/* Big rounded panel containing left copy + right form */}
          <div className="contact-panel">

            <div className="contact-grid">

              {/* LEFT: Big headline & intro */}
              <div className="contact-left">
                <h1 className="contact-hero">
                  Talk to an <span className="accent">FlexDevs</span> expert
                </h1>

                <p className="contact-lead">
                  We're here to help. Get in touch with our team and let us know how we
                  can assist you — or email us at{" "}
                  <a href="mailto:flexdevstechnologies@gmail.com" className="contact-link">
                    flexdevstechnologies@gmail.com
                  </a>.
                </p>

                <ul className="contact-points">
                  <li><strong>Estimate:</strong> We’ll review and reply within 1–2 business days.</li>
                  <li><strong>Scope:</strong> UI/UX, React apps, product MVPs, and website builds.</li>
                </ul>
              </div>

              {/* RIGHT: Form */}
              <div className="contact-right">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="contact-form"
                >
                  <input type="hidden" name="access_key" value="61da6a0b-51b9-40c6-8fe7-43808a9002c7" />

                  <div className="input-row">
                    <label>
                      Name <span className="req">*</span>
                      <input type="text" name="name" placeholder="Sanjay" required />
                    </label>

                    <label>
                      Email <span className="req">*</span>
                      <input type="email" name="email" placeholder="sample@example.com" required />
                    </label>
                  </div>

                  <label>
                    Phone (Optional)
                    <input type="tel" name="phone" placeholder="+91 9842370274" />
                  </label>

                  <label>
                    Message
                    <textarea name="message" rows="6" placeholder="Tell us about your project..." />
                  </label>

                  <div style={{ marginTop: 12 }}>
                    <button type="submit" className="send-btn" aria-label="Send message">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
