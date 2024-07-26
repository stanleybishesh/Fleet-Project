const GET_URL = "https://jsonplaceholder.typicode.com/photos";

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

fetch(GET_URL, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const markup = data.map((img) => {
      return `
        <a class="blog" href="${GET_URL}/${img.id}"> 
          <h3>Album Id: ${img.albumId}<br/>Id: ${img.id}</h3>
          <img class="round" src="${img.url}">
          <h2>${img.title}</h2>
        </a>
      `;
    });
    console.log(markup);
    document.querySelector(".blogs").innerHTML += markup.join(" ");
  })
  .catch((error) => console.log(error));
