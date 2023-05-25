let userlink = document.getElementById("userlink");
let nisnlink = document.getElementById("nisnlink");
let signoutlink = document.getElementById("signoutlink");
let nama = sessionStorage.getItem("nama");
let nisn = sessionStorage.getItem("nisn");
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

document.getElementById("cardBtn1").addEventListener("click", function () {
  document.getElementById("card2lanjut").style.display = "block";
  document.getElementById("cardBtn1").style.display = "none";
});

document.getElementById("cardBtn2").addEventListener("click", function () {
  document.getElementById("card2").style.display = "block";
  document.getElementById("cardBtn2").style.display = "none";
});

//Contoh Soal
let kenya = document.querySelectorAll(".ke");
let langkahnya = document.querySelectorAll(".langkahnya");

for (let i = 0; i < kenya.length; i++) {
  kenya[i].addEventListener("click", function () {
    if (kenya[i].className.indexOf("ke_aktif") == -1) {
      for (let j = 0; j < kenya.length; j++) {
        kenya[j].classList.toggle("ke_aktif");
      }
      for (let j = 0; j < langkahnya.length; j++) {
        langkahnya[j].classList.toggle("hilang");
      }
    } else {
    }
  });
}

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
