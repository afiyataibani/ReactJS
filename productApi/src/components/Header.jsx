import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#00d4ff" }}>Product</span>
          <span style={{ color: "#ffffff" }}>Api</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", color: "#fff" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            style={{
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Link to="/add">
              <Button
                style={{
                  background: "transparent",
                  border: "2px solid #00d4ff",
                  color: "#00d4ff",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#00d4ff";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#00d4ff";
                }}
              >
                Add Products
              </Button>
            </Link>
            <Link to="/">
              <Button
                style={{
                  background: "#00d4ff",
                  border: "none",
                  color: "#fff",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#00b7d4")}
                onMouseLeave={(e) => (e.target.style.background = "#00d4ff")}
              >
                View Products
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
