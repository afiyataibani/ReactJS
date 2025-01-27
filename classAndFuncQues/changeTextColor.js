// 5. Change Text Color (Button Click Event):
// Problem: Create a button that changes the text color of a paragraph when clicked.
// Real-Life Example: A simple app where a button click changes the color of a text from black to red, blue, or green.

function ChangeTextColor() {
    const changeColor = document.getElementById('change-text-color');

    const heading = document.createElement("h1");
    heading.textContent = "5. Change Text Color";
    heading.style.textDecoration = "underline";

    const text = document.createElement('h3');
    text.innerHTML =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const red = document.createElement("button");
    red.textContent = "Red";
    red.onclick = () => {
        text.style.color = "red";
    };

    const blue = document.createElement("button");
    blue.textContent = "Blue";
    blue.onclick = () => {
        text.style.color = "blue";
    };

    const green = document.createElement("button");
    green.textContent = "Green";
    green.onclick = () => {
        text.style.color = "green";
    };

    changeColor.appendChild(heading);
    changeColor.appendChild(text);
    changeColor.appendChild(red);
    changeColor.appendChild(blue);
    changeColor.appendChild(green);
}

ChangeTextColor();
