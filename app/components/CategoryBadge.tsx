import Link from "next/link";
import { getCategoryBySlug } from "../data/categories";

interface CategoryBadgeProps {
  categorySlug: string;
  size?: "sm" | "md" | "lg";
  standalone?: boolean;
}

const categoryGradients: Record<string, string> = {
  "ai-ml": "linear-gradient(135deg, #00ffff 0%, #ff00aa 100%)",
  "web-dev": "linear-gradient(135deg, #0088ff 0%, #00ffff 100%)",
  "cybersecurity": "linear-gradient(135deg, #ff0066 0%, #ff00aa 100%)",
  "cloud-devops": "linear-gradient(135deg, #00ff88 0%, #00aaff 100%)",
  "open-source": "linear-gradient(135deg, #ffaa00 0%, #ff6600 100%)",
  "programming": "linear-gradient(135deg, #00ff88 0%, #00cc6e 100%)",
  "tutorials": "linear-gradient(135deg, #8866ff 0%, #00ffff 100%)",
  "mobile-edge": "linear-gradient(135deg, #ff00aa 0%, #ff66cc 100%)",
  "data-analytics": "linear-gradient(135deg, #00cc6e 0%, #00ff88 100%)",
  "dev-environment": "linear-gradient(135deg, #0088ff 0%, #66aaff 100%)",
};

const categoryColors: Record<string, string> = {
  "ai-ml": "#00ffff",
  "web-dev": "#0088ff",
  "cybersecurity": "#ff0066",
  "cloud-devops": "#00ff88",
  "open-source": "#ffaa00",
  "programming": "#00ff88",
  "tutorials": "#8866ff",
  "mobile-edge": "#ff00aa",
  "data-analytics": "#00cc6e",
  "dev-environment": "#0088ff",
};

export default function CategoryBadge({
  categorySlug,
  size = "md",
  standalone = false,
}: CategoryBadgeProps) {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return null;

  const gradient = categoryGradients[categorySlug] || "linear-gradient(135deg, #00ffff, #ff00aa)";
  const color = categoryColors[categorySlug] || "#00ffff";

  const sizeStyles = {
    sm: { padding: "0.25rem 0.6rem", fontSize: "0.65rem", gap: "0.35rem" },
    md: { padding: "0.4rem 0.85rem", fontSize: "0.75rem", gap: "0.4rem" },
    lg: { padding: "0.55rem 1.1rem", fontSize: "0.85rem", gap: "0.5rem" },
  };

  const style = sizeStyles[size];

  if (standalone) {
    return (
      <span
        className="category-badge-standalone"
        style={{
          ...style,
          background: `rgba(0, 0, 0, 0.3)`,
          border: `1px solid ${color}44`,
          color: color,
          display: "inline-flex",
          alignItems: "center",
          borderRadius: "9999px",
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          backdropFilter: "blur(10px)",
        }}
      >
        <span style={{ fontSize: "0.9em" }}>{cat.icon}</span>
        {cat.name}
      </span>
    );
  }

  return (
    <Link
      href={`/categories/${cat.slug}`}
      className="category-badge-link"
      style={{
        ...style,
        background: `rgba(0, 0, 0, 0.3)`,
        border: `1px solid ${color}44`,
        color: color,
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "9999px",
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        textDecoration: "none",
        backdropFilter: "blur(10px)",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = color;
        target.style.boxShadow = `0 0 20px ${color}44, inset 0 0 20px ${color}11`;
        target.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = `${color}44`;
        target.style.boxShadow = "none";
        target.style.transform = "translateY(0)";
      }}
    >
      <span style={{ fontSize: "0.9em", flexShrink: 0 }}>{cat.icon}</span>
      <span>{cat.name}</span>
      <span
        className="badge-glow"
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          opacity: 0,
          borderRadius: "inherit",
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </Link>
  );
}