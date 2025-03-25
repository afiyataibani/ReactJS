import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  let data = useParams();
  let navigate = useNavigate();
  let [student, setStudent] = useState({});
  let [hobby, setHobby] = useState([]);
  let [city, setCity] = useState([
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
    <div>
      <h1 align="center">Update</h1>
      <form onSubmit={submitData}>
        <table border="1" align="center">
          <tbody>
            <tr>
              <td>Enter Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={student.name || ""}
                  onChange={getInput}
                />
              </td>
            </tr>
            <tr>
              <td>Enter Email</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={student.email || ""}
                  onChange={getInput}
                />
              </td>
            </tr>
            <tr>
              <td>Enter Password</td>
              <td>
                <input
                  type="text"
                  name="password"
                  value={student.password || ""}
                  onChange={getInput}
                />
              </td>
            </tr>
            <tr>
              <td>Select Gender</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={getInput}
                  checked={student.gender === "male"}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={getInput}
                  checked={student.gender === "female"}
                />
                Female
              </td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td>
                <input
                  type="checkbox"
                  name="hobby"
                  value="Music"
                  onChange={getInput}
                  checked={hobby.includes("Music")}
                />
                Music
                <input
                  type="checkbox"
                  name="hobby"
                  value="Reading"
                  onChange={getInput}
                  checked={hobby.includes("Reading")}
                />
                Reading
                <input
                  type="checkbox"
                  name="hobby"
                  value="Coding"
                  onChange={getInput}
                  checked={hobby.includes("Coding")}
                />
                Coding
              </td>
            </tr>
            <tr>
              <td>Select City</td>
              <td>
                <select name="city" onChange={(e) => getInput(e)}>
                  <option value="">--Select City--</option>
                  {city.map((v, i) => {
                    return (
                      <option
                        value={v}
                        selected={student.city === v ? "selected" : ""}
                      >
                        {v}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td>Online Image</td>
              <td>
                <input type="text" name="image" onChange={(e) => getInput(e)} />
                <img src={student.image} alt="" height="100" />
              </td>
            </tr>
            <tr>
              <td>Upload Image</td>
              <td>
                <input
                  type="text"
                  name="newImage"
                  onChange={(e) => getInput(e)}
                />
                <img src={student.image} alt="" height="100" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input type="submit" value="Edit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Update;
