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

// // tahapan contoh soal
// let bgnya = document.querySelectorAll(".pjm");
// let bgnya1 = document.querySelectorAll(".krng");
// let jadi = document.querySelectorAll(".aau");
// let tmblnya = document.querySelector(".tmb_pnjumlahan");
// let tmblnya1 = document.querySelector(".tmb_pngrangan");
// let kondisi1 = 0;
// let kondisi2 = 0;
// tmblnya.addEventListener("click", function () {
//   if (kondisi1 == 0) {
//     kondisi1 += 1;
//     bgnya[0].className = bgnya[0].className.replace("hilang1", "");
//     tmblnya.innerText = "Mengubah kedua pecahan menjadi pecahan senilai";
//   } else if (kondisi1 == 1) {
//     kondisi1 += 1;
//     bgnya[1].className = bgnya[1].className.replace("hilang1", "");
//     tmblnya.innerText = "hasil";
//   } else if (kondisi1 == 2) {
//     bgnya[2].className = bgnya[2].className.replace("hilang1", "");
//     tmblnya.className += " hilang1";
//     jadi[1].className = jadi[1].className.replace("hilang1", "");
//   }
// });

// tmblnya1.addEventListener("click", function () {
//   if (kondisi2 == 0) {
//     kondisi2 += 1;
//     bgnya1[0].className = bgnya1[0].className.replace("hilang1", "");
//     tmblnya1.innerText = "Mengubah kedua pecahan menjadi pecahan senilai";
//   } else if (kondisi2 == 1) {
//     kondisi2 += 1;
//     bgnya1[1].className = bgnya1[1].className.replace("hilang1", "");
//     tmblnya1.innerText = "Menyederhanakan pecahan";
//   } else if (kondisi2 == 2) {
//     bgnya1[2].className = bgnya1[2].className.replace("hilang1", "");
//     bgnya1[3].className = bgnya1[3].className.replace("hilang1", "");
//     tmblnya1.className += " hilang1";
//     jadi[3].className = jadi[3].className.replace("hilang1", "");
//   }
// });

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
