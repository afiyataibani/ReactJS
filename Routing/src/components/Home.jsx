import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  let [st, setSt] = useState({});
  let [stuData, setStudata] = useState([]);
  let [hobby, setHobby] = useState([]);
  let [city, setCity] = useState([
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

    if (name == "newImage") {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }

    let ho = [...hobby];

    if (name == "hobby") {
      if (e.target.checked) {
        ho.push(e.target.value);
      } else {
        ho = ho.filter((v, i) => v !== e.target.value);
      }
    }
    setHobby(ho);

    if (name == "hobby") {
      setSt({ ...st, ["hobby"]: ho });
    } else {
      setSt({ ...st, [name]: value });
    }
  };

  let submitData = (e) => {
    e.preventDefault();
    console.log(st);
    st.newImage = image;
    let record = [...stuData, st];
    setStudata(record);
    localStorage.setItem("students", JSON.stringify(record));
    console.log(record);
    setSt({ city: "", image: "", newImage: "" });
    setHobby([]);
    setImage(null);
    toast.success("Record Inserted Successfully");
  };

  return (
    <div>
      <h1 align="center">Home</h1>
      <form
        action=""
        method="post"
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <table border="1" align="center">
          <tr>
            <td>Enter Name</td>
            <td>
              <input
                type="text"
                name="name"
                onChange={(e) => getInput(e)}
                value={st.name ? st.name : " "}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Email</td>
            <td>
              <input
                type="text"
                name="email"
                onChange={(e) => getInput(e)}
                value={st.email ? st.email : " "}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Password</td>
            <td>
              <input
                type="text"
                name="password"
                onChange={(e) => getInput(e)}
                value={st.password ? st.password : " "}
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
                onChange={(e) => getInput(e)}
                checked={st.gender == "male" ? "checked" : ""}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => getInput(e)}
                checked={st.gender == "female" ? "checked" : ""}
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
                onChange={(e) => getInput(e)}
                checked={hobby.includes("Music") ? "checked" : ""}
              />
              Music
              <input
                type="checkbox"
                name="hobby"
                value="Reading"
                onChange={(e) => getInput(e)}
                checked={hobby.includes("Reading") ? "checked" : ""}
              />
              Reading
              <input
                type="checkbox"
                name="hobby"
                value="Coding"
                onChange={(e) => getInput(e)}
                checked={hobby.includes("Coding") ? "checked" : ""}
              />
              Coding
            </td>
          </tr>
          <tr>
            <td>Select City</td>
            <td>
              <select
                name="city"
                onChange={(e) => getInput(e)}
                value={st.city || ""}
              >
                <option value="">--Select City--</option>
                {city.map((v, i) => {
                  return <option value={v}>{v}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td>Online Image</td>
            <td>
              <input
                type="text"
                name="image"
                onChange={(e) => getInput(e)}
                value={st.image || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Upload Image</td>
            <td>
              <input
                type="file"
                name="newImage"
                onChange={(e) => getInput(e)}
              />
              <img src={image || ""} alt="" height="100" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="submit" />
            </td>
          </tr>
        </table>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Home;
