import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

// Theme Styles
const styles = {
  light: {
    bg: "#f9f9f9",
    text: "#222",
    card: "#fff",
    border: "#ddd",
  },
  dark: {
    bg: "#1e1e1e",
    text: "#f5f5f5",
    card: "#2c2c2c",
    border: "#444",
  },
};

function App() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("home");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = styles[theme].bg;
    document.body.style.color = styles[theme].text;
  }, [theme]);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main
      style={{
        backgroundColor: theme === "light" ? "#FAF3DD" : "#2C2C2C",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
          theme === "light"
            ? "0px 5px 15px rgba(0,0,0,0.15)"
            : "0px 5px 15px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        color: theme === "light" ? "#333" : "#EAEAEA",
      }}
    >
      {activeTab === "home" && (
        <div>
          <h1
            style={{
              marginBottom: "15px",
              fontWeight: "600",
              color: theme === "light" ? "#333" : "#FFD700",
            }}
          >
            React Concepts
          </h1>
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "20px" }}>
            <li>✅ Lists and Keys</li>
            <li>✅ Refs</li>
            <li>✅ Fragments</li>
            <li>✅ State and Props</li>
            <li>✅ Hooks</li>
          </ul>
        </div>
      )}

        {activeTab === "counter" && <Counter theme={theme}/>}
        {activeTab === "profile" && <UserProfile theme={theme} />}
      </main>

      <footer style={{ textAlign: "center", marginTop: "40px", fontSize: "18px", opacity: "0.8" }}>
        © 2025 React UI. All rights reserved.
      </footer>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
