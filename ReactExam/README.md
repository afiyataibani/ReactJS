![Screenshot 2025-04-21 152856](https://github.com/user-attachments/assets/34a22529-cedb-4281-8b3f-dcab46cf5a5d)
<body style="font-family: Arial, sans-serif; background: #F4F7FE; padding: 20px;">

  <h1 style="text-align: center; color: #4A55A2;">Todo Task Manager</h1>
  <p style="text-align: center; font-size: 1.2rem; color: #6A6A6A;">
    A simple React-based task manager app that allows you to manage your tasks efficiently. 
    The app lets you add tasks, categorize them, mark them as completed, and delete tasks.
  </p>

  <h2>Features</h2>
  <ul>
    <li>Add tasks with descriptions, dates, categories, and completion status.</li>
    <li>Choose categories for tasks such as Office, Personal, Family, Friends, or Others.</li>
    <li>Mark tasks as completed or pending with a simple toggle.</li>
    <li>Delete tasks as needed.</li>
    <li>Responsive design that works on both desktop and mobile devices.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>React</strong> - Frontend framework for building the user interface.</li>
    <li><strong>Axios</strong> - To make HTTP requests to the backend for task operations.</li>
    <li><strong>Bootstrap</strong> - For styling the application with responsive components.</li>
    <li><strong>Font Awesome</strong> - For adding icons (e.g., plus, checkmark, delete).</li>
  </ul>

  <h2>Setup Instructions</h2>
  <ol>
    <li>Clone the repository to your local machine:</li>
    <pre><code>git clone https://github.com/yourusername/todo-task-manager.git</code></pre>

    <li>Navigate to the project directory:</li>
    <pre><code>cd todo-task-manager</code></pre>

    <li>Install the dependencies using npm or yarn:</li>
    <pre><code>npm install</code></pre>
    <pre><code>yarn install</code></pre>

    <li>Start the development server:</li>
    <pre><code>npm start</code></pre>
    <pre><code>yarn start</code></pre>

    <li>Open your browser and visit <a href="http://localhost:3000">http://localhost:3000</a> to use the app.</li>
  </ol>

  <h2>App Functionality</h2>
  <p>Upon loading, the app fetches the task list from the backend and displays it in a card layout. Each task is categorized and has a checkbox to toggle between completed and pending status. You can add new tasks, specify their category, and set a due date. Completed tasks are marked with a checkmark, and pending tasks are shown with a clock icon.</p>

  <h2>API Endpoints</h2>
  <ul>
    <li><strong>GET /tasks</strong> - Fetches all tasks.</li>
    <li><strong>POST /tasks</strong> - Adds a new task.</li>
    <li><strong>PATCH /tasks/:id</strong> - Updates the completion status of a task.</li>
    <li><strong>DELETE /tasks/:id</strong> - Deletes a task by ID.</li>
  </ul>

  <h2>Contributing</h2>
  <p>If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request. We welcome all contributions!</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="#">LICENSE</a> file for details.</p>

</body>
