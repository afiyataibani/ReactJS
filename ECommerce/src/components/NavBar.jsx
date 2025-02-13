import React from "react";

function NavBar({ cartItemCount = 0 }) {
  return (
    <div
      style={{
        backgroundColor: "#222", // Darker background for better contrast
        padding: "1rem 0",
        color: "white",
        position: "fixed", // Stays at the top
        top: 0,
        left: 0,
        width: "100%",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.3)", // Subtle shadow
      }}
    >
      <div
        style={{
          maxWidth: "1320px", 
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "bold" }}>
          🛍️ E-Shop
        </h1>

        <div style={{ position: "relative" }}>
          <span
            style={{
              fontSize: "28px",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🛒
          </span>
          {cartItemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
