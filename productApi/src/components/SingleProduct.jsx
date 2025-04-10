import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Badge,
  Spinner,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:3000/reviews?productId=${id}`);
      const data = await res.json();
      setReviews(data.reverse());
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim() || !reviewer.trim() || rating === 0) return;

    const newReview = {
      productId: Number(id),
      reviewer,
      text: reviewText,
      rating,
    };

    try {
      const res = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      const savedReview = await res.json();
      setReviews([savedReview, ...reviews]);
      setReviewText("");
      setReviewer("");
      setRating(0);
    } catch (err) {
      console.error("Error saving review:", err);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3000/reviews/${reviewId}`, {
        method: "DELETE",
      });
      setReviews(reviews.filter((r) => r.id !== reviewId));
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  const totalReviews = reviews.length;
  const averageRating = totalReviews
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : 0;

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container
      className="py-5"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* Product Section */}
      <Row className="g-4 align-items-center">
        <Col md={6}>
          <Card
            className="border-0 shadow-sm"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <Card.Img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{
                objectFit: "contain",
                padding: "20px",
                maxHeight: "500px",
              }}
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/500?text=Image+Not+Found")
              }
            />
          </Card>
        </Col>
        <Col md={6}>
          <div className="p-4">
            <h1
              className="fw-bold mb-2"
              style={{ color: "#2c3e50", fontSize: "2.5rem" }}
            >
              {product.title}
            </h1>
            <Badge
              bg="success"
              className="mb-3 p-2"
              style={{ fontSize: "1rem" }}
            >
              {product.category}
            </Badge>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              {product.description}
            </p>
            <h2
              className="fw-bold text-success mb-4"
              style={{ fontSize: "2rem" }}
            >
              ₹{product.price}
            </h2>

            <div className="d-flex align-items-center mb-4">
              <div className="d-flex gap-1 me-3">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar
                    key={i}
                    color={i < Math.round(averageRating) ? "gold" : "#ccc"}
                    size={24}
                  />
                ))}
              </div>
              <span className="text-muted">
                {averageRating} / 5 ({totalReviews} reviews)
              </span>
            </div>

            <Button
              size="lg"
              className="w-100 mb-3"
              style={{
                background: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1.5rem",
                transition: "all 0.3s ease",
                fontWeight: "500",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #2c2c4a 0%, #24345c 100%)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)")
              }
            >
              Add to Cart
            </Button>
            <Button
              size="lg"
              className="w-100"
              style={{
                background: "transparent",
                border:
                  "2px solid linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                color: "black",
                padding: "0.5rem 1.5rem",
                transition: "all 0.3s ease",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #1a1a2e 0%, #24345c 100%)";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "black";
              }}
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>

      {/* Review Form */}
      <div className="mt-5">
        <Card
          className="border-0 shadow-sm p-4"
          style={{ borderRadius: "15px" }}
        >
          <h3
            className="fw-bold mb-4"
            style={{
              fontSize: "1.5rem",
              color: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
            }}
          >
            Leave a Review
          </h3>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500", color: "#2c3e50" }}>
                Your Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={reviewer}
                onChange={(e) => setReviewer(e.target.value)}
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  borderColor: "#ddd",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500", color: "#2c3e50" }}>
                Rating
              </Form.Label>
              <div className="d-flex gap-2">
                {[...Array(5)].map((_, i) => {
                  const currentRating = i + 1;
                  return (
                    <span
                      key={i}
                      onClick={() => setRating(currentRating)}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                      style={{ cursor: "pointer", fontSize: "28px" }}
                    >
                      {currentRating <= (hover || rating) ? (
                        <IoIosStar color="gold" />
                      ) : (
                        <IoIosStarOutline color="#ccc" />
                      )}
                    </span>
                  );
                })}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500", color: "#2c3e50" }}>
                Review
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  borderColor: "#ddd",
                  resize: "vertical",
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
                border: "none",
                color: "#fff",
                padding: "10px 20px",
                transition: "all 0.3s ease",
                fontWeight: "500",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #2c2c4a 0%, #24345c 100%)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)")
              }
            >
              Submit Review
            </Button>
          </Form>
        </Card>
      </div>

      {/* Review List */}
      {reviews.length > 0 && (
        <div className="mt-5">
          <Card
            className="border-0 shadow-sm p-4"
            style={{ borderRadius: "15px" }}
          >
            <h3
              className="fw-bold mb-3"
              style={{
                fontSize: "1.5rem",
                color: "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)",
              }}
            >
              Customer Reviews
            </h3>
            <p className="text-muted mb-4">
              {totalReviews} review{totalReviews !== 1 ? "s" : ""} | Average
              Rating: <strong>{averageRating}/5</strong>
            </p>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-bottom py-3 d-flex justify-content-between align-items-start"
              >
                <div>
                  <strong
                    className="d-block mb-1"
                    style={{ color: "#2c3e50", fontSize: "1.1rem" }}
                  >
                    {review.reviewer}
                  </strong>
                  <div className="d-flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) =>
                      i < review.rating ? (
                        <IoIosStar key={i} color="gold" size={20} />
                      ) : (
                        <IoIosStarOutline key={i} color="#ccc" size={20} />
                      )
                    )}
                  </div>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "1rem", lineHeight: "1.5" }}
                  >
                    {review.text}
                  </p>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDeleteReview(review.id)}
                  style={{
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    padding: "6px 12px",
                  }}
                >
                  Delete
                </Button>
              </div>
            ))}
          </Card>
        </div>
      )}
    </Container>
  );
}

export default SingleProduct;
