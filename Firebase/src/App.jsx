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
  let [employee, setEmployee] = useState({});
  let [empId, setEmpId] = useState(0);

  useEffect(() => {
    allData();
  }, [setEmp]);

  let allData = async () => {
    let allRecords = await getDocs(collection(getFire, "employees"));
    let newArray = [];
    allRecords.forEach((doc) => {
      console.log(doc.id, doc.data());
      let obj = { ...doc.data(), ["id"]: doc.id };
      newArray.push(obj);
    });

    setEmp(newArray);
  };

  let deleteEmp = async (id) => {
    console.log(id);
    await deleteDoc(doc(getFire, "employees", id));
    allData();
  };

  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  let submitData = async (e) => {
    e.preventDefault();
    console.log(employee);
    if (empId) {
      await updateDoc(doc(getFire, "employees", empId), employee);
    } else {
      await addDoc(collection(getFire, "employees"), employee);
    }
    allData();
    setEmpId(0);
    setEmployee({});
  };

  let updateEmp = async (id) => {
    console.log(id);
    let singleEmp = await getDoc(doc(getFire, "employees", id));
    setEmployee(singleEmp.data());
    setEmpId(id);
  };

  return (
    <>
      <h1>FireBase</h1>

      <form action="post" onSubmit={(e) => submitData(e)}>
        <table border={1}>
          <tr>
            <td>Enter Name</td>
            <td>
              <input
                type="text"
                name="name"
                onChange={(e) => getInput(e)}
                value={employee.name ? employee.name : ""}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Age</td>
            <td>
              <input
                type="text"
                name="age"
                onChange={(e) => getInput(e)}
                value={employee.age ? employee.age : ""}
              />
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
        </table>
      </form>

      <br />
      <br />

      <table border={1}>
        <tr>
          <td>No</td>
          <td>Name</td>
          <td>Age</td>
          <td>Action</td>
        </tr>
        {emp.map((v, i) => {
          return (
            <tr>
              <td>{++i}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
              <td>
                <button onClick={() => deleteEmp(v.id)}>Delete</button>||
                <button onClick={() => updateEmp(v.id)}>Update</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
