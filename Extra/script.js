// Counter
function Counter() {
    let count = 0;
  
    const render = () => {
      const counterDiv = document.getElementById("counter");
      counterDiv.innerHTML = ""; 
  
      const head = document.createElement("h1");
      head.textContent = "Counter";
      head.style.textDecoration = "underline";
  
      const displayCounter = document.createElement("h2");
      displayCounter.textContent = `Count: ${count}`;
  
      const button = document.createElement("button");
      button.textContent = "Increment";
      button.onclick = () => {
        count++;
        render();
      };
  
      counterDiv.appendChild(head);
      counterDiv.appendChild(displayCounter);
      counterDiv.appendChild(button);
    };
  
    render();
  }
  
  // Form
  function Form() {
    const formDiv = document.getElementById("form");
  
    const head = document.createElement("h1");
    head.textContent = "Form";
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
  
    const display = document.createElement("h3");
    display.textContent = "You have typed: ";
  
    formElement.appendChild(input);
    formElement.appendChild(display);
  
    formDiv.appendChild(head);
    formDiv.appendChild(formElement);
  }
  
  // Add dedicated sections in the body
  document.body.innerHTML = `
    <div id="counter"></div>
    <div id="form"></div>
  `;
  
  // Initialize components
  Counter();
  Form();
  