// 5. Toggle Light/Dark Mode:
// Problem: Create a component that toggles between light and dark modes when a button is clicked.
// Real-Life Example: A webpage that changes from light to dark mode when a user clicks a button, similar to a dark mode feature on most websites.

class ToggleMode {
    constructor() {
        this.container = document.getElementById("toggle-mode");
        this.render();
    }

    render() {
        this.container.innerHTML = ""; 
        const heading = document.createElement("h1");
        heading.textContent = "5. Toggle Light/Dark Mode";
        heading.style.textDecoration = "underline";

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Switch to Dark Mode";
        toggleButton.onclick = () => this.toggleMode(toggleButton);

        this.applyLightMode();

        this.container.appendChild(heading);
        this.container.appendChild(toggleButton);
    }

    toggleMode(button) {
        
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            this.applyLightMode();
            button.textContent = "Switch to Dark Mode"; 
        } else {
            document.body.classList.add("dark-mode");
            this.applyDarkMode();
            button.textContent = "Switch to Light Mode"; 
        }
    }

    applyLightMode() {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    applyDarkMode() {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
    }
}

new ToggleMode();
