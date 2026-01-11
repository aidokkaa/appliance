import { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "none",
        background: "#0a2540",
        color: "#fff",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
}
