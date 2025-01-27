// 2. Simple Toggle (Button State):
// Problem: Create a button that toggles its text between "ON" and "OFF" when clicked.
// Real-Life Example: A button that changes its label between "Start" and "Stop" depending on the state.

function ToggleButton() {
    const toggleDiv = document.getElementById("toggle-button");
    const heading = document.createElement("h1")
    heading.textContent = "2. Toggle-Button (On/Off)"
    heading.style.textDecoration = "underline"

    const button = document.createElement("button");
    button.textContent = "OFF"; 

    button.onclick = () => {
        if (button.textContent === "OFF") {
            button.textContent = "ON";
        } else {
            button.textContent = "OFF";
        }
    };

    toggleDiv.appendChild(heading)
    toggleDiv.appendChild(button);
}

ToggleButton();
