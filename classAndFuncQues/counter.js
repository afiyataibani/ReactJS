// 4. Counter with Reset (Increment and Reset):
// Problem: Create a simple counter with buttons to increment the value and reset it to zero.
// Real-Life Example: A counter in an app that allows users to increase the count and reset it when needed.

function counter() {
  let count = 0;

  const render = () => {
      const counterDiv = document.getElementById("counter");
      counterDiv.innerHTML = "";

      const heading = document.createElement("h1");
      heading.textContent = "4. Counter and Rest";
      heading.style.textDecoration = "underline";

      const displayCounter = document.createElement("h2");
      displayCounter.textContent = `Count: ${count}`;

      const button = document.createElement("button");
      button.textContent = "Increment";
      button.onclick = () => {
          count++;
          render();
      };

      const reset = document.createElement("button");
      reset.textContent = "Reset";
      reset.onclick = () => {
          count = 0;
          render();
      };

      counterDiv.appendChild(heading);
      counterDiv.appendChild(displayCounter);
      counterDiv.appendChild(button);
      counterDiv.appendChild(reset);
  };

  render();
}

counter();
