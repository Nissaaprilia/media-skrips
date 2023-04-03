let namelogin = document.getElementById("namelogin");
let nislogin = document.getElementById("nislogin");
let nama = sessionStorage.getItem("nama");
var curretUser = null;

//function
function getName() {
  if ((nama = null)) {
    window.location = "../../loginsiswa.html";
  } else {
    namelogin.innerText = nama;
  }
}

getName();

window.onload = function () {
  getName();
  if ((curretUser = null)) {
    signoutlink;
  }
};
