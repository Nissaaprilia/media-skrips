let userlink = document.getElementById("userlink");
let nisnlink = document.getElementById("nisnlink");
let signoutlink = document.getElementById("signoutlink");
let nama = localStorage.getItem("nama");
let nisn = localStorage.getItem("nisn");
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
  localStorage.removeItem("nama");

  window.location = "/index.html";
}

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

//Contoh Soal

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

function toggleText3(displayTextId, buttonId) {
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
