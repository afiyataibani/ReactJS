import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Image,
  Spinner,
} from "react-bootstrap";

function Update() {
  const [category] = useState(["Men", "Female", "Jewellry", "Electronics"]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`http://localhost:3000/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
        setImagePreview(data.image || "");
      } catch (err) {
        setError(err.message);
        console.log("Error fetching product:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const getInput = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
    if (name === "image") {
      setImagePreview(value);
    }
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    if (!product.title || !product.price || !product.category) {
      setError("Please fill in all required fields");
      return;
    }
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Failed to update product");
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log("Error updating product:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-5 min-vh-100 d-flex align-items-center">
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 animate__animated animate__fadeIn">
            <Card.Header
              className="text-white py-4"
              style={{
                background: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
              }}
            >
              <h3 className="mb-0 text-center fw-bold ">
                <i className="bi bi-pencil-square me-2"></i>Update Product
              </h3>
            </Card.Header>

            <Card.Body className="p-4 p-md-5">
              {error && (
                <Alert
                  variant="danger"
                  dismissible
                  onClose={() => setError(null)}
                >
                  {error}
                </Alert>
              )}
              {isLoading && (
                <div className="text-center mb-3">
                  <Spinner animation="border" variant="primary" />
                </div>
              )}

              <Form onSubmit={submitProduct} noValidate>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group controlId="productTitle">
                      <Form.Label className="fw-semibold">
                        Product Title <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={product.title || ""}
                        placeholder="Enter product title"
                        onChange={getInput}
                        className="shadow-sm transition-all"
                        required
                        isInvalid={!product.title && error}
                      />
                      <Form.Control.Feedback type="invalid">
                        Title is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="productPrice">
                      <Form.Label className="fw-semibold">
                        Price ($) <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={product.price || ""}
                        placeholder="Enter price"
                        onChange={getInput}
                        className="shadow-sm transition-all"
                        min="0"
                        step="0.01"
                        required
                        isInvalid={!product.price && error}
                      />
                      <Form.Control.Feedback type="invalid">
                        Price is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="productCategory">
                      <Form.Label className="fw-semibold">
                        Category <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        name="category"
                        value={product.category || ""}
                        onChange={getInput}
                        className="shadow-sm transition-all"
                        required
                        isInvalid={!product.category && error}
                      >
                        <option value="">Select Category</option>
                        {category.map((cat, index) => (
                          <option key={index} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Category is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="productImage">
                      <Form.Label className="fw-semibold">Image URL</Form.Label>
                      <Form.Control
                        type="url"
                        name="image"
                        value={product.image || ""}
                        placeholder="https://example.com/image.jpg"
                        onChange={getInput}
                        className="shadow-sm transition-all"
                      />
                    </Form.Group>
                  </Col>
                  {imagePreview && (
                    <Col xs={12} className="text-center">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: "200px", objectFit: "cover" }}
                        onError={() => setImagePreview("")}
                      />
                    </Col>
                  )}
                  <Col xs={12}>
                    <Form.Group controlId="productDescription">
                      <Form.Label className="fw-semibold">
                        Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={product.description || ""}
                        placeholder="Enter product description"
                        onChange={getInput}
                        className="shadow-sm transition-all"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-5 d-flex justify-content-between gap-3">
                  <Button
                    variant="outline-secondary"
                    onClick={() => navigate("/")}
                    disabled={isLoading}
                    className="w-100 py-2 transition-all"
                  >
                    <i className="bi bi-x-circle me-2"></i>Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    style={{
                      width: "100%",
                      border: "2px solid #00d4ff",
                      borderRadius: "10px",
                      // padding: "0.55rem",
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
                    {isLoading ? (
                      <>
                        <Spinner
                          size="sm"
                          animation="border"
                          className="me-2"
                        />
                        Updating...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check-circle me-2"></i>Update
                        Product
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Update;
