// 3. Input Form (Track Input Changes):
// Problem: Create a form with a single input field where the value is displayed below the input as the user types.
// Real-Life Example: A live preview feature where the text typed into an input field is displayed below the field.

function Form() {
    const formDiv = document.getElementById("form");

    const head = document.createElement("h1");
    head.textContent = "3. Dynamic Form";
    head.style.textDecoration = "underline";

    let inputValue = "";

    const handleInput = (event) => {
        inputValue = event.target.value;
        display.textContent = `You have typed: ${inputValue}`;
    };

    const formElement = document.createElement("form");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Anything";
    input.addEventListener("input", handleInput);

    const display = document.createElement("h2");
    display.textContent = "You have typed: ";

    formElement.appendChild(input);
    formElement.appendChild(display);

    formDiv.appendChild(head);
    formDiv.appendChild(formElement);
}

Form();
