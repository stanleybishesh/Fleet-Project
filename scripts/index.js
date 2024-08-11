import { request } from "./request.js";

const submitBtn = document.querySelector("#submit_btn");
const logout_btn = document.querySelector("#logout_btn");
// const POST_URL = "https://jsonplaceholder.typicode.com/comments";
const POST_URL = "http://localhost:3000/contacts/";
logout_btn.addEventListener("click", logout);
submitBtn.addEventListener("click", formHandler);

window.onload = () => {
  if (localStorage.getItem("email")) {
    document.querySelector(".nav-btn").style.display = "none";
    document.querySelector(".logout").style.display = "block";
  } else {
    document.querySelector("#blog").style.display = "none";
  }
};

function login() {
  if (!localStorage.getItem("email")) {
    alert("You have to login first !!");
    location.href = "html/login.html";
  }
}

function logout() {
  const confirm = window.confirm("Are you sure you want to logout?");
  if (confirm) {
    localStorage.removeItem("email");
    location.href = "html/login.html";
  }
}

function validateName() {
  const name = document.getElementById("name");
  const nameValue = document.getElementById("name").value;
  const errorName = document.getElementById("error-name");
  if (!nameValue) {
    name.style.border = "2px solid red";
    name.placeholder = "Please Enter Your Name !";
    return false;
  } else if (nameValue.trim().indexOf(" ") === -1) {
    errorName.style.color = "red";
    name.style.border = "2px solid red";
    errorName.innerHTML =
      "You Must Enter Your Full Name e.g. Bishesh Shrestha !";
    return false;
  } else {
    name.style.border = "";
    errorName.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const emailValue = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorEmail = document.getElementById("errorEmail");
  if (!emailValue) {
    email.style.border = "2px solid red";
    email.placeholder = "Please Enter Your Email Address !";
    return false;
  } else if (!emailRegex.test(emailValue)) {
    errorEmail.textContent = "Enter valid email format";
    errorEmail.style.color = "red";
    return false;
  } else {
    errorEmail.textContent = "";
    email.style.border = "";
    return true;
  }
}

function validateAddress() {
  const address = document.getElementById("address");
  const addressValue = document.getElementById("address").value;
  if (!addressValue) {
    address.style.border = "2px solid red";
    address.placeholder = "Please Enter Your Address !";
    return false;
  } else {
    address.style.border = "";
    return true;
  }
}

function validateMessage() {
  const message = document.getElementById("message");
  const messageValue = document.getElementById("message").value;
  if (!messageValue) {
    message.style.border = "2px solid red";
    message.placeholder = "Please Enter Any Message !";
    return false;
  } else {
    message.style.border = "";
    return true;
  }
}

function formHandler(event) {
  event.preventDefault();
  if (!localStorage.getItem("email")) {
    alert("You have to login first !!");
    location.href = "html/login.html";
  } else {
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const addressValue = document.getElementById("address").value;
    const messageValue = document.getElementById("message").value;

    let hasError = false;
    if (!validateName()) {
      hasError = true;
    }
    if (!validateEmail()) {
      hasError = true;
    }
    if (!validateAddress()) {
      hasError = true;
    }
    if (!validateMessage()) {
      hasError = true;
    }
    if (hasError) {
      return false;
    } else {
      alert("Form submitted !!");
    }

    let obj = {
      name: nameValue,
      email: emailValue,
      address: addressValue,
      message: messageValue,
    };
    request(POST_URL, "POST", JSON.stringify(obj)).then((data) => {
      alert(JSON.stringify(data));
      location.reload();
    });
  }
}
