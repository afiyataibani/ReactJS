import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ShowData() {
  let [stuData, setStuData] = useState([]);
  let [search, setSearch] = useState(null);
  let [perPage, setPerPage] = useState(2);
  let [currentPage, setCurrentPage] = useState(1);
  let [pageNo, setPageNo] = useState([]);

  useEffect(() => {
    let getData = () => {
      let getStudentData = JSON.parse(localStorage.getItem("students"));
      console.log(getStudentData);
      let totalPages = Math.ceil(getStudentData.length / perPage);
      let pages = [];
      for (var i = 0; i < totalPages; i++) {
        pages.push(i);
      }
      setPageNo(pages);

      let endPos = currentPage * perPage;
      let firstPos = endPos - perPage;
      let newArray = getStudentData.slice(firstPos, endPos);
      setStuData(newArray ? newArray : []);
    };
    getData();
  }, [setStuData, currentPage]);

  let deleteStudent = (pos) => {
    let oldRecord = [...stuData];
    oldRecord.splice(pos, 1);
    setStuData(oldRecord);
    localStorage.setItem("students", JSON.stringify(oldRecord));
  };

  let sortingByName = (e) => {
    let allData = [...stuData];
    if (e.target.value == "asc") {
      allData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      allData.sort((a, b) => b.name.localeCompare(a.name));
    }
    setStuData(allData);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Show Data</h1>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select name="sortingData" id="" onChange={(e) => sortingByName(e)}>
        <option value="">--Select Sorting--</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <table border="1" align="center">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Gender</td>
          <td>Hobby</td>
          <td>City</td>
          <td>Online Image</td>
          <td>Upload Image</td>
          <td>Action</td>
        </tr>
        {stuData
          .filter((v, i) => {
            if (search == null) {
              return v;
            } else if (v.name.includes(search)) {
              return v;
            } else if (v.email.includes(search)) {
              return v;
            }
          })
          .map((v, i) => {
            return (
              <tr>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.password}</td>
                <td>{v.gender}</td>
                <td>{v.hobby.toString()}</td>
                <td>{v.city}</td>
                <td>
                  <img src={v.image} alt="" height="100" />
                </td>
                <td>
                  <img src={v.newImage} alt="" height="100" />
                </td>
                <td>
                  <button onClick={() => deleteStudent(i)}>Delete</button>
                  <Link to={"/updateData/" + i}>Update</Link>
                </td>
              </tr>
            );
          })}
        <tr>
          <td colSpan={9}>
            {pageNo.map((v, i) => {
              return (
                <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ShowData;
