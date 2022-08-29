const userName = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-msg");

form.addEventListener("submit", function (e) {
  if (userName.value === "" || userName.value == null) {
    errorMessage.innerHTML = "Name is required!";
    errorMessage.classList.add("error-msg-style");
    e.preventDefault();
  }
  if (password.value === "" || password.value == null) {
    errorMessage.innerHTML = "Password is required!";
    errorMessage.classList.add("error-msg-style");
    e.preventDefault();
  }
});
