function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthMessage = document.getElementById("strengthMessage");

    // Define the strength levels
    const strengthLevels = [
        { regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/, message: "Strong", color: "green" },
        { regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])$/, message: "Medium", color: "orange" },
        { regex: /^(?=.*[a-z])(?=.*[A-Z])$/, message: "Weak", color: "red" }
    ];

    let message = "Too Short";
    let color = "red";

    if (password.length >= 8) {
        for (const level of strengthLevels) {
            if (level.regex.test(password)) {
                message = level.message;
                color = level.color;
                break;
            }
        }
    }

    // Update the strength message
    strengthMessage.textContent = `Password Strength: ${message}`;
    strengthMessage.style.color = color;
}

// Add an event listener to the input element
document.getElementById("password").addEventListener("input", checkPasswordStrength);