import React from "react";

function Cart({ items, onRemoveFromCart, onRemovingCard }) {
  // Total price of items in the cart
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      style={{

        marginTop:"135px",
        width: "350px",
        backgroundColor: "#252525",
        padding: "15px",
        borderRadius: "8px",
        color: "#fff",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        position: "absolute", 
        top: "8px",
        right: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", borderBottom: "1px solid #444", paddingBottom: "10px" }}>
        Shopping Cart
      </h2>

      {items.length === 0 ? (
        <p style={{ textAlign: "center", color: "#bbb" }}>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #444",
              paddingBottom: "10px",
              marginBottom: "10px",
              gap: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "5px 0", fontSize: "16px", color: "#ddd" }}>{item.name}</h3>
              <p style={{ color: "#aaa", fontSize: "14px" }}>
                ${item.price} x {item.quantity}
              </p>
            </div>

            {/* Reduce Quantity Button */}
            <button
              onClick={() => onRemoveFromCart(item.id)}
              style={{
                backgroundColor: "#666",
                color: "white",
                padding: "5px 8px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
                marginRight: "5px",
              }}
            >
              −
            </button>

            {/* Remove Item Button (Cross) */}
            <button
              onClick={() => onRemovingCard(item.id)}
              style={{
                
                color: "white",
                padding: "5px 8px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
              }}
            >
              ❌
            </button>
          </div>
        ))
      )}

      <h3 style={{ textAlign: "right", marginTop: "10px", color: "#fff" }}>
        Total: ${total.toFixed(2)}
      </h3>
    </div>
  );
}

export default Cart;
