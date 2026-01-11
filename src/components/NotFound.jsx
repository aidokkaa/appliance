import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
        background: "#0a2540",
        color: "#ffffff",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: "96px",
          margin: "0",
          lineHeight: "1",
          fontWeight: "700",
        }}
      >
        404
      </h1>

      <p
        style={{
          fontSize: "18px",
          margin: "16px 0 32px",
          opacity: 0.85,
          maxWidth: "420px",
        }}
      >
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          padding: "12px 28px",
          borderRadius: "8px",
          background: "#ffffff",
          color: "#0a2540",
          fontWeight: "600",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        Go back home
      </Link>
    </div>
  );
}
