let userlink = document.getElementById("userlink");
let signoutlink = document.getElementById("signoutlink");
let nama = sessionStorage.getItem("nama");
var currentUser = null;

// Function;
function getName() {
  if (nama == null) {
    window.location = "index.html";
  } else {
    userlink.innerText = nama;
  }
}

getName();

function Signout() {
  // signoutlink.href = '../index.html';
  sessionStorage.removeItem("nama");
  window.location = "../index.html";
}

// window Load

window.onload = function () {
  getName();
  if (currentUser == null) {
    signoutlink.href = "../index.html";
  } else {
    userlink.innerText = currentUser.nama;
    signoutlink.innerText = "Sign Out";
  }
};
