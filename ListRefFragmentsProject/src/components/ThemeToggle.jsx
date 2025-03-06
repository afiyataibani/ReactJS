import React from "react";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "25px",
        height: "60px",
        borderRadius: "50%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        backgroundColor: theme === "light" ? "#222" : "#f8f9fa",
        color: theme === "light" ? "#fff" : "#111", 
      }}
      onClick={toggleTheme}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}

export default ThemeToggle;
