import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import "../../src/pagination.css";

function View() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Fetching products failed:", error);
    }
  };

  const deletePro = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Delete failed: ${response.status}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      alert("Failed to delete the product.");
    }
  };

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div
      style={{
        background: "linear-gradient(120deg, #eef2f3 0%, #e6ecef 100%)",
        minHeight: "100vh",
        padding: "2.5rem 0",
        overflowX: "hidden", // Prevent horizontal scroll
      }}
    >
      <Container fluid className="px-3">
        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <h1
              style={{
                fontSize: "2.8rem",
                fontWeight: "800",
                color: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                marginBottom: "0.75rem",
                letterSpacing: "-0.5px",
              }}
            >
              Product Gallery
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#636e72",
                fontWeight: "400",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Discover a handpicked selection of top-quality products
            </p>
          </Col>
        </Row>

        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={5} className="mb-3 mb-md-0">
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                borderRadius: "50px",
                padding: "0.8rem 1.75rem",
                border: "1px solid #dfe6e9",
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                fontSize: "1rem",
                background: "#fff",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#00a8ff";
                e.target.style.boxShadow = "0 3px 15px rgba(0,168,255,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#dfe6e9";
                e.target.style.boxShadow = "0 3px 12px rgba(0,0,0,0.08)";
              }}
            />
          </Col>
          <Col xs={12} md={3}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                borderRadius: "50px",
                padding: "0.8rem 1.75rem",
                border: "1px solid #dfe6e9",
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                fontSize: "1rem",
                background: "#fff",
                color: "#2d3436",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00a8ff")}
              onBlur={(e) => (e.target.style.borderColor = "#dfe6e9")}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Container style={{ maxWidth: "1320px" }}>
          <Row className="gx-4 gy-4">
            {currentProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  style={{
                    borderRadius: "15px",
                    border: "none",
                    background: "#ffffff",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    height: "100%",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,168,255,0.25)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,0,0,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      height: "250px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "1rem",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/250?text=Image+Not+Found")
                      }
                    />
                    <Badge
                      bg="dark"
                      style={{
                        position: "absolute",
                        top: "210px",
                        left: "15px",
                        background: "#181F38",
                        padding: "0.5rem 0.9rem",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        borderRadius: "20px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      {product.category}
                    </Badge>
                  </div>

                  <Card.Body
                    style={{
                      padding: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Card.Title
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: "700",
                          color: "#1e272e",
                          margin: 0,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {product.title}
                      </Card.Title>
                      <span
                        style={{
                          color: "#00b894",
                          fontWeight: "700",
                          fontSize: "1.25rem",
                        }}
                      >
                        ₹{product.price}
                      </span>
                    </div>
                    <Card.Text
                      style={{
                        fontSize: "0.9rem",
                        color: "#636e72",
                        lineHeight: "1.5",
                        marginBottom: "1rem",
                      }}
                    >
                      {product.description.length > 60
                        ? product.description.substring(0, 60) + "..."
                        : product.description}
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginTop: "auto",
                      }}
                    >
                      <Link to={`/update/${product.id}`} style={{ flex: 1 }}>
                        <Button
                          style={{
                            width: "100%",
                            border: "2px solid #00d4ff",
                            borderRadius: "10px",
                            padding: "0.55rem",
                            fontSize: "1rem",
                            fontWeight: "600",
                            background:
                              "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                            color: "#00d4ff",
                            borderColor: "black",
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
                          Edit
                        </Button>
                      </Link>

                      <Link to={`/product/${product.id}`} style={{ flex: 1 }}>
                        <Button
                          variant="outline-primary"
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                            borderColor: "black",
                            color: "#00d4ff",
                            borderRadius: "10px",
                            padding: "0.55rem",
                            fontSize: "1rem",
                            fontWeight: "600",
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
                          Details
                        </Button>
                      </Link>
                      <Button
                        onClick={() => deletePro(product.id)}
                        variant="danger"
                        style={{
                          width: "45px",
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          background: "#dc3545",
                          border: "none",
                          borderRadius: "50px",
                          padding: "0.35rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(220,53,69,0.3)",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = "#c82333")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "#dc3545")
                        }
                      >
                        X
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {totalPages > 1 && (
            <Row className="mt-5">
              <Col className="d-flex justify-content-center">
                <Pagination
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "0.5rem",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <Pagination.Prev
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  />
                  {[...Array(totalPages)].map((_, i) => (
                    <Pagination.Item
                      key={i}
                      active={i + 1 === currentPage}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </Col>
            </Row>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default View;
