import { useState } from "react";

const ToDoList = ({ theme }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        background: theme === "light" ? "rgb(248, 249, 250)" : "#1E1E1E",
        borderRadius: "10px",
        boxShadow: theme === "light" ? "0 4px 8px rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.4) 0px 8px 16px",
        textAlign: "center",
        color: theme === "light" ? "#333" : "#EAEAEA",
      }}
    >
      <h2 style={{ color: theme === "light" ? "#1E40AF" : "#60A5FA", fontSize: "32px"}}>Todo List</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid",
            borderColor: theme === "light" ? "#ccc" : "#6B7280",
            background: theme === "light" ? "#fff" : "#374151",
            color: theme === "light" ? "#333" : "#EAEAEA",
            fontSize: "16px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            background: theme === "light" ? "rgb(44 56 117)" : "#3B82F6",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: theme === "light" ? "#fff" : "#2D3748",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "5px",
              color: theme === "light" ? "#333" : "#EAEAEA",
            }}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(index)}
              style={{ marginRight: "5px", cursor: "pointer" }}
            />
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
              {t.task}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "#EF4444",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
