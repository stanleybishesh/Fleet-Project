import { request } from "./request.js";

const signupBtn = document.querySelector("#register_btn");
signupBtn.addEventListener("click", validateSignUp);

function validateName() {
  const name = document.getElementById("name");
  const nameValue = document.getElementById("name").value;
  if (!nameValue) {
    name.style.border = "2px solid red";
    name.placeholder = "Please Enter Your Name !";
    return false;
  } else {
    name.style.border = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const emailValue = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorEmail = document.getElementById("errorEmail");
  if (!emailValue) {
    email.placeholder = "Please Enter Your Email Address !";
    email.style.border = "2px solid red";
    return false;
  } else if (!emailRegex.test(emailValue)) {
    errorEmail.textContent = "Enter valid email format";
    errorEmail.style.color = "red";
    return false;
  } else {
    email.style.border = "";
    errorEmail.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password");
  const passwordValue = document.getElementById("password").value;
  if (!passwordValue) {
    password.style.border = "2px solid red";
    password.placeholder = "Please Enter Your Password !";
    return false;
  } else {
    password.style.border = "";
    return true;
  }
}

function validateCpassword() {
  const passwordValue = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword");
  const cpasswordValue = document.getElementById("cpassword").value;
  const errorCpassword = document.getElementById("errorCpassword");
  if (!cpasswordValue) {
    cpassword.style.border = "2px solid red";
    cpassword.placeholder = "Please Confirm Your Password !";
    return false;
  } else if (passwordValue !== cpasswordValue) {
    errorCpassword.textContent = "Passwords do not match !";
    errorCpassword.style.color = "red";
    return false;
  } else {
    cpassword.style.border = "";
    errorCpassword.textContent = "";
    return true;
  }
}

function validateSignUp(event) {
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const cpasswordValue = document.getElementById("cpassword").value;
  event.preventDefault();
  let hasError = false;
  if (!validateName()) {
    hasError = true;
  }
  if (!validateEmail()) {
    hasError = true;
  }
  if (!validatePassword()) {
    hasError = true;
  }
  if (!validateCpassword()) {
    hasError = true;
  }
  if (hasError) {
    return false;
  } else {
    alert("Registration successful");
  }

  const regUser = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
    cpassword: cpasswordValue,
  };

  request(
    "https://jsonplaceholder.typicode.com/users",
    "POST",
    JSON.stringify(regUser)
  ).then((data) => {
    alert(JSON.stringify(data));
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);
    alert(
      "Local Storage: " +
        localStorage.getItem("email") +
        " " +
        localStorage.getItem("password")
    );
    location.href = "../html/login.html";
  });
}
