// script.js
const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

// Function to check password match
function checkPasswordMatch() {
  if (password.value !== confirmPassword.value) {
    passwordError.textContent = "Passwords do not match";
    passwordError.style.display = "block";
    form.classList.add("password-mismatch");
  } else {
    passwordError.textContent = "";
    passwordError.style.display = "none";
    form.classList.remove("password-mismatch");
  }
}

// Add input event listeners to both password fields
password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);

// Add form submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  // Additional form submission logic goes here
});
