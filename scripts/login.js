import { request } from "./request.js";

const loginBtn = document.querySelector("#login__btn");
const GET_URL = "http://localhost:3000/users/";
loginBtn.addEventListener("click", validateLogin);

window.onload = () => {
  if (localStorage.getItem("email")) {
    document.querySelector(".nav-btn").style.display = "none";
    document.querySelector(".logout").style.display = "block";
  } else {
    document.querySelector("#blog").style.display = "none";
  }
};

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
    email.style.border = "2px solid red";
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
  const errorPassword = document.getElementById("errorPassword");
  if (!passwordValue) {
    password.placeholder = "Please Enter Your Password !";
    password.style.border = "2px solid red";
    return false;
  } else {
    password.style.border = "";
    return true;
  }
}

function validateLogin(event) {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  event.preventDefault();
  let hasError = false;
  if (!validateEmail()) {
    hasError = true;
  }
  if (!validatePassword()) {
    hasError = true;
  }
  if (hasError) {
    return false;
  }

  let authorizedUser;
  try {
    request(GET_URL, "GET").then((data) => {
      data.forEach((user) => {
        if (user.email === emailValue) {
          authorizedUser = user;
        }
      });
      if (authorizedUser) {
        alert("Login Successful");
        localStorage.setItem("email", authorizedUser.email);
        location.href = "../index.html";
      } else {
        alert("Unauthorized User !!");
      }
    });
  } catch (err) {
    console.log(err);
  }
}
