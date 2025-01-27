// 4. Counter (Increment/Decrement):
// Problem: Create a simple counter that allows the user to increase or decrease a value.
// Real-Life Example: A simple counter to track the number of items in a cart, allowing users to increase or decrease the count.
// Solution: The component will have buttons for incrementing and decrementing the counter, and will store the current value.

class counterClass {
    constructor() {
        this.container = document.getElementById("counter-class");
        this.count = 0; 
        this.render();
    }

    render() {
        this.container.innerHTML = ""; 

        const heading = document.createElement("h1");
        heading.textContent = "4. Counter (Increment/Decrement)";
        heading.style.textDecoration = "underline";

        const displayCounter = document.createElement("h2");
        displayCounter.textContent = `Count: ${this.count}`;

        const incrementButton = document.createElement("button");
        incrementButton.textContent = "Increment";
        incrementButton.onclick = () => this.increment(displayCounter);

        const decrementButton = document.createElement("button");
        decrementButton.textContent = "Decrement";
        decrementButton.onclick = () => this.decrement(displayCounter);

        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset";
        resetButton.onclick = () => this.reset(displayCounter);

        this.container.appendChild(heading);
        this.container.appendChild(displayCounter);
        this.container.appendChild(incrementButton);
        this.container.appendChild(decrementButton);
        this.container.appendChild(resetButton);
    }

    increment(displayCounter) {
        this.count++;
        displayCounter.textContent = `Count: ${this.count}`;
    }

    decrement(displayCounter) {
        this.count--;
        displayCounter.textContent = `Count: ${this.count}`;
    }

    reset(displayCounter){
        this.count = 0;
        displayCounter.textContent = `Count: ${this.count}`;
    }
}


new counterClass();
