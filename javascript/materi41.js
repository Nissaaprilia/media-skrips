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

function diketahui0(diketahui0) {
  var x = document.getElementById(diketahui0);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function ditanya0(ditanya0) {
  var x = document.getElementById(ditanya0);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
function rumus0(rumus0) {
  var x = document.getElementById(rumus0);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function diketahui(diketahui) {
  var x = document.getElementById(diketahui);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function ditanya(ditanya) {
  var x = document.getElementById(ditanya);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
function rumus(rumus) {
  var x = document.getElementById(rumus);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function diketahui2(diketahui2) {
  var x = document.getElementById(diketahui2);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function ditanya2(ditanya2) {
  var x = document.getElementById(ditanya2);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
function rumus2(rumus2) {
  var x = document.getElementById(rumus2);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
function rumus22(rumus22) {
  var x = document.getElementById(rumus22);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function diketahui4(diketahui4) {
  var x = document.getElementById(diketahui4);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}

function ditanya4(ditanya4) {
  var x = document.getElementById(ditanya4);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
function rumus4(rumus4) {
  var x = document.getElementById(rumus4);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
function rumus41(rumus41) {
  var x = document.getElementById(rumus41);

  if (x.className.indexOf("lost") == -1) {
    x.className += " lost";
  } else {
    x.className = x.className.replace("lost", "");
  }
}
