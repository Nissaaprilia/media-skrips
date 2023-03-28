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
let next2 = document.querySelector(".cardBtn12");
let next3 = document.querySelector(".card22");
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
    next2.className = next2.className.replace("hilang1", "");
  }
});
next2.addEventListener("click", function () {
  next3.className = next3.className.replace("hilang1", "");
});

// Drag and drop ayo mencoba
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

let hslJwb = document.getElementById("hasil");
// let benarDrop = 0;

function cekJawabandropkesimpulan() {
  let drop1 = document.getElementById("drop1");
  let drop2 = document.getElementById("drop2");
  let drop3 = document.getElementById("drop3");
  let drop4 = document.getElementById("drop4");
  let drop5 = document.getElementById("drop5");
  // if (drop1.value == 'kosong') {
  //   console.log(benarDrop);
  // } else {
  // }
  if (drop1.value == "kosong" && drop2.value == "kosong" && drop3.value == "kosong" && drop4.value == "kosong" && drop5.value == "kosong") {
    document.getElementById("ket").innerHTML = "Kamu belum memilih Jawaban!";
    document.getElementById("ket").hidden = false;
  } else {
    // hslJwb.hidden = false;
    // document.getElementById('ket').hidden = true;

    //   drop kedalaman
    if (drop1.innerText == "B.") {
      // benarDrop = benarDrop + 1;
      document.getElementById("drop1").style.background = "green";
      document.getElementById("drop1").style.color = "white";
      document.getElementById("drop1").disabled = true;
    } else {
      document.getElementById("drop1").style.background = "red";
      document.getElementById("drop1").style.color = "white";
      document.getElementById("drop1").disabled = true;
    }
    if (drop2.innerText == "D.") {
      // benarDrop = benarDrop + 1;
      document.getElementById("drop2").style.background = "green";
      document.getElementById("drop2").style.color = "white";
      document.getElementById("drop2").disabled = true;
    } else {
      document.getElementById("drop2").style.background = "red";
      document.getElementById("drop2").style.color = "white";
      document.getElementById("drop2").disabled = true;
    }
    if (drop3.innerText == "C.") {
      // benarDrop = benarDrop + 1;
      document.getElementById("drop3").style.background = "green";
      document.getElementById("drop3").style.color = "white";
      document.getElementById("drop3").disabled = true;
    } else {
      document.getElementById("drop3").style.background = "red";
      document.getElementById("drop3").style.color = "white";
      document.getElementById("drop3").disabled = true;
    }
    if (drop4.innerText == "A.") {
      // benarDrop = benarDrop + 1;
      document.getElementById("drop4").style.background = "green";
      document.getElementById("drop4").style.color = "white";
      document.getElementById("drop4").disabled = true;
    } else {
      document.getElementById("drop4").style.background = "red";
      document.getElementById("drop4").style.color = "white";
      document.getElementById("drop4").disabled = true;
    }
    if (drop5.innerText == "E.") {
      // benarDrop = +1;
      document.getElementById("drop5").style.background = "green";
      document.getElementById("drop5").style.color = "white";
      document.getElementById("drop5").draggable = true;
    } else {
      document.getElementById("drop5").style.background = "red";
      document.getElementById("drop5").style.color = "white";
      document.getElementById("drop5").draggable = true;
    }
    // hslJwb.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3 mx-auto w-50 text-center">
    //   <span> Benar = ${benarDrop}</kbl></span><br>
    //   <span> Salah = ${3 - benarDrop}</span><br>
    //   </div>	`;
  }
}
