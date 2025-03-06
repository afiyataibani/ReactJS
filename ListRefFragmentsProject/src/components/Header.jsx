import React from "react";

function Header({ activeTab, setActiveTab, theme }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "todos", label: "Todo List" },
    { id: "profile", label: "User Profile" },
    { id: "counter", label: "Counter" },
    { id: "fruits", label: "Fruit List" }, 
  ];

  const headerStyle = {
    width: "100%", 
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 32px",
    borderBottom: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
    backgroundColor: theme === "light" ? "#fff" : "#1a1a1a",
    zIndex: "1000",
  };

  const navStyle = {
    display: "flex",
    gap: "30px",
    padding: "0",
    margin: "0",
    listStyle: "none",
    flexWrap: "nowrap", 
    overflow: "visible", 
  };

  const navItemStyle = (isActive) => ({
    fontSize: "26px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px 18px",
    whiteSpace: "nowrap", 
    minWidth: "max-content", 
    flexShrink: 0, 
    color: isActive ? "#007bff" : theme === "light" ? "#222" : "#fff", 
    transition: "color 0.3s ease",
  });

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    height: "50px",  
  };
  
  const logoImgStyle = {
    height: "100px", 
    width: "auto",  
    marginRight: "20px", 
    marginLeft: "40px",
  };
  

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
  <img 
    src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" 
    alt="React Logo" 
    style={logoImgStyle}
  />
</div>

      <nav>
        <ul style={navStyle}>
          {navItems.map((item) => (
            <li
              key={item.id}
              style={navItemStyle(activeTab === item.id)}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
