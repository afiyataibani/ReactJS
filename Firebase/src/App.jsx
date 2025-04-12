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

function App() {
  let [emp, setEmp] = useState([]);
  let [employee, setEmployee] = useState({
    hobbies: [],
  });
  let [empId, setEmpId] = useState(0);

  useEffect(() => {
    allData();
  }, [setEmp]);

  let allData = async () => {
    let allRecords = await getDocs(collection(getFire, "employees"));
    let newArray = [];
    allRecords.forEach((doc) => {
      let obj = { ...doc.data(), ["id"]: doc.id };
      newArray.push(obj);
    });
    setEmp(newArray);
  };

  let deleteEmp = async (id) => {
    await deleteDoc(doc(getFire, "employees", id));
    allData();
  };

  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

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

  let submitData = async (e) => {
    e.preventDefault();
    if (empId) {
      await updateDoc(doc(getFire, "employees", empId), employee);
    } else {
      await addDoc(collection(getFire, "employees"), employee);
    }
    allData();
    setEmpId(0);
    setEmployee({ hobbies: [] });
  };

  let updateEmp = async (id) => {
    let singleEmp = await getDoc(doc(getFire, "employees", id));
    setEmployee(singleEmp.data());
    setEmpId(id);
  };

  return (
    <>
      <h1>FireBase</h1>

      <form action="post" onSubmit={submitData}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Enter Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={getInput}
                  value={employee.name || ""}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Enter Age</td>
              <td>
                <input
                  type="number"
                  name="age"
                  onChange={getInput}
                  value={employee.age || ""}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Enter Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  onChange={getInput}
                  value={employee.email || ""}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Enter Salary</td>
              <td>
                <input
                  type="number"
                  name="salary"
                  onChange={getInput}
                  value={employee.salary || ""}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Designation</td>
              <td>
                <select
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
              </td>
            </tr>

            <tr>
              <td>Gender</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={getInput}
                    checked={employee.gender === "Male"}
                    required
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={getInput}
                    checked={employee.gender === "Female"}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={getInput}
                    checked={employee.gender === "Other"}
                  />{" "}
                  Other
                </label>
              </td>
            </tr>

            <tr>
              <td>Hobbies</td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="Reading"
                    onChange={getInput}
                    checked={employee.hobbies?.includes("Reading")}
                  />{" "}
                  Reading
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="Traveling"
                    onChange={getInput}
                    checked={employee.hobbies?.includes("Traveling")}
                  />{" "}
                  Traveling
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="Gaming"
                    onChange={getInput}
                    checked={employee.hobbies?.includes("Gaming")}
                  />{" "}
                  Gaming
                </label>
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="center">
                <input
                  type="submit"
                  name="submit"
                  value={empId ? "Edit" : "Submit"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Salary</td>
            <td>Designation</td>
            <td>Gender</td>
            <td>Hobbies</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {emp.map((v, i) => {
            return (
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
                    onClick={() => deleteEmp(v.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </button>
                  <button onClick={() => updateEmp(v.id)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
