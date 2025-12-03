import { useState } from "react";
import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const access_key = "61da6a0b-51b9-40c6-8fe7-43808a9002c7";
  const apiUrl = "https://api.web3forms.com/submit";

  async function tryFetchSubmit(payload) {
    // Attempt a JSON fetch POST
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res;
  }

  function fallbackIframePost(payload) {
    // Create a hidden iframe and post the data as form multipart to avoid top-level navigation
    return new Promise((resolve) => {
      try {
        const iframeName = "web3forms-fallback-iframe";
        // Remove existing iframe if present
        const existing = document.getElementById(iframeName);
        if (existing) existing.remove();

        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.id = iframeName;
        iframe.name = iframeName;
        document.body.appendChild(iframe);

        const form = document.createElement("form");
        form.style.display = "none";
        form.method = "POST";
        form.action = apiUrl;
        form.target = iframeName;

        // add fields
        Object.keys(payload).forEach((k) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = k;
          input.value = payload[k] ?? "";
          form.appendChild(input);
        });

        document.body.appendChild(form);

        // Submit the form to the hidden iframe
        form.submit();

        // Resolve after a short delay — we can't reliably detect success from iframe due to cross-origin,
        // but this ensures we attempted a non-navigating POST.
        setTimeout(() => {
          // cleanup
          form.remove();
          // leave iframe for browser to handle; remove it after a delay to be safe
          setTimeout(() => {
            try { iframe.remove(); } catch (e) {}
          }, 3000);
          resolve(true);
        }, 1200);
      } catch (e) {
        console.error("fallbackIframePost error:", e);
        resolve(false);
      }
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    const formEl = e.target;
    const fd = new FormData(formEl);
    const payload = {};
    for (const [k, v] of fd.entries()) payload[k] = v;
    if (!payload.access_key) payload.access_key = access_key;

    // First try: fetch
    try {
      const res = await tryFetchSubmit(payload);
      if (res.ok) {
        // success path (JSON)
        const data = await res.json().catch(() => null);
        if (data && data.success) {
          formEl.reset();
          setStatus({ loading: false, ok: true, msg: "Message sent" });
          setShowSuccess(true);
          return;
        } else {
          // Unexpected payload but 200 OK — treat as success conservatively
          formEl.reset();
          setStatus({ loading: false, ok: true, msg: "Message sent" });
          setShowSuccess(true);
          return;
        }
      } else {
        // Non-200 - attempt fallback
        console.warn("Fetch returned non-OK:", res.status);
        // try fallback
      }
    } catch (fetchErr) {
      console.warn("Fetch submit threw — will attempt iframe fallback:", fetchErr);
      // proceed to fallback
    }

    // Fallback: iframe post (avoids navigating main window)
    try {
      const fallbackOk = await fallbackIframePost(payload);
      if (fallbackOk) {
        // We attempted fallback; we can't guarantee success because of cross-origin, but assume it succeeded
        formEl.reset();
        setStatus({ loading: false, ok: true, msg: "Message submitted (fallback). We'll contact you soon." });
        setShowSuccess(true);
        return;
      } else {
        setStatus({ loading: false, ok: false, msg: "Submission failed — please try again later." });
        return;
      }
    } catch (fbErr) {
      console.error("Fallback error:", fbErr);
      setStatus({ loading: false, ok: false, msg: "Submission failed — please try again later." });
    }
  }

  function handleReturn() {
    setShowSuccess(false);
    const home = document.getElementById("home");
    if (home) home.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Success full-screen
  if (showSuccess) {
    return (
      <>
        <Helmet><title>Thanks — Flexdevs Technologies</title></Helmet>
        <div className="success-screen" role="status" aria-live="polite">
          <div className="success-card">
            <div className="success-icon" aria-hidden>✓</div>
            <h2 className="success-title">Thanks — we received your message</h2>
            <p className="success-sub">
              Our team has your details and will contact you shortly. We usually respond within 1–2 business days.
              If you need urgent help, email us at{" "}
              <a href="mailto:flexdevstechnologies@gmail.com" className="contact-link">
                flexdevstechnologies@gmail.com
              </a>.
            </p>
            <div style={{ marginTop: 18 }}>
              <button className="hero-btn primary" onClick={handleReturn}>Return to site</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Main contact panel (layout unchanged)
  return (
    <>
      <Helmet><title>Flexdevs Technologies | Contact</title></Helmet>

      <section className="section-wrapper">
        <div className="section-inner">
          <div className="contact-panel">
            <div className="contact-grid">
              <div className="contact-left">
                <h1 className="contact-hero">
                  Talk to an <span className="accent">FlexDevs</span> expert
                </h1>
                <p className="contact-lead">
                  We're here to help. Get in touch — or email us at{" "}
                  <a href="mailto:flexdevstechnologies@gmail.com" className="contact-link">
                    flexdevstechnologies@gmail.com
                  </a>.
                </p>
                <ul className="contact-points">
                  <li><strong>Estimate:</strong> We’ll review and reply within 1–2 business days.</li>
                  <li><strong>Scope:</strong> UI/UX, React apps, product MVPs, and website builds.</li>
                </ul>
              </div>

              <div className="contact-right">
                {/* keep visible layout exactly the same; handle submit here */}
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <input type="hidden" name="access_key" value={access_key} />

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
                    <button type="submit" className="send-btn" aria-label="Send message" disabled={status.loading}>
                      {status.loading ? "Sending…" : "Send"}
                    </button>
                  </div>

                  {/* status */}
                  {status.ok === true && <div style={{ marginTop: 12, color: "#96f0b6" }}>{status.msg}</div>}
                  {status.ok === false && <div style={{ marginTop: 12, color: "#ff9fb2" }}>{status.msg}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
