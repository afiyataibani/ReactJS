import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(214 225 247)",
  };

  const boxStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  };

  const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "black"}}>Count: {counter}</h1>
        <button
          style={{ ...buttonStyle, backgroundColor: "rgb(30 91 179)" }}
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: counter === 0 ? "rgb(150 160 179)" : "rgb(30 91 179)", cursor: counter === 0 ? "not-allowed" : "pointer" }}
          onClick={() => counter > 0 && setCounter(counter - 1)}
          disabled={counter === 0}
        >
          Decrement
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#374151" }}
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
