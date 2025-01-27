// 3. Todo List (Add/Remove Items):
// Problem: Create a todo list where the user can add and remove tasks.
// Real-Life Example: A simple task manager where users can add tasks like "Buy groceries" and remove them once completed.

class TodoList {
    constructor() {
        this.container = document.getElementById("todo-list");
        this.tasks = [];
        this.render();
    }

    render() {
        this.container.innerHTML = ""; 

        const heading = document.createElement("h1");
        heading.textContent = "3. Todo List (Add/Remove Tasks)";
        heading.style.textDecoration = "underline";

        const taskInput = document.createElement("input");
        taskInput.placeholder = "Enter a task";
        taskInput.id = "task-input";

        const addButton = document.createElement("button");
        addButton.textContent = "Add Task";
        addButton.onclick = () => this.addTask(taskInput);

        const taskList = document.createElement("ul");
        taskList.id = "task-list";

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            taskItem.style.fontSize = "20px"
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.onclick = () => this.removeTask(index);
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
        });

        this.container.appendChild(heading);
        this.container.appendChild(taskInput);
        this.container.appendChild(addButton);
        this.container.appendChild(taskList);
    }

    addTask(taskInput) {
        const task = taskInput.value.trim();
        if (task) {
            this.tasks.push(task);
            taskInput.value = ""; 
            this.render(); 
        }
    }

    removeTask(index) {
        this.tasks.splice(index, 1); 
        this.render(); 
    }
}

new TodoList();
