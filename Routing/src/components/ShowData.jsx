import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowData() {
  let [stuData, setStuData] = useState([]);
  let [search, setSearch] = useState(null);
  let [perPage, setPerPage] = useState(3);
  let [currentPage, setCurrentPage] = useState(1);
  let [pageNo, setPageNo] = useState([]);

  useEffect(() => {
    let getData = () => {
      let getStudentData = JSON.parse(localStorage.getItem("students")) || [];
      let totalPages = Math.ceil(getStudentData.length / perPage);
      let pages = Array.from({ length: totalPages }, (_, i) => i);
      setPageNo(pages);

      let endPos = currentPage * perPage;
      let firstPos = endPos - perPage;
      let newArray = getStudentData.slice(firstPos, endPos);
      setStuData(newArray || []);
    };
    getData();
  }, [currentPage, perPage]);

  let deleteStudent = (pos) => {
    let oldRecord = [...stuData];
    oldRecord.splice(pos, 1);
    setStuData(oldRecord);
    localStorage.setItem("students", JSON.stringify(oldRecord));
  };

  let sortingByName = (e) => {
    let allData = [...stuData];
    allData.sort((a, b) =>
      e.target.value === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setStuData(allData);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#F8F8FF", minHeight: "100vh" }}>
      <h1 className="text-center mt-4 mb-5" style={{ color: "#004085", fontWeight: "bold" }}>
        Show Data
      </h1>

      <div className="container">
        {/* Search & Sorting */}
        <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search by Name or Email"
            onChange={(e) => setSearch(e.target.value)}
            style={{ height: "45px" }}
          />
          <select className="form-select w-25" onChange={sortingByName} style={{ height: "45px" }}>
            <option value="">--Select Sorting--</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Data Table */}
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-primary">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Password</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Hobby</th>
              <th className="p-3">City</th>
              <th className="p-3">Online Image</th>
              <th className="p-3">Upload Image</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {stuData
              .filter((v) => !search || v.name.includes(search) || v.email.includes(search))
              .map((v, i) => (
                <tr key={i}>
                  <td className="p-4">{v.name}</td>
                  <td className="p-4">{v.email}</td>
                  <td className="p-4">{v.password}</td>
                  <td className="p-4">{v.gender}</td>
                  <td className="p-4">{v.hobby.toString()}</td>
                  <td className="p-4">{v.city}</td>
                  <td className="p-4">
                    {v.image && <img src={v.image} alt="Online" height="70" className="rounded shadow-sm" />}
                  </td>
                  <td className="p-4">
                    {v.newImage && <img src={v.newImage} alt="Upload" height="70" className="rounded shadow-sm" />}
                  </td>
                  <td className="p-4">
                    <button className="btn btn-danger btn-sm me-2" onClick={() => deleteStudent(i)}>
                      Delete
                    </button>
                    <Link to={`/updateData/${i}`} className="btn btn-primary btn-sm">
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          {pageNo.map((v, i) => (
            <button
              key={i}
              className={`btn mx-1 ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentPage(i + 1)}
              style={{ width: "40px", height: "40px", fontSize: "16px", fontWeight: "bold" }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowData;
