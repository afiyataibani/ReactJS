import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [userName, setUserName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [taskCategory, setTaskCategory] = useState("office");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const loadTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setTaskList(response.data);
    } catch (error) {
      setErrorMessage("Failed to load tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    let tasks = [...taskList];

    // Search filter
    if (searchTerm.trim()) {
      tasks = tasks.filter((task) =>
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    tasks.sort((a, b) => {
      if (sortOption === "username")
        return a.username.localeCompare(b.username);
      if (sortOption === "task") return a.task.localeCompare(b.task);
      return new Date(b.date) - new Date(a.date);
    });

    setFilteredTasks(tasks);
    setCurrentPage(1); // Reset page on filter change
  }, [taskList, searchTerm, sortOption]);

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (newTask.length < 3) {
      setErrorMessage("Task must be at least 3 characters long");
      return;
    }
    if (!userName.trim()) {
      setErrorMessage("Username is required");
      return;
    }
    if (!taskDate) {
      setErrorMessage("Date is required");
      return;
    }

    const taskData = {
      username: userName,
      task: newTask,
      date: taskDate,
      status: isCompleted ? 1 : 0,
      task_type: taskCategory,
    };

    try {
      await axios.post("http://localhost:3000/tasks", taskData);
      setNewTask("");
      setUserName("");
      setTaskDate("");
      setIsCompleted(false);
      setTaskCategory("office");
      loadTasks();
    } catch (error) {
      setErrorMessage("Failed to add task");
    }
  };

  const toggleTaskStatus = async (taskId, currentStatus) => {
    const updatedStatus = currentStatus === 1 ? 0 : 1;
    try {
      await axios.patch(`http://localhost:3000/tasks/${taskId}`, {
        status: updatedStatus,
      });
      loadTasks();
    } catch (error) {
      setErrorMessage("Failed to update status");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      loadTasks();
    } catch (error) {
      setErrorMessage("Failed to delete task");
    }
  };

  const getCategoryClass = (category) => {
    switch (category) {
      case "office":
        return "border-start border-4 border-danger";
      case "personal":
        return "border-start border-4 border-warning";
      case "family":
        return "border-start border-4 border-success";
      case "friends":
        return "border-start border-4 border-info";
      default:
        return "border-start border-4 border-secondary";
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(120deg, #F0F4FF, #E0E8FF)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Form Card */}
      <div className="d-flex justify-content-center">
        <div
          className="card p-4 shadow-lg mb-5"
          style={{
            width: "100%",
            maxWidth: "650px",
            backgroundColor: "#ffffffee",
            borderRadius: "1rem",
          }}
        >
          <h2 className="text-center fw-bold mb-4" style={{ color: "#1E2B73" }}>
            Todo Task Manager
          </h2>

          <form onSubmit={handleTaskSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control rounded-3"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="📝 Task description"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control rounded-3"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="👤 Username"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control rounded-3"
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select
                  className="form-select rounded-3"
                  value={taskCategory}
                  onChange={(e) => setTaskCategory(e.target.value)}
                >
                  <option value="office">🏢 Office</option>
                  <option value="personal">🧍 Personal</option>
                  <option value="family">👨‍👩‍👧‍👦 Family</option>
                  <option value="friends">👫 Friends</option>
                  <option value="other">✨ Other</option>
                </select>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                    id="statusCheck"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="statusCheck"
                  >
                    Completed
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn mt-4 w-100 text-white fw-semibold"
              style={{
                background: "linear-gradient(to right, #4A55A2, #7895CB)",
                borderRadius: "1rem",
              }}
            >
              <i className="fa fa-plus me-2"></i> Add Task
            </button>
          </form>

          {errorMessage && (
            <div className="alert alert-danger text-center fw-semibold mt-3 shadow-sm">
              {errorMessage}
            </div>
          )}
        </div>
      </div>

      {/* Search & Sort Controls */}
      <div className="row justify-content-center mb-4 px-3">
        <div className="col-12" style={{ maxWidth: "650px" }}>
          <div className="row g-2">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="🔍 Search task"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <select
                className="form-select rounded-3"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="date">📅 Sort by Date</option>
                <option value="username">👤 Sort by Username</option>
                <option value="task">📝 Sort by Task</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="row justify-content-center px-3">
        <div className="col-12" style={{ maxWidth: "650px" }}>
          <div className="row g-3">
            {currentTasks.map((taskItem) => (
              <div key={taskItem.id} className="col-6">
                <div
                  className={`card shadow-sm ${getCategoryClass(
                    taskItem.task_type
                  )} rounded-4 position-relative`}
                  style={{
                    background: "#fefefe",
                    maxWidth: "300px",
                    width: "100%",
                  }}
                >
                  <div className="card-body py-2 px-3">
                    <button
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle"
                      title="Delete Task"
                      onClick={() => deleteTask(taskItem.id)}
                      style={{
                        width: "25px",
                        height: "25px",
                        padding: "0",
                        lineHeight: "25px",
                        fontSize: "0.8rem",
                      }}
                    >
                      ×
                    </button>
                    <h5
                      className="card-title fw-bold mb-1"
                      style={{
                        fontSize: "1rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {taskItem.task}
                    </h5>
                    <p className="mb-1" style={{ fontSize: "0.85rem" }}>
                      <strong>👤 User:</strong> {taskItem.username}
                    </p>
                    <p className="mb-1" style={{ fontSize: "0.85rem" }}>
                      <strong>📅 Date:</strong> {taskItem.date}
                    </p>
                    <p className="mb-1" style={{ fontSize: "0.85rem" }}>
                      <strong>📌 Type:</strong> {taskItem.task_type}
                    </p>
                    <div className="form-check mt-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={taskItem.status === 1}
                        onChange={() =>
                          toggleTaskStatus(taskItem.id, taskItem.status)
                        }
                        id={`status-${taskItem.id}`}
                        style={{ transform: "scale(0.9)" }}
                      />
                      <label
                        className="form-check-label ms-1"
                        style={{ fontSize: "0.85rem" }}
                        htmlFor={`status-${taskItem.id}`}
                      >
                        {taskItem.status === 1 ? "✅ Completed" : "⏳ Pending"}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`btn mx-1 px-3 py-1 fw-semibold text-white ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                style={{
                  background:
                    currentPage === index + 1
                      ? "linear-gradient(to right, #4A55A2, #7895CB)"
                      : "#ced4da",
                  border: "none",
                  borderRadius: "1rem",
                  color: currentPage === index + 1 ? "#fff" : "#333",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
