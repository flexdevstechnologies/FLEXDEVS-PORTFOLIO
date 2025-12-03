export default function ServiceCard({ icon, title, description }) {
  return (
    <article className="card hover-animate" role="article" aria-label={title}>
      <div className="service-icon" aria-hidden="true">
        <span style={{ fontSize: "1.35rem", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          {icon}
        </span>
      </div>

      <h3 className="h3">{title}</h3>
      <p className="lead" style={{ marginTop: 8 }}>{description}</p>
    </article>
  );
}
