import React, { Fragment, useEffect, useState } from "react";

const Counter = ({ theme }) => {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);
  const [incrementValue, setIncrementValue] = useState(1);

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(
        () => setCount((prevCount) => prevCount + incrementValue),
        1000
      );
    }
    return () => interval && clearInterval(interval);
  }, [autoIncrement, incrementValue]);

  const handleReset = () => {
    setCount(0);
    setAutoIncrement(false);
  };

  const containerStyle = {
    textAlign: "center",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: theme === "light" ? "#FAF3DD" : "#2C2C2C",
    color: theme === "light" ? "#333" : "#EAEAEA",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
    width: "340px",
    margin: "auto",
    marginTop: "50px",
    fontFamily: "'Poppins', sans-serif",
  };

  const counterStyle = {
    fontSize: "42px",
    fontWeight: "600",
    margin: "15px 0",
  };

  const inputStyle = {
    padding: "12px",
    border: `2px solid ${theme === "light" ? "#B3B3B3" : "#666"}`,
    borderRadius: "8px",
    fontSize: "18px",
    width: "85px",
    textAlign: "center",
    margin: "10px",
    backgroundColor: theme === "light" ? "#FFFFFF" : "#3A3A3A",
    color: theme === "light" ? "#333" : "#EAEAEA",
    outline: "none",
    transition: "border 0.3s ease",
  };

  const buttonStyle = {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "17px",
    margin: "8px",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
  };

  const incrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#6BCB77" : "#379B69", 
    color: "#fff",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#FF9F45" : "#E87424",
    color: "#fff",
  };

  const autoIncrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#61A5C2" : "#3E7CB1", 
    color: "#fff",
  };

  return (
    <Fragment>
      <div style={containerStyle}>
        <h1 style={{fontWeight: "600", color: theme === "light" ? "#333" : "#FFD700"}}>Counter</h1>
        <h3 style={{color: theme === "light" ? "#555" : "#bbb" }}>
          Using useState and useEffect hooks
        </h3>

        <div style={counterStyle}>{count}</div>

        <div>
          <label htmlFor="increment" style={{ fontSize: "16px", fontWeight: "500" }}>
            Increment Amount
          </label>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(Number(e.target.value))}
            min="1"
            max="100"
            style={inputStyle}
          />
        </div>

        <div>
          <button
            onClick={() => setCount(count - incrementValue)}
            style={incrementButtonStyle}
          >
            -
          </button>

          <button
            onClick={() => setCount(count + incrementValue)}
            style={incrementButtonStyle}
          >
            +
          </button>
        </div>

        <div>
          <button onClick={handleReset} style={resetButtonStyle}>
            Reset
          </button>

          <button
            onClick={() => setAutoIncrement(!autoIncrement)}
            style={autoIncrementButtonStyle}
          >
            {autoIncrement ? "Stop Auto" : "Start Auto"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
