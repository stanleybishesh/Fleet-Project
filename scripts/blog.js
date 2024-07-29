import { serialize } from "./serialize.js";
import { request } from "./request.js";

const GET_URL = "https://jsonplaceholder.typicode.com/photos";

const logout_btn = document.getElementById("logout_btn");
logout_btn.addEventListener("click", logout);

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

serialize(request(GET_URL, "GET"))
  .then((data) => {
    const markup = data.map((img) => {
      return `
        <a class="blog" href="${GET_URL}/${img.blogId}"> 
          <h3>Album Id: ${img.albumId}<br/>Id: ${img.blogId}</h3>
          <img class="round" src="${img.imgURL}">
          <h2>${img.blogTitle}</h2>
        </a>
      `;
    });
    console.log(markup);
    document.querySelector(".blogs").innerHTML += markup.join(" ");
  })
  .catch((error) => console.log(error));
