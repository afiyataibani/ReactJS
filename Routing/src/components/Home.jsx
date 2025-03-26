import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  let [st, setSt] = useState({});
  let [stuData, setStudata] = useState([]);
  let [hobby, setHobby] = useState([]);
  let [city] = useState([
    "Surat",
    "Bhavnagar",
    "Ahemdabad",
    "Baroda",
    "Mumbai",
  ]);
  let [image, setImage] = useState(null);

  useEffect(() => {
    const allrecord = JSON.parse(localStorage.getItem("students"));
    setStudata(allrecord);
  }, [setStudata]);

  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "newImage") {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    let ho = [...hobby];
    if (name === "hobby") {
      if (e.target.checked) ho.push(value);
      else ho = ho.filter((v) => v !== value);
    }
    setHobby(ho);
    setSt(name === "hobby" ? { ...st, hobby: ho } : { ...st, [name]: value });
  };

  let submitData = (e) => {
    e.preventDefault();
    st.newImage = image;
    let record = [...stuData, st];
    setStudata(record);
    localStorage.setItem("students", JSON.stringify(record));

    setSt({ city: "", image: "", newImage: "" });
    setHobby([]);
    setImage(null);
    toast.success("Record Inserted Successfully");
  };

  return (
    // #b3cee5
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
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#004085", fontWeight: "bold" }}
        >
          Student Registration
        </h2>

        <div className="mb-3">
          <label className="form-label">Enter Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getInput}
            value={st.name || ""}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getInput}
            value={st.email || ""}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={getInput}
            value={st.password || ""}
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
                checked={st.gender === "male"}
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
                checked={st.gender === "female"}
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
            value={st.city || ""}
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
            value={st.image || ""}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            name="newImage"
            className="form-control"
            onChange={getInput}
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-3 rounded border shadow-sm"
              height="100"
            />
          )}
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
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Home;
