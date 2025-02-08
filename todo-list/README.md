<h1>Todo List App - README</h1>

<h2>Overview</h2>
    <p>This is a simple **React Todo List App** that allows users to add, delete, and mark tasks as completed.</p>

<h2>Features</h2>
    <ul>
        <li>Users can add tasks to the list.</li>
        <li>Users can mark tasks as completed using a checkbox.</li>
        <li>Users can delete tasks from the list.</li>
        <li>Simple and clean UI with modern styling.</li>
    </ul>

<h2>Installation</h2>
    <p>To run this project locally, follow these steps:</p>

<h3>1. Clone the repository</h3>
    <pre><code>git clone https://github.com/your-repo/todo-app.git</code></pre>

<h3>2. Navigate to the project folder</h3>
    <pre><code>cd todo-app</code></pre>

<h3>3. Install dependencies</h3>
    <pre><code>npm install</code></pre>

<h3>4. Start the development server</h3>
    <pre><code>npm run dev</code></pre>
    <p>The application will be available at <code>http://localhost:5173</code> (for Vite projects).</p>

<h2>Project Structure</h2>
    <pre><code>
/todo-app
│── /src
│   │── /components
│   │   ├── Todo.js  (Todo component)
│   │── App.js (Main application file)
│   │── index.js (Entry point)
│── package.json (Project dependencies and scripts)
│── README.html (This file)
    </code></pre>

<h2>Usage</h2>
    <p>Once the app is running:</p>
    <ul>
        <li>Type a task in the input box.</li>
        <li>Click the <strong>Add</strong> button to add the task to the list.</li>
        <li>Click the checkbox to mark the task as completed.</li>
        <li>Click the <strong>Delete</strong> button to remove a task from the list.</li>
    </ul>

<h2>Code Explanation</h2>
    
<h3>1. State Management</h3>
    <p>The component uses <code>useState</code> to manage tasks.</p>
    <pre><code>
const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);
    </code></pre>

<h3>2. Adding a Task</h3>
    <p>When a user enters a task and clicks "Add," it gets stored in the <code>tasks</code> state.</p>
    <pre><code>
const addTask = () => {
    if (task.trim() !== "") {
        setTasks([...tasks, { task: task, complete: false }]);
        setTask("");
    }
};
    </code></pre>

<h3>3. Marking a Task as Completed</h3>
    <p>Tasks are toggled between completed and not completed using a checkbox.</p>
    <pre><code>
const toggleTask = (index) => {
    const updatedTask = tasks.map(
        (t, i) => (i === index ? { ...t, completed: !t.completed } : t)
    );
    setTasks(updatedTask);
};
    </code></pre>

<h3>4. Deleting a Task</h3>
    <p>Tasks can be removed from the list by clicking the delete button.</p>
    <pre><code>
const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
};
    </code></pre>

<h2>Technologies Used</h2>
    <ul>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>Vite (for faster development)</li>
        <li>CSS (Inline Styling)</li>
    </ul>

<h2>Customization</h2>
    <p>You can modify the styles inside the <code>Todo.js</code> component by changing the inline <code>div</code> and <code>button</code> styles.</p>

<h2>License</h2>
    <p>This project is open-source and available under the MIT License.</p>
