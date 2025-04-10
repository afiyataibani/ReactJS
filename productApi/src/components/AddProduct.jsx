import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [category] = useState(["Men", "Women", "Jewelry", "Electronics"]);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const getInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    try {
      const addProduct = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (addProduct.ok) {
        navigate("/");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <Container
      fluid
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e3e8ee 100%)", // Light gradient background
        minHeight: "100vh",
        padding: "2.5rem 1rem",
      }}
    >
      <Container style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Card
          className="border-0 shadow-sm p-4"
          style={{
            borderRadius: "12px",
            background: "#ffffff", // White card background for contrast
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Enhanced shadow for depth
          }}
        >
          <h2
            className="text-center fw-bold mb-4"
            style={{
              color: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
              fontSize: "2.25rem",
              letterSpacing: "-0.5px",
              paddingTop: "1rem",
            }}
          >
            Add New Product
          </h2>
          <Form onSubmit={submitProduct}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formTitle">
                  <Form.Label
                    className="fw-medium"
                    style={{ color: "#333", fontSize: "1rem" }}
                  >
                    Product Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter product title"
                    onChange={getInput}
                    className="form-control"
                    style={{
                      borderRadius: "6px",
                      borderColor: "#e0e0e0",
                      padding: "10px",
                      fontSize: "0.95rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      transition: "border-color 0.3s ease",
                    }}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPrice">
                  <Form.Label
                    className="fw-medium"
                    style={{ color: "#333", fontSize: "1rem" }}
                  >
                    Price (₹)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    onChange={getInput}
                    className="form-control"
                    style={{
                      borderRadius: "6px",
                      borderColor: "#e0e0e0",
                      padding: "10px",
                      fontSize: "0.95rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      transition: "border-color 0.3s ease",
                    }}
                    required
                    min="0"
                    onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCategory">
                  <Form.Label
                    className="fw-medium"
                    style={{ color: "#333", fontSize: "1rem" }}
                  >
                    Category
                  </Form.Label>
                  <Form.Select
                    name="category"
                    onChange={getInput}
                    className="form-select"
                    style={{
                      borderRadius: "6px",
                      borderColor: "#e0e0e0",
                      padding: "10px",
                      fontSize: "0.95rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      color: "#495057",
                      transition: "border-color 0.3s ease",
                    }}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  >
                    <option value="">Select Category</option>
                    {category.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formImage">
                  <Form.Label
                    className="fw-medium"
                    style={{ color: "#333", fontSize: "1rem" }}
                  >
                    Image URL
                  </Form.Label>
                  <Form.Control
                    type="url"
                    name="image"
                    placeholder="Enter image URL"
                    onChange={getInput}
                    className="form-control"
                    style={{
                      borderRadius: "6px",
                      borderColor: "#e0e0e0",
                      padding: "10px",
                      fontSize: "0.95rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      transition: "border-color 0.3s ease",
                    }}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="formDescription">
                  <Form.Label
                    className="fw-medium"
                    style={{ color: "#333", fontSize: "1rem" }}
                  >
                    Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    placeholder="Enter product description"
                    onChange={getInput}
                    className="form-control"
                    style={{
                      borderRadius: "6px",
                      borderColor: "#e0e0e0",
                      padding: "10px",
                      fontSize: "0.95rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      resize: "vertical",
                      transition: "border-color 0.3s ease",
                    }}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center mt-4">
              <Button
                type="submit"
                className="px-4 py-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                  border: "2px solid #00d4ff",
                  color: "#00d4ff",
                  borderColor: "black",
                  boxShadow: "0 4px 6px rgba(0, 212, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#00d4ff";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)";
                  e.target.style.color = "#00d4ff";
                }}
              >
                Add Product
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </Container>
  );
}

export default AddProduct;
