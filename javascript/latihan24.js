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

var jwb1 = document.getElementById("jwb1");
var jwb11 = document.getElementById("jwb11");
var jwb12 = document.getElementById("jwb12");
var jwb2 = document.getElementById("jwb2");
var jwb21 = document.getElementById("jwb21");
var jwb22 = document.getElementById("jwb22");
var jwb3 = document.getElementById("jwb3");
var jwb31 = document.getElementById("jwb31");
var jwb32 = document.getElementById("jwb32");
var jwb4 = document.getElementById("jwb4");
var jwb41 = document.getElementById("jwb41");
var jwb42 = document.getElementById("jwb42");
var jwb5 = document.getElementById("jwb5");
var jwb51 = document.getElementById("jwb51");
var jwb52 = document.getElementById("jwb52");
var jwb6 = document.getElementById("jwb6");
var jwb61 = document.getElementById("jwb61");
var jwb62 = document.getElementById("jwb62");
var jwb7 = document.getElementById("jwb7");
var jwb71 = document.getElementById("jwb71");
var jwb72 = document.getElementById("jwb72");
var jwb8 = document.getElementById("jwb8");
var jwb81 = document.getElementById("jwb81");
var jwb82 = document.getElementById("jwb82");
var jwb9 = document.getElementById("jwb9");
var jwb91 = document.getElementById("jwb91");
var jwb92 = document.getElementById("jwb92");
var jwb10 = document.getElementById("jwb10");
var jwb101 = document.getElementById("jwb101");
var jwb102 = document.getElementById("jwb102");
var a = [];

document.getElementById("btnCek1")?.addEventListener("click", function () {
  if (jwb1.value == 3 && jwb11.value == 1 && jwb12.value == 3) {
    jwb1.classList.add("jawabpecahanbenar");
    jwb1.classList.remove("jawabpecahansalah");
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
    jwb1.classList.add("jawabpecahansalah");
    jwb1.classList.remove("jawabpecahanbenar");
    jwb11.classList.add("jawabpecahansalah");
    jwb11.classList.remove("jawabpecahanbenar");
    jwb12.classList.add("jawabpecahansalah");
    jwb12.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil1").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek2")?.addEventListener("click", function () {
  if (jwb2.value == 3 && jwb21.value == 5 && jwb22.value == 6) {
    jwb2.classList.add("jawabpecahanbenar");
    jwb2.classList.remove("jawabpecahansalah");
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
    jwb2.classList.add("jawabpecahansalah");
    jwb2.classList.remove("jawabpecahanbenar");
    jwb21.classList.add("jawabpecahansalah");
    jwb21.classList.remove("jawabpecahanbenar");
    jwb22.classList.add("jawabpecahansalah");
    jwb22.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil2").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek3")?.addEventListener("click", function () {
  if (jwb3.value == 3 && jwb31.value == 2 && jwb32.value == 3) {
    jwb3.classList.add("jawabpecahanbenar");
    jwb3.classList.remove("jawabpecahansalah");
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
    jwb3.classList.add("jawabpecahansalah");
    jwb3.classList.remove("jawabpecahanbenar");
    jwb31.classList.add("jawabpecahansalah");
    jwb31.classList.remove("jawabpecahanbenar");
    jwb32.classList.add("jawabpecahansalah");
    jwb32.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil3").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek4")?.addEventListener("click", function () {
  if (jwb4.value == 7 && jwb41.value == 7 && jwb42.value == 15) {
    jwb4.classList.add("jawabpecahanbenar");
    jwb4.classList.remove("jawabpecahansalah");
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
    jwb4.classList.add("jawabpecahansalah");
    jwb4.classList.remove("jawabpecahanbenar");
    jwb41.classList.add("jawabpecahansalah");
    jwb41.classList.remove("jawabpecahanbenar");
    jwb42.classList.add("jawabpecahansalah");
    jwb42.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil4").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek5")?.addEventListener("click", function () {
  if (jwb5.value == 5 && jwb51.value == 5 && jwb52.value == 6) {
    jwb5.classList.add("jawabpecahanbenar");
    jwb5.classList.remove("jawabpecahansalah");
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
    jwb5.classList.add("jawabpecahansalah");
    jwb5.classList.remove("jawabpecahanbenar");
    jwb51.classList.add("jawabpecahansalah");
    jwb51.classList.remove("jawabpecahanbenar");
    jwb52.classList.add("jawabpecahansalah");
    jwb52.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil5").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek6")?.addEventListener("click", function () {
  if (jwb6.value == 7 && jwb61.value == 1 && jwb62.value == 12) {
    jwb6.classList.add("jawabpecahanbenar");
    jwb6.classList.remove("jawabpecahansalah");
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
    jwb6.classList.add("jawabpecahansalah");
    jwb6.classList.remove("jawabpecahanbenar");
    jwb61.classList.add("jawabpecahansalah");
    jwb61.classList.remove("jawabpecahanbenar");
    jwb62.classList.add("jawabpecahansalah");
    jwb62.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil6").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek7")?.addEventListener("click", function () {
  if (jwb7.value == 10 && jwb71.value == 2 && jwb72.value == 15) {
    jwb7.classList.add("jawabpecahanbenar");
    jwb7.classList.remove("jawabpecahansalah");
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
    jwb7.classList.add("jawabpecahansalah");
    jwb7.classList.remove("jawabpecahanbenar");
    jwb71.classList.add("jawabpecahansalah");
    jwb71.classList.remove("jawabpecahanbenar");
    jwb72.classList.add("jawabpecahansalah");
    jwb72.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil7").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek8")?.addEventListener("click", function () {
  if (jwb8.value == 7 && jwb81.value == 5 && jwb82.value == 12) {
    jwb8.classList.add("jawabpecahanbenar");
    jwb8.classList.remove("jawabpecahansalah");
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
    jwb8.classList.add("jawabpecahansalah");
    jwb8.classList.remove("jawabpecahanbenar");
    jwb81.classList.add("jawabpecahansalah");
    jwb81.classList.remove("jawabpecahanbenar");
    jwb82.classList.add("jawabpecahansalah");
    jwb82.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil8").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek9")?.addEventListener("click", function () {
  if (jwb9.value == 3 && jwb91.value == 5 && jwb92.value == 6) {
    jwb9.classList.add("jawabpecahanbenar");
    jwb9.classList.remove("jawabpecahansalah");
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
    jwb9.classList.add("jawabpecahansalah");
    jwb9.classList.remove("jawabpecahanbenar");
    jwb91.classList.add("jawabpecahansalah");
    jwb91.classList.remove("jawabpecahanbenar");
    jwb92.classList.add("jawabpecahansalah");
    jwb92.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil9").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});

document.getElementById("btnCek10")?.addEventListener("click", function () {
  if (jwb10.value == 3 && jwb101.value == 3 && jwb102.value == 4) {
    jwb10.classList.add("jawabpecahanbenar");
    jwb10.classList.remove("jawabpecahansalah");
    jwb101.classList.add("jawabpecahanbenar");
    jwb101.classList.remove("jawabpecahansalah");
    jwb102.classList.add("jawabpecahanbenar");
    jwb102.classList.remove("jawabpecahansalah");
    document.getElementById("btnLanjut10").style.display = "block";
    document.getElementById("btnCek10").style.display = "none";
    document.getElementById("alertHasil10").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Kamu bisa lanjut ke materi berikutnya!
        </div>
      `;
  } else {
    jwb10.classList.add("jawabpecahansalah");
    jwb10.classList.remove("jawabpecahanbenar");
    jwb101.classList.add("jawabpecahansalah");
    jwb101.classList.remove("jawabpecahanbenar");
    jwb102.classList.add("jawabpecahansalah");
    jwb102.classList.remove("jawabpecahanbenar");
    document.getElementById("alertHasil10").innerHTML = `
      <div class="alert alert-danger" role="alert">Jawaban salah. <br> 
     Pecahan mempunyai penyebut berbeda, maka ubah lah menjadi pecahan senilai sehingga penyebut nya sama.
</div>
      `;
  }
});
