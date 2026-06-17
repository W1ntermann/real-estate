import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", padding: "0 24px" }}>
        <p
          className="eyebrow"
          style={{ marginBottom: 16 }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "clamp(32px, 4vw, 64px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          Сторінку не знайдено
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            color: "#a1a1a1",
            margin: "0 0 40px",
          }}
        >
          Можливо, ви шукаєте щось інше?
        </p>
        <Link href="/" className="btn-pill" style={{ textDecoration: "none" }}>
          На головну
        </Link>
      </div>
    </div>
  );
}