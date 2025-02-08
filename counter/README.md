<h1>Counter App - README</h1>

<h2>Overview</h2>
    <p>This is a simple counter application built with React. It allows users to increment, decrement, and reset a counter.</p>

<h2>Features</h2>
    <ul>
        <li>Increment the counter by 1.</li>
        <li>Decrement the counter by 1 (disabled when counter is at 0).</li>
        <li>Reset the counter to 0.</li>
        <li>Styled using inline CSS for a clean UI.</li>
    </ul>

<h2>Installation</h2>
    <p>To run this project locally, follow these steps:</p>

<h3>1. Clone the repository</h3>
    <pre><code>git clone https://github.com/your-repo/counter-app.git</code></pre>

<h3>2. Navigate to the project folder</h3>
    <pre><code>cd counter-app</code></pre>

<h3>3. Install dependencies</h3>
    <pre><code>npm install</code></pre>

<h3>4. Start the development server</h3>
    <pre><code>npm start</code></pre>
    <p>The application will be available at <code>http://localhost:3000</code>.</p>

<h2>Project Structure</h2>
    <pre><code>
/counter-app
│── /src
│   │── /components
│   │   ├── Counter.js  (Counter component)
│   │── App.js (Main application file)
│   │── index.js (Entry point)
│── package.json (Project dependencies and scripts)
│── README.html (This file)
    </code></pre>

<h2>Usage</h2>
    <p>Once the app is running:</p>
    <ul>
        <li>Click the <strong>Increment</strong> button to increase the counter.</li>
        <li>Click the <strong>Decrement</strong> button to decrease the counter (disabled at 0).</li>
        <li>Click the <strong>Reset</strong> button to reset the counter to 0.</li>
    </ul>

<h2>Technologies Used</h2>
    <ul>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS (Inline Styling)</li>
    </ul>

<h2>Customization</h2>
    <p>You can modify the styles inside the <code>Counter.js</code> component by changing the inline <code>const containerStyle</code>, <code>boxStyle</code>, and <code>buttonStyle</code>.</p>

<h2>License</h2>
    <p>This project is open-source and available under the MIT License.</p>
