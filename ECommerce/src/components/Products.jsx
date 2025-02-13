import React from "react";

function Products({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "280px",
        backgroundColor: "#222",
        color: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ margin: "10px 0", fontSize: "18px" }}>{product.name}</h3>

      <p style={{ color: "#bbb", fontSize: "16px" }}> ${product.price} </p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background 0.2s ease-in-out",
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default Products;
