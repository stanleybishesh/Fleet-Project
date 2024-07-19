function validateName() {
  const name = document.getElementById("name").value;
  if (!name) {
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("name").placeholder = "Please Enter Your Name !";
    return false;
  } else if (name.trim().indexOf(" ") === -1) {
    document.getElementById("error-name").style.color = "red";
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("error-name").innerHTML =
      "You Must Enter Your Full Name e.g. Bishesh Shrestha !";
    return false;
  } else {
    document.getElementById("name").style.border = "";
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("email").placeholder =
      "Please Enter Your Email Address !";
    return false;
  } else {
    document.getElementById("email").style.border = "";
    return true;
  }
}

function validateAddress() {
  const address = document.getElementById("address").value;
  if (!address) {
    document.getElementById("address").style.border = "2px solid red";
    document.getElementById("address").placeholder =
      "Please Enter Your Address !";
    return false;
  } else {
    document.getElementById("address").style.border = "";
    return true;
  }
}

function validateMessage() {
  const message = document.getElementById("message").value;
  if (!message) {
    document.getElementById("message").style.border = "2px solid red";
    document.getElementById("message").placeholder =
      "Please Enter Any Message !";
    return false;
  } else {
    document.getElementById("message").style.border = "";
    return true;
  }
}

function formHandler(event) {
  event.preventDefault();
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
    location.reload();
  }

  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    message: document.getElementById("message").value,
  };
  alert(JSON.stringify(obj));
}
