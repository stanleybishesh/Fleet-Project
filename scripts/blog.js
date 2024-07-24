window.onload = () => {
  if (localStorage.getItem("email")) {
    document.querySelector(".nav-btn").style.display = "none";
    document.querySelector(".logout").style.display = "block";
  } else {
    alert("Please Login First !!");
    location.href = "login.html";
  }
};

function logout() {
  const confirm = window.confirm("Are you sure you want to log out?");
  if (confirm) {
    localStorage.removeItem("email");
    location.href = "login.html";
  }
}
