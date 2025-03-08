import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import FruitList from "./components/FruitList";
import ToDoList from "./components/ToDoList";

const styles = {
  light: {
    bg: "#E6F0FA",
    text: "#1A365D",
    card: "#FFFFFF", 
    border: "#BFDBFE", 
  },
  dark: {
    bg: "#1E293B", 
    text: "#E2E8F0", 
    card: "#334155", 
    border: "#475569", 
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
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px", color: "#3B82F6" }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main
        style={{
          backgroundColor: theme === "light" ? "#F0F9FF" : "#293548", 
          padding: "25px",
          borderRadius: "12px",
          boxShadow:
            theme === "light"
              ? "0px 5px 15px rgba(59, 130, 246, 0.1)"
              : "0px 5px 15px rgba(0, 0, 0, 0.4)",
          transition: "all 0.3s ease",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          color: theme === "light" ? "#1E3A8A" : "#DBEAFE",
          marginTop: "100px"
        }}
      >
        {activeTab === "home" && (
          <div style = {{    textAlign: "center",
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
            fontFamily: "'Poppins', sans-serif",}}>
            <h1
              style={{
                marginBottom: "15px",
                fontWeight: "600",
                color: theme === "light" ? "#1E40AF" : "#60A5FA",
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

        {activeTab === "counter" && <Counter theme={theme} />}
        {activeTab === "profile" && <UserProfile theme={theme} />}
        {activeTab === "fruits" && <FruitList theme={theme} />}
        {activeTab === "todos" && <ToDoList theme={theme} />}
      </main>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "18px",
          opacity: "0.8",
        }}
      >
        © 2025 React UI. All rights reserved.
      </footer>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;