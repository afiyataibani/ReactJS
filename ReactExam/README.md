
<body>

  <h1>📋 Todo Task Manager</h1>
  <p>A simple and elegant task management app built using <strong>React</strong>, <strong>Bootstrap</strong>, and <strong>JSON Server</strong> for mock backend functionality.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Add new tasks with description, username, date, and category</li>
    <li>Mark tasks as completed</li>
    <li>Delete tasks</li>
    <li>Filter tasks by search</li>
    <li>Sort tasks by username, task name, or date</li>
    <li>Pagination (2 tasks per page)</li>
    <li>Gradient-based modern UI with category color indicators</li>
  </ul>

  <h2>📦 Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>Axios</li>
    <li>Bootstrap 5</li>
    <li>Font Awesome</li>
    <li>JSON Server</li>
  </ul>

  <h2>🛠️ Installation & Setup</h2>
  <pre><code>
# 1. Clone the repository
git clone https://github.com/yourusername/todo-task-manager.git
cd todo-task-manager

# 2. Install dependencies
npm install

# 3. Start the mock backend server (JSON Server)
npx json-server --watch db.json --port 3000

# 4. Start the React development server
npm start
  </code></pre>

  <h2>📁 File Structure</h2>
  <ul>
    <li><code>Todo.jsx</code> - Main component with UI and functionality</li>
    <li><code>db.json</code> - JSON Server database file</li>
    <li><code>index.js</code> - Entry point for React</li>
  </ul>

  <h2>🗃️ JSON Server Sample (db.json)</h2>
  <pre><code>
{
  "tasks": [
    {
      "id": 1,
      "username": "John",
      "task": "Buy groceries",
      "date": "2025-04-21",
      "status": 0,
      "task_type": "personal"
    }
  ]
}
  </code></pre>

  <h2>✨ Styling & UI</h2>
  <ul>
    <li>Modern card-based layout</li>
    <li>Gradient backgrounds</li>
    <li>Responsive and clean design</li>
    <li>Icons from Font Awesome</li>
  </ul>

  <h2>📬 API Endpoints</h2>
  <ul>
    <li><code>GET /tasks</code> - Get all tasks</li>
    <li><code>POST /tasks</code> - Add a new task</li>
    <li><code>PATCH /tasks/:id</code> - Update task status</li>
    <li><code>DELETE /tasks/:id</code> - Delete a task</li>
  </ul>

  <h2>📌 Notes</h2>
  <ul>
    <li>Ensure JSON Server is running on <code>http://localhost:3000</code></li>
    <li>All tasks require a username, task description (min 3 chars), and a valid date</li>
    <li>Uses local state management and controlled inputs</li>
  </ul>

  <h2>📃 License</h2>
  <p>This project is open-source and available under the MIT License.</p>

</body>