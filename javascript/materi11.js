let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let userlink = document.getElementById("userlink");
let nisnlink = document.getElementById("nisnlink");
let signoutlink = document.getElementById("signoutlink");
let nama = sessionStorage.getItem("nama");
let nisn = sessionStorage.getItem("nisn");
// let nama = localStorage.getItem("nama");
// let nisn = localStorage.getItem("nisn");
var currentUser = null;

// Function;
function getNama() {
  if (nama == null) {
    window.location = "/index.html";
  } else {
    userlink.innerText = nama;
  }
}

function getNisn() {
  if (nisn == null) {
    window.location = "/index.html";
  } else {
    nisnlink.innerText = nisn;
  }
}

getNama();
getNisn();

function LogOut() {
  sessionStorage.removeItem("nama");

  window.location = "/index.html";
}

document.getElementById("btnselesai").addEventListener("click", function () {
  document.getElementById("card2lanjut").style.display = "block";
  document.getElementById("btnselesai").style.display = "none";
});
document.getElementById("cardBtn2").addEventListener("click", function () {
  document.getElementById("card2").style.display = "block";
  document.getElementById("cardBtn2").style.display = "none";
});

function toggleText(displayTextId, buttonId) {
  var displayText = document.getElementById(displayTextId);
  var button = document.getElementById("button" + buttonId);

  if (displayText.classList.contains("hidden")) {
    displayText.classList.remove("hidden");
    // button.textContent = "";
  } else {
    displayText.classList.add("hidden");
    // button.textContent = "" + buttonId;
  }
}

function toggleText2(displayTextId, buttonId) {
  var displayText = document.getElementById(displayTextId);
  var button = document.getElementById("button" + buttonId);

  if (displayText.classList.contains("hidden")) {
    displayText.classList.remove("hidden");
    // button.textContent = "";
  } else {
    displayText.classList.add("hidden");
    // button.textContent = "" + buttonId;
  }
}
