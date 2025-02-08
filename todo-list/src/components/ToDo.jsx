import { useState } from "react";


const Todo = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { task: task, complete: false }])
            console.log(task)
            console.log(tasks)
            setTask("")
        }
    };

    const toggleTask = (index) => {
        const updatedTask = tasks.map(
            (t, i) => (i === index ? { ...t, completed: !t.completed } : t) // not operator (answer reverse)
        );
        setTasks(updatedTask);
    };


    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };


        
  return (
    <div style={{
      width: "400px",
      margin: "50px auto",
      padding: "20px",
      background: "rgb(217 219 243)",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      textAlign: "center",
    }}>
      <h2 style={{ color: "#333" }}>Todo List</h2>
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
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            background: "rgb(44 56 117)",
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
              background: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "5px",
            }}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(index)}
              style={{
                marginRight: "5px",
                cursor: "pointer",
              }}
            />

            <span>
              {t.task}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "#3F51B5",
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
    

}

export default Todo;
