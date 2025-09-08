

// ============================
// Event 1: Change Background Color
// ============================

document.getElementById("colorBtn").addEventListener("click", function() {
  const colors = ["#f1c40f", "#1abc9c", "#3498db", "#9b59b6", "#e74c3c"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
});

// ============================
// Event 2: Counter Buttons
// ============================

let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  counterDisplay.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  counter--;
  counterDisplay.textContent = counter;
});

// ============================
// Event 3: Form Validation
// ============================

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page refresh

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("formMessage");

  // Custom validation rules
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  // Success message
  message.textContent = "Registration successful!";
  message.style.color = "green";

  // Reset form
  document.getElementById("signupForm").reset();
});
