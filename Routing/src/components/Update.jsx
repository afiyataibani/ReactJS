import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Update() {
  let data = useParams();
  let navigate = useNavigate();
  let [student, setStudent] = useState({});
  let [hobby, setHobby] = useState([]);
  let [city] = useState([
    "Surat",
    "Bhavnagar",
    "Ahemdabad",
    "Baroda",
    "Mumbai",
  ]);

  useEffect(() => {
    let studentData = JSON.parse(localStorage.getItem("students")) || [];
    setStudent(studentData[data.index]);
    setHobby(studentData[data.index]["hobby"]);
  }, [setStudent]);

  let getInput = (e) => {
    let { name, value, checked, type } = e.target;
    let updatedHobby = [...hobby];

    if (name === "hobby") {
      if (checked) {
        updatedHobby.push(value);
      } else {
        updatedHobby = updatedHobby.filter((item) => item !== value);
      }
      setHobby(updatedHobby);
      setStudent({ ...student, hobby: updatedHobby });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  let submitData = (e) => {
    e.preventDefault();
    let studentData = JSON.parse(localStorage.getItem("students"));
    studentData[data.index] = student;
    localStorage.setItem("students", JSON.stringify(studentData));
    navigate("/show");
  };

  return (
    <div
      style={{
        backgroundColor: "#F8F8FF",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={submitData}
        style={{
          backgroundColor: "#f0f8ff",
          padding: "20px",
          borderRadius: "10px",
          width: "70%",
          maxWidth: "720px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        class="mt-4"
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#004085", fontWeight: "bold" }}
        >
          Update Student Details
        </h2>

        <div className="mb-3">
          <label className="form-label">Enter Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getInput}
            value={student.name || ""}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getInput}
            value={student.email || ""}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={getInput}
            value={student.password || ""}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Gender</label>
          <div className="d-flex gap-3">
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-check-input"
                onChange={getInput}
                checked={student.gender === "male"}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-check-input"
                onChange={getInput}
                checked={student.gender === "female"}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Hobby</label>
          <div className="d-flex gap-3">
            {["Music", "Reading", "Coding"].map((h) => (
              <div key={h} className="form-check">
                <input
                  type="checkbox"
                  name="hobby"
                  value={h}
                  className="form-check-input"
                  onChange={getInput}
                  checked={hobby.includes(h)}
                />
                <label className="form-check-label">{h}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Select City</label>
          <select
            name="city"
            className="form-select"
            onChange={getInput}
            value={student.city || ""}
          >
            <option value="">--Select City--</option>
            {city.map((v, i) => (
              <option key={i} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Online Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            onChange={getInput}
            value={student.image || ""}
          />
          {student.image && (
            <img
              src={student.image}
              alt=""
              height="100"
              className="mt-2 border rounded shadow-sm"
            />
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="text"
            name="newImage"
            className="form-control"
            onChange={getInput}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#004085",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
