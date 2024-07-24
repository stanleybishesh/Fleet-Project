function validateEmail() {
  const email = document.getElementById("email").value;
  const emailRegex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
  const errorEmail = document.getElementById("errorEmail");
  if (!email) {
    document.getElementById("email").placeholder =
      "Please Enter Your Email Address !";
    document.getElementById("email").style.border = "2px solid red";
    return false;
    // } else if (email=="22") {
    //   errorEmail.textContent = "Email is invalid!";
    //   return false;
  } else {
    document.getElementById("email").style.border = "";
    errorEmail.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const errorPassword = document.getElementById("errorPassword");
  if (!password) {
    document.getElementById("password").placeholder =
      "Please Enter Your Password !";
    document.getElementById("password").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("password").style.border = "";
    return true;
  }
}
function validateLogin(event) {
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
  //  else {
  // alert("Login Successful!");
  // location.href = "../fleet.html";
  // }

  // const loginUser = {
  //   email: document.getElementById("email").value,
  //   password: document.getElementById("password").value,
  // };

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(loginUser),
  };
  let authorizedUser;
  fetch("https://jsonplaceholder.typicode.com/users", options)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        if (user.email === document.getElementById("email").value) {
          authorizedUser = user;
        }
      });
      if (authorizedUser) {
        alert("Login Successful");
        localStorage.setItem("email", authorizedUser.email);
        location.href = "../fleet.html";
      } else {
        alert("Unauthorized User !!");
      }
    });
}
