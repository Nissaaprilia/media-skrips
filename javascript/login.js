// let namelogin = document.getElementById("namelogin");
// let nislogin = document.getElementById("nislogin");
// let nama = sessionStorage.getItem("nama");
// var curretUser = null;

// //function
// function getName() {
//   if ((nama = null)) {
//     window.location = "../../loginsiswa.html";
//   } else {
//     namelogin.innerText = nama;
//   }
// }

// getName();

// window.onload = function () {
//   getName();
//   if ((curretUser = null)) {
//     signoutlink;
//   }
// };

let userlink = document.getElementById("userlink");
let usernis = document.getElementById("usernis");

let nameUser = sessionStorage.getItem("name");
let nisUser = sessionStorage.getItem("nis");

function getname() {
  if (nameUser == null) {
    alert("Maaf, kamu harus login terlebih dahulu");
    window.location = "index.html";
  } else {
    userlink.innerText = nameUser;
  }
}

getname();

function signout() {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("NIS");
  window.location = "index.html";
}

console.log(localStorage);


     function Signout() {
        // signoutlink.href = '../index.html';
        sessionStorage.removeItem("nama");
        window.location = "../../index.html";
      }

      // window Load

      window.onload = function () {
        getName();
        if (currentUser == null) {
          signoutlink.href = "../../index.html";
        } else {
          userlink.innerText = currentUser.nama;
          signoutlink.innerText = "Sign Out";
        } 
        console.log(localStorage);


     function Signout() {
        // signoutlink.href = '../index.html';
        sessionStorage.removeItem("nama");
        window.location = "../../index.html";
      }

      // window Load

      window.onload = function () {
        getName();
        if (currentUser == null) {
          signoutlink.href = "../../index.html";
        } else {
          userlink.innerText = currentUser.nama;
          signoutlink.innerText = "Sign Out";
        } 