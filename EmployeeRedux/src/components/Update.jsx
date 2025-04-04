import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../redux/actions";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Image,
} from "react-bootstrap";

function Update() {
  const { id } = useParams();
  const empList = useSelector((state) => state.employee || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    email: "",
    hobbies: [],
    city: "",
    password: "",
    image: "",
    role: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const empIndex = parseInt(id, 10);
    if (empList && empList.length > empIndex && empIndex >= 0) {
      const selectedEmployee = empList[empIndex];
      setEmployee({
        ...selectedEmployee,
        hobbies: Array.isArray(selectedEmployee.hobbies)
          ? [...selectedEmployee.hobbies]
          : [],
      });
    } else {
      setError("Employee not found");
      navigate("/");
    }
  }, [empList, id, navigate]);

  const getInput = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    setError("");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setEmployee((prev) => ({ ...prev, image: reader.result }));
      };
      setError("");
    }
  };

  const handleHobbies = (e) => {
    const { value, checked } = e.target;
    setEmployee((prev) => ({
      ...prev,
      hobbies: checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((h) => h !== value),
    }));
    setError("");
  };

  const updateData = (e) => {
    e.preventDefault();
    if (employee.age < 18 || employee.age > 100) {
      setError("Age must be between 18 and 100");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!employee.city) {
      setError("Please select a city");
      return;
    }
    if (employee.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!employee.role) {
      setError("Please select a role");
      return;
    }
    if (!employee.image) {
      setError("Please add an image");
      return;
    }
    if (employee.hobbies.length === 0) {
      setError("Please select at least one hobby");
      return;
    }

    dispatch(
      updateEmployee({ id: parseInt(id, 10), updatedEmployee: employee })
    );
    navigate("/");
  };

  const hobbyOptions = ["Music", "Reading", "Coding", "Dancing"];

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center  bg-light"
      style={{ width: "100vw", height: "92vh", overflow: "hidden" }}
    >
      <Card className="w-100 shadow-lg border-0" style={{ maxWidth: "550px" }}>
        <Card.Body className="p-4">
          <h3 className="text-center mb-4 fw-bold" style={{ color: "#004085" }}>
            Update Employee
          </h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={updateData}>
            <Row className="g-3">
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={getInput}
                    required
                    placeholder="Enter full name"
                    className="border-primary-subtle"
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={getInput}
                    required
                    placeholder="Enter email address"
                    className="border-primary-subtle"
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={employee.password}
                    onChange={getInput}
                    required
                    placeholder="Enter password"
                    className="border-primary-subtle"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={employee.age}
                    onChange={getInput}
                    min="18"
                    max="100"
                    required
                    placeholder="Enter age"
                    className="border-primary-subtle"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">City</Form.Label>
                  <Form.Select
                    name="city"
                    value={employee.city}
                    onChange={getInput}
                    required
                    className="border-primary-subtle"
                  >
                    <option value="">Select City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">Role</Form.Label>
                  <Form.Select
                    name="role"
                    value={employee.role}
                    onChange={getInput}
                    required
                    className="border-primary-subtle"
                  >
                    <option value="">Select Role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    <option value="Analyst">Analyst</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">
                    Profile Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="border-primary-subtle"
                  />
                  {employee.image && (
                    <div className="mt-3 text-center">
                      <Image
                        src={employee.image}
                        alt="Preview"
                        roundedCircle
                        className="shadow-sm"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          border: "2px solid #0d6efd",
                        }}
                      />
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-medium text-muted">
                    Hobbies
                  </Form.Label>
                  <Row className="g-2">
                    {hobbyOptions.map((hobby) => (
                      <Col xs={6} key={hobby}>
                        <Form.Check
                          type="checkbox"
                          label={hobby}
                          value={hobby}
                          checked={employee.hobbies.includes(hobby)}
                          onChange={handleHobbies}
                          className="text-dark"
                        />
                      </Col>
                    ))}
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-4 fw-semibold"
              size="lg"
              style={{ backgroundColor: "#004085" }}
            >
              Update Employee
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Update;
