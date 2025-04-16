import { useEffect, useState } from "react";
import { getFire } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [emp, setEmp] = useState([]);
  let [employee, setEmployee] = useState({ hobbies: [] });
  let [empId, setEmpId] = useState(0);

  useEffect(() => {
    allData();
  }, []);

  const allData = async () => {
    const allRecords = await getDocs(collection(getFire, "employees"));
    const newArray = [];
    allRecords.forEach((doc) => {
      newArray.push({ ...doc.data(), id: doc.id });
    });
    setEmp(newArray);
  };

  const deleteEmp = async (id) => {
    await deleteDoc(doc(getFire, "employees", id));
    allData();
  };

  const updateEmp = async (id) => {
    const singleEmp = await getDoc(doc(getFire, "employees", id));
    setEmployee(singleEmp.data());
    setEmpId(id);
  };

  const getInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "hobbies") {
      let updatedHobbies = [...(employee.hobbies || [])];
      if (e.target.checked) {
        updatedHobbies.push(value);
      } else {
        updatedHobbies = updatedHobbies.filter((h) => h !== value);
      }
      setEmployee({ ...employee, hobbies: updatedHobbies });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (empId) {
      await updateDoc(doc(getFire, "employees", empId), employee);
    } else {
      await addDoc(collection(getFire, "employees"), employee);
    }
    allData();
    setEmployee({ hobbies: [] });
    setEmpId(0);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Employee Management</h2>

      {/* FORM */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">
          <form onSubmit={submitData}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={getInput}
                  value={employee.name || ""}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  onChange={getInput}
                  value={employee.age || ""}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={getInput}
                  value={employee.email || ""}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Salary</label>
                <input
                  type="number"
                  name="salary"
                  className="form-control"
                  onChange={getInput}
                  value={employee.salary || ""}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Designation</label>
                <select
                  className="form-select"
                  name="designation"
                  onChange={getInput}
                  value={employee.designation || ""}
                  required
                >
                  <option value="">--Select--</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label d-block">Gender</label>
                {["Male", "Female", "Other"].map((g) => (
                  <div className="form-check form-check-inline" key={g}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value={g}
                      onChange={getInput}
                      checked={employee.gender === g}
                      required
                    />
                    <label className="form-check-label">{g}</label>
                  </div>
                ))}
              </div>

              <div className="col-12">
                <label className="form-label d-block">Hobbies</label>
                {["Reading", "Traveling", "Gaming"].map((hobby) => (
                  <div className="form-check form-check-inline" key={hobby}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value={hobby}
                      onChange={getInput}
                      checked={employee.hobbies?.includes(hobby)}
                    />
                    <label className="form-check-label">{hobby}</label>
                  </div>
                ))}
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn px-5"
                  style={{
                    background: "linear-gradient(to right, #43cea2, #185a9d)",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {empId ? "Update" : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* TABLE */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="mb-4">Employee Records</h4>
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Hobbies</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {emp.length > 0 ? (
                  emp.map((v, i) => (
                    <tr key={v.id}>
                      <td>{i + 1}</td>
                      <td>{v.name}</td>
                      <td>{v.age}</td>
                      <td>{v.email}</td>
                      <td>{v.salary}</td>
                      <td>{v.designation}</td>
                      <td>{v.gender}</td>
                      <td>{(v.hobbies || []).join(", ")}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => updateEmp(v.id)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteEmp(v.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">No employee records found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
