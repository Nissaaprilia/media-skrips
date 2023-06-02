let userlink = document.getElementById("userlink");
let signoutlink = document.getElementById("signoutlink");
let nama = localStorage.getItem("nama");
var currentUser = null;

// Function;
function getName() {
  if (nama == null) {
    window.location = "../../index.html";
  } else {
    userlink.innerText = nama;
  }
}

getName();

function LogOut() {
  localStorage.removeItem("nama");

  window.location = "../../index.html";
}
