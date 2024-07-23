function validateName() {
  const name = document.getElementById("name").value;
  if (!name) {
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("name").placeholder = "Please Enter Your Name !";
    return false;
  } else {
    document.getElementById("name").style.border = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorEmail = document.getElementById("errorEmail");
  if (!email) {
    document.getElementById("email").placeholder =
      "Please Enter Your Email Address !";
    document.getElementById("email").style.border = "2px solid red";
    return false;
  } else if (!emailRegex.test(email)) {
    errorEmail.textContent = "Enter valid email format";
    errorEmail.style.color = "red";
    return false;
  } else {
    document.getElementById("email").style.border = "";
    errorEmail.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  if (!password) {
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("password").placeholder =
      "Please Enter Your Password !";
    return false;
  } else {
    document.getElementById("password").style.border = "";
    return true;
  }
}

function validateCpassword() {
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;
  const errorCpassword = document.getElementById("errorCpassword");
  if (!cpassword) {
    document.getElementById("cpassword").style.border = "2px solid red";
    document.getElementById("cpassword").placeholder =
      "Please Confirm Your Password !";
    return false;
  } else if (password !== cpassword) {
    errorCpassword.textContent = "Passwords do not match !";
    errorCpassword.style.color = "red";
    return false;
  } else {
    document.getElementById("cpassword").style.border = "";
    errorCpassword.textContent = "";
    return true;
  }
}

function validateSignUp(event) {
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
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("cpassword").value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(regUser),
  };

  fetch("https://jsonplaceholder.typicode.com/users", options)
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      localStorage.setItem("email", document.getElementById("email").value);
      localStorage.setItem(
        "password",
        document.getElementById("password").value
      );
      alert(
        "Local Storage: " +
          localStorage.getItem("email") +
          " " +
          localStorage.getItem("password")
      );
      location.href = "../html/login.html";
    });
}
