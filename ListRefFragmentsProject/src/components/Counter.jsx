import React, { Fragment, useEffect, useState } from "react";

const Counter = ({ theme }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [autoIncrement, setAutoIncrement] = useState(false);
  const [incrementValue, setIncrementValue] = useState(() => {
    const savedIncrement = localStorage.getItem("incrementValue");
    return savedIncrement ? JSON.parse(savedIncrement) : 1;
  });

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + incrementValue;
          localStorage.setItem("count", JSON.stringify(newCount));
          return newCount;
        });
      }, 1000);
    }
    return () => interval && clearInterval(interval);
  }, [autoIncrement, incrementValue]);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("incrementValue", JSON.stringify(incrementValue));
  }, [incrementValue]);

  const handleReset = () => {
    setCount(0);
    setAutoIncrement(false);
    localStorage.setItem("count", JSON.stringify(0));
  };

  const containerStyle = {
    textAlign: "center",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: theme === "light" ? "#F8F9FA" : "#1E1E1E",
    color: theme === "light" ? "#2D3748" : "#EAEAEA",
    boxShadow: theme === "light"
      ? "0 4px 8px rgba(0, 0, 0, 0.4)"
      : "0px 8px 16px rgba(0, 0, 0, 0.4)",
    width: "400px",
    margin: "auto",
    marginTop: "50px",
    fontFamily: "'Poppins', sans-serif",
  };

  const counterStyle = {
    fontSize: "42px",
    fontWeight: "600",
    margin: "15px 0",
    color: theme === "light" ? "#1E40AF" : "#60A5FA",
  };

  const inputStyle = {
    padding: "14px",
    border: `2px solid ${theme === "light" ? "#BFDBFE" : "#475569"}`,
    borderRadius: "10px",
    fontSize: "16px",
    width: "85px",
    textAlign: "center",
    margin: "12px auto",
    backgroundColor: theme === "light" ? "rgb(55, 84, 112)" : "#334155",
    color: theme === "light" ? "white" : "#DBEAFE",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const buttonStyle = {
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "10px 8px",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: theme === "light" ? "0 4px 12px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.2)",
    letterSpacing: "0.5px",
  };

  const incrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#34D399" : "#10B981",
    color: "#fff",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#FBBF24" : "#D97706",
    color: "#fff",
  };

  const autoIncrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: theme === "light" ? "#60A5FA" : "#3B82F6",
    color: "#fff",
  };

  return (
    <Fragment>
      <div style={containerStyle}>
        <h1 style={{ fontWeight: "700", color: theme === "light" ? "#1E40AF" : "#60A5FA", fontSize: "28px" }}>
          Counter
        </h1>
        <h3 style={{ color: theme === "light" ? "#64748B" : "#94A3B8", fontSize: "18px", fontWeight: "400" }}>
          Using useState and useEffect hooks
        </h3>

        <div style={counterStyle}>{count}</div>

        <div>
          <label htmlFor="increment" style={{ fontSize: "18px", fontWeight: "500", marginRight: "20px" }}>
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
            onClick={() => {
              setCount(count - incrementValue);
              localStorage.setItem("count", JSON.stringify(count - incrementValue));
            }}
            style={incrementButtonStyle}
          >
            -
          </button>

          <button
            onClick={() => {
              setCount(count + incrementValue);
              localStorage.setItem("count", JSON.stringify(count + incrementValue));
            }}
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
