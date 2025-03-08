import React, { useState, useEffect } from "react";

const FruitList = ({ theme }) => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "red", quantity: 10 },
    { id: 2, name: "Grapes", color: "green", quantity: 15 },
    { id: 3, name: "BlueBerry", color: "blue", quantity: 5 },
  ]);
  const [newFruit, setNewFruit] = useState({ name: "", color: "", quantity: 1 });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#F8F9FA" : "#1E1E1E";
  }, [theme]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFruit({ ...newFruit, [name]: name === "quantity" ? Number(value) : value });
  };

  const addFruit = (e) => {
    e.preventDefault();
    if (!newFruit.name || !newFruit.color) return;
    const newId = fruits.length > 0 ? Math.max(...fruits.map((f) => f.id)) + 1 : 1;
    setFruits([...fruits, { ...newFruit, id: newId }]);
    setNewFruit({ name: "", color: "", quantity: 1 });
    setIsAdding(false);
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((f) => f.id !== id));
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: theme === "light" ? "#F8F9FA" : "#1E1E1E",
        color: theme === "light" ? "#2D3748" : "#EAEAEA",
        boxShadow: theme === "light" ? "0 4px 8px rgba(0, 0, 0, 0.4)" : "0px 8px 16px rgba(0, 0, 0, 0.4)",
        width: "400px",
        margin: "auto",
        marginTop: "50px",
        fontFamily: "'Poppins', sans-serif",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h1 style={{ fontWeight: "700", color: theme === "light" ? "#1E40AF" : "#60A5FA", fontSize: "28px" }}>Fruit List</h1>
      <h2 style={{ color: theme === "light" ? "#64748B" : "#94A3B8", fontSize: "20px", fontWeight: "400", marginBottom: "25px" }}>Manage Your Inventory</h2>

      {isAdding ? (
        <form onSubmit={addFruit}>
          <input
            type="text"
            name="name"
            value={newFruit.name}
            onChange={handleInputChange}
            placeholder="Fruit name"
            required
            style={inputStyle(theme)}
          />
          <input
            type="text"
            name="color"
            value={newFruit.color}
            onChange={handleInputChange}
            placeholder="Color"
            required
            style={inputStyle(theme)}
          />
          <input
            type="number"
            name="quantity"
            value={newFruit.quantity}
            onChange={handleInputChange}
            min={1}
            placeholder="Quantity"
            required
            style={inputStyle(theme)}
          />
          <button type="submit" style={buttonStyle("#34D399")}>Save</button>
          <button type="button" onClick={() => setIsAdding(false)} style={buttonStyle("#FBBF24")}>Cancel</button>
        </form>
      ) : (
        <>
          {fruits.length === 0 ? (
            <p>No fruits in the list.</p>
          ) : (
            fruits.map((fruit) => (
              <div key={fruit.id} style={fruitItemStyle(theme)}>
                <span style={{ ...colorCircle, backgroundColor: fruit.color }}></span>
                <strong style={{ fontSize: "20px" }}>{fruit.name}</strong> {fruit.quantity} in stock
                <button onClick={() => deleteFruit(fruit.id)} style={buttonStyle("#EF4444")}>Delete</button>
              </div>
            ))
          )}
          <button onClick={() => setIsAdding(true)} style={buttonStyle("#3B82F6")}>Add Fruit</button>
        </>
      )}
    </div>
  );
};

// Dynamic Input Styles based on Theme
const inputStyle = (theme) => ({
  padding: "14px",
  borderRadius: "10px",
  fontSize: "16px",
  width: "85%",
  textAlign: "center",
  margin: "12px auto",
  outline: "none",
  display: "block",
  border: theme === "light" ? "2px solid #475569" : "2px solid #6B7280",
  backgroundColor: theme === "light" ? "#FFFFFF" : "#334155",
  color: theme === "light" ? "#2D3748" : "#EAEAEA",
  transition: "all 0.3s ease-in-out",
});

const buttonStyle = (bgColor) => ({
  padding: "12px 24px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: bgColor,
  color: "#fff",
  margin: "10px 8px",
});

const fruitItemStyle = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme === "light" ? "rgb(56, 102, 133)" : "#334155",
  color: "#DBEAFE",
  padding: "10px",
  borderRadius: "8px",
  margin: "10px 0",
});

const colorCircle = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  display: "inline-block",
};

export default FruitList;
