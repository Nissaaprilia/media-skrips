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

// document.getElementById("berlatih")?.addEventListener("click", function () {
//   document.getElementById("berlatih").style.display = "block";
//   document.getElementById("btnBerlatih").style.display = "none";
//   // document.getElementById("berlatih2").style.display = "none";
//   document.getElementById("soal2").style.display = "none";
//   document.getElementById("soal3").style.display = "none";
//   document.getElementById("soal4").style.display = "none";
// });

document.getElementById("btnLanjut")?.addEventListener("click", function () {
  document.getElementById("soal2").style.display = "block";
  document.getElementById("berlatih").style.display = "none";
});

document.getElementById("btnLanjut2").addEventListener("click", function () {
  document.getElementById("soal3").style.display = "block";
  document.getElementById("soal2").style.display = "none";
});

document.getElementById("btnLanjut3").addEventListener("click", function () {
  document.getElementById("soal4").style.display = "block";
  document.getElementById("soal3").style.display = "none";
});

document.getElementById("btnLanjut4").addEventListener("click", function () {
  document.getElementById("soal5").style.display = "block";
  document.getElementById("soal4").style.display = "none";
});

document.getElementById("btnLanjut5").addEventListener("click", function () {
  document.getElementById("soal6").style.display = "block";
  document.getElementById("soal5").style.display = "none";
});

document.getElementById("btnLanjut6").addEventListener("click", function () {
  document.getElementById("soal7").style.display = "block";
  document.getElementById("soal6").style.display = "none";
});

document.getElementById("btnLanjut7").addEventListener("click", function () {
  document.getElementById("soal8").style.display = "block";
  document.getElementById("soal7").style.display = "none";
});

document.getElementById("btnLanjut8").addEventListener("click", function () {
  document.getElementById("soal9").style.display = "block";
  document.getElementById("soal8").style.display = "none";
});

document.getElementById("btnLanjut9").addEventListener("click", function () {
  document.getElementById("soal10").style.display = "block";
  document.getElementById("soal9").style.display = "none";
});

var jwb11 = document.getElementById("jwb11");
var jwb12 = document.getElementById("jwb12");
var jwb21 = document.getElementById("jwb21");
var jwb22 = document.getElementById("jwb22");
var jwb31 = document.getElementById("jwb31");
var jwb32 = document.getElementById("jwb32");
var jwb41 = document.getElementById("jwb41");
var jwb42 = document.getElementById("jwb42");
var jwb51 = document.getElementById("jwb51");
var jwb52 = document.getElementById("jwb52");
var jwb61 = document.getElementById("jwb61");
var jwb62 = document.getElementById("jwb62");
var jwb71 = document.getElementById("jwb71");
var jwb72 = document.getElementById("jwb72");
var jwb81 = document.getElementById("jwb81");
var jwb82 = document.getElementById("jwb82");
var jwb91 = document.getElementById("jwb91");
var jwb92 = document.getElementById("jwb92");
var jwb101 = document.getElementById("jwb101");
var jwb102 = document.getElementById("jwb102");
var a = [];

document.getElementById("btnCek1")?.addEventListener("click", function () {
  if (jwb11.value == 18 && jwb12.value == 20) {
    jwb11.classList.add("jawabpecahanbenar");
    jwb11.classList.remove("jawabpecahansalah");
    jwb12.classList.add("jawabpecahanbenar");
    jwb12.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut").style.display = "block";
    document.getElementById("btnCek1").style.display = "none";
    document.getElementById("alertHasil1").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb11.classList.remove("jawabpecahanbenar");
    jwb11.classList.add("jawabpecahansalah");
    jwb12.classList.remove("jawabpecahanbenar");
    jwb12.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil1").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek2")?.addEventListener("click", function () {
  if (jwb21.value == 3 && jwb22.value == 8) {
    jwb21.classList.add("jawabpecahanbenar");
    jwb21.classList.remove("jawabpecahansalah");
    jwb22.classList.add("jawabpecahanbenar");
    jwb22.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut2").style.display = "block";
    document.getElementById("btnCek2").style.display = "none";
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb21.classList.remove("jawabpecahanbenar");
    jwb21.classList.add("jawabpecahansalah");
    jwb22.classList.remove("jawabpecahanbenar");
    jwb22.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil2").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek3")?.addEventListener("click", function () {
  if (jwb31.value == 6 && jwb32.value == 7) {
    jwb31.classList.add("jawabpecahanbenar");
    jwb31.classList.remove("jawabpecahansalah");
    jwb32.classList.add("jawabpecahanbenar");
    jwb32.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut3").style.display = "block";
    document.getElementById("btnCek3").style.display = "none";
    document.getElementById("alertHasil3").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb31.classList.remove("jawabpecahanbenar");
    jwb31.classList.add("jawabpecahansalah");
    jwb32.classList.remove("jawabpecahanbenar");
    jwb32.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil3").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek4")?.addEventListener("click", function () {
  if (jwb41.value == 8 && jwb42.value == 9) {
    jwb41.classList.add("jawabpecahanbenar");
    jwb41.classList.remove("jawabpecahansalah");
    jwb42.classList.add("jawabpecahanbenar");
    jwb42.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut4").style.display = "block";
    document.getElementById("btnCek4").style.display = "none";
    document.getElementById("alertHasil4").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb41.classList.remove("jawabpecahanbenar");
    jwb41.classList.add("jawabpecahansalah");
    jwb42.classList.remove("jawabpecahanbenar");
    jwb42.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil4").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek5")?.addEventListener("click", function () {
  if (jwb51.value == 5 && jwb52.value == 6) {
    jwb51.classList.add("jawabpecahanbenar");
    jwb51.classList.remove("jawabpecahansalah");
    jwb52.classList.add("jawabpecahanbenar");
    jwb52.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut5").style.display = "block";
    document.getElementById("btnCek5").style.display = "none";
    document.getElementById("alertHasil5").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb51.classList.remove("jawabpecahanbenar");
    jwb51.classList.add("jawabpecahansalah");
    jwb52.classList.remove("jawabpecahanbenar");
    jwb52.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil5").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek6")?.addEventListener("click", function () {
  if (jwb61.value == 9 && jwb62.value == 14) {
    jwb61.classList.add("jawabpecahanbenar");
    jwb61.classList.remove("jawabpecahansalah");
    jwb62.classList.add("jawabpecahanbenar");
    jwb62.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut6").style.display = "block";
    document.getElementById("btnCek6").style.display = "none";
    document.getElementById("alertHasil6").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb61.classList.remove("jawabpecahanbenar");
    jwb61.classList.add("jawabpecahansalah");
    jwb62.classList.remove("jawabpecahanbenar");
    jwb62.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil6").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek7")?.addEventListener("click", function () {
  if (jwb71.value == 9 && jwb72.value == 12) {
    jwb71.classList.add("jawabpecahanbenar");
    jwb71.classList.remove("jawabpecahansalah");
    jwb72.classList.add("jawabpecahanbenar");
    jwb72.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut7").style.display = "block";
    document.getElementById("btnCek7").style.display = "none";
    document.getElementById("alertHasil7").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb71.classList.remove("jawabpecahanbenar");
    jwb71.classList.add("jawabpecahansalah");
    jwb72.classList.remove("jawabpecahanbenar");
    jwb72.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil7").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek8")?.addEventListener("click", function () {
  if (jwb81.value == 10 && jwb82.value == 15) {
    jwb81.classList.add("jawabpecahanbenar");
    jwb81.classList.remove("jawabpecahansalah");
    jwb82.classList.add("jawabpecahanbenar");
    jwb82.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut8").style.display = "block";
    document.getElementById("btnCek8").style.display = "none";
    document.getElementById("alertHasil8").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb81.classList.remove("jawabpecahanbenar");
    jwb81.classList.add("jawabpecahansalah");
    jwb82.classList.remove("jawabpecahanbenar");
    jwb82.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil8").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek9")?.addEventListener("click", function () {
  if (jwb91.value == 7 && jwb92.value == 12) {
    jwb91.classList.add("jawabpecahanbenar");
    jwb91.classList.remove("jawabpecahansalah");
    jwb92.classList.add("jawabpecahanbenar");
    jwb92.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut9").style.display = "block";
    document.getElementById("btnCek9").style.display = "none";
    document.getElementById("alertHasil9").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb91.classList.remove("jawabpecahanbenar");
    jwb91.classList.add("jawabpecahansalah");
    jwb92.classList.remove("jawabpecahanbenar");
    jwb92.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil9").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});

document.getElementById("btnCek10")?.addEventListener("click", function () {
  if (jwb101.value == 15 && jwb102.value == 17) {
    jwb101.classList.add("jawabpecahanbenar");
    jwb101.classList.remove("jawabpecahansalah");
    jwb102.classList.add("jawabpecahanbenar");
    jwb102.classList.remove("jawabpecahansalah");
    document.getElementById("berikutnya").style.display = "block";
    document.getElementById("btnCek10").style.display = "none";
    document.getElementById("alertHasil10").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb101.classList.remove("jawabpecahanbenar");
    jwb101.classList.add("jawabpecahansalah");
    jwb102.classList.remove("jawabpecahanbenar");
    jwb102.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil10").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
      Karena pecahan berpenyebut sama, maka langsung di jumlahkan pembilang nya</div>
      `;
  }
});
