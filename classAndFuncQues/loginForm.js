// 2. Simple Login Form (Form Validation):
// Problem: Create a login form with email and password fields, and validate the email format before allowing submission.
// Real-Life Example: You’re making a login page where users must enter a valid email address and password to log in.
// Solution: On form submission, validate that the email has an "@" symbol and the password is at least 6 characters long. Show an error message if the validation fails.

class LoginForm {
    constructor() {
        this.container = document.getElementById("login-form");
        this.render();
    }

    render() {
        this.container.innerHTML = "";

        const form = document.createElement("form");

        const heading = document.createElement("h1");
        heading.textContent = "2. Login Form (Validation)";
        heading.style.textDecoration = "underline";

        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Email: ";
        emailLabel.style.fontSize = "22px";  
        emailLabel.style.fontWeight = "bold"; 
        
        const emailInput = document.createElement("input");
        emailInput.id = "email";
        emailInput.placeholder = "Enter your email";

        const passwordLabel = document.createElement("label");
        passwordLabel.textContent = "Password: ";
        passwordLabel.style.fontSize = "22px";  
        passwordLabel.style.fontWeight = "bold"; 
        
        const passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.id = "password";
        passwordInput.placeholder = "Enter your password";

        const submitButton = document.createElement("button");
        submitButton.textContent = "Login";
        submitButton.type = "submit";

        form.appendChild(heading);
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));

        form.appendChild(passwordLabel);
        form.appendChild(passwordInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));

        form.appendChild(submitButton);

        this.container.appendChild(form);

        form.onsubmit = (event) => this.handleSubmit(event, emailInput, passwordInput);
    }

    handleSubmit(event, emailInput, passwordInput) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;
        let error = "";

        if (!email.includes("@")) {
            error = "Please enter a valid email address.";
        } else if (password.length < 6) {
            error = "Password must be at least 6 characters long.";
        }

        if (error) {
            alert(error);
        } else {
            alert("Login successful");
        }
    }
}

new LoginForm();
