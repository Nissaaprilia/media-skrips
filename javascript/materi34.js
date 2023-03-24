document.getElementById("cardBtn1").addEventListener("click", function () {
  document.getElementById("card2").style.display = "block";
  document.getElementById("cardBtn1").style.display = "none";
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

// tahapan contoh soal
let bgnya = document.querySelectorAll(".pjm");
let bgnya1 = document.querySelectorAll(".krng");
let jadi = document.querySelectorAll(".aau");
let tmblnya = document.querySelector(".tmb_pnjumlahan");
let tmblnya1 = document.querySelector(".tmb_pngrangan");
let kondisi1 = 0;
let kondisi2 = 0;
tmblnya.addEventListener("click", function () {
  if (kondisi1 == 0) {
    kondisi1 += 1;
    bgnya[0].className = bgnya[0].className.replace("hilang1", "");
    tmblnya.innerText = "Mengubah kedua pecahan menjadi pecahan senilai";
  } else if (kondisi1 == 1) {
    kondisi1 += 1;
    bgnya[1].className = bgnya[1].className.replace("hilang1", "");
    tmblnya.innerText = "hasil";
  } else if (kondisi1 == 2) {
    bgnya[2].className = bgnya[2].className.replace("hilang1", "");
    tmblnya.className += " hilang1";
    jadi[1].className = jadi[1].className.replace("hilang1", "");
  }
});

tmblnya1.addEventListener("click", function () {
  if (kondisi2 == 0) {
    kondisi2 += 1;
    bgnya1[0].className = bgnya1[0].className.replace("hilang1", "");
    tmblnya1.innerText = "Mengubah kedua pecahan menjadi pecahan senilai";
  } else if (kondisi2 == 1) {
    kondisi2 += 1;
    bgnya1[1].className = bgnya1[1].className.replace("hilang1", "");
    tmblnya1.innerText = "Menyederhanakan pecahan";
  } else if (kondisi2 == 2) {
    bgnya1[2].className = bgnya1[2].className.replace("hilang1", "");
    bgnya1[3].className = bgnya1[3].className.replace("hilang1", "");
    tmblnya1.className += " hilang1";
    jadi[3].className = jadi[3].className.replace("hilang1", "");
  }
});
