import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/actions";
import { Container, Card, Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function View() {
  const emp = useSelector((state) => state.employee || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteEmp = (index) => {
    dispatch(deleteEmployee(index));
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center bg-light overflow-auto"
      style={{ minHeight: "90vh" }}
    >
      <Card className="w-75 shadow-lg border-0" style={{ maxWidth: "100%" }}>
        <Card.Body className="p-4">
          <h3 className="text-center mb-4 fw-bold" style={{ color: "#004085" }}>
            Employee List
          </h3>
          {Array.isArray(emp) && emp.length > 0 ? (
            <div className="table-responsive">
              <Table
                striped
                hover
                bordered
                className="table-align-middle text-center"
              >
                <thead className="table-primary">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Role</th>
                    <th>Hobbies</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {emp.map((v, i) => (
                    <tr key={i}>
                      <td className="align-middle">{v.name || "N/A"}</td>
                      <td className="align-middle">{v.email || "N/A"}</td>
                      <td className="align-middle">{v.age || "N/A"}</td>
                      <td className="align-middle">{v.city || "N/A"}</td>
                      <td className="align-middle">{v.role || "N/A"}</td>
                      <td className="align-middle">
                        {Array.isArray(v.hobbies)
                          ? v.hobbies.join(", ")
                          : "None"}
                      </td>
                      <td className="align-middle">
                        {v.image ? (
                          <Image
                            src={v.image}
                            className="d-block mx-auto shadow-sm"
                            style={{
                              width: "150px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <span className="text-muted">No Image</span>
                        )}
                      </td>
                      <td className="align-middle">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => navigate(`/update/${i}`)}
                          className="me-2"
                        >
                          Update
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => deleteEmp(i)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p className="text-center text-muted mt-3 fs-5">
              No employees added yet.
            </p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default View;
