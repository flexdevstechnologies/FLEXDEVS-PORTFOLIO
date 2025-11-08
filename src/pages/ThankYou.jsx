import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYou() {
  const siteURL = window.location.origin; // dynamically detects the live domain

  return (
    <>
      <Helmet>
        <title>Thank You — Flexdevs Technologies</title>
      </Helmet>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e0e7ff 0%, #ffffff 100%)",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "50px 30px",
            maxWidth: "600px",
            boxShadow: "0 6px 24px rgba(37, 99, 235, 0.15)",
          }}
        >
          <h1 style={{ color: "#1e3a8a", marginBottom: "15px" }}>
            Thank You! 🎉
          </h1>
          <p
            style={{
              color: "#475569",
              marginBottom: "25px",
              fontSize: "1.05rem",
            }}
          >
            Your message has been sent successfully.  
            Our team will reach out soon with more details.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "12px 26px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1e40af")}
            onMouseOut={(e) => (e.target.style.background = "#2563eb")}
          >
            Back to Home
          </Link>

          <div style={{ marginTop: "30px", color: "#64748b" }}>
            <small>
              You can also visit our main site:{" "}
              <a
                href={siteURL}
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                {siteURL}
              </a>
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
