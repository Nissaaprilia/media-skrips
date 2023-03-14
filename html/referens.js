document.getElementById("btnBerlatih").addEventListener("click", function () {
  document.getElementById("berlatih").style.display = "block";
  document.getElementById("btnBerlatih").style.display = "none";
  document.getElementById("berlatih2").style.display = "none";
  document.getElementById("soal2").style.display = "none";
  document.getElementById("soal3").style.display = "none";
});

document.getElementById("btnLanjut").addEventListener("click", function () {
  document.getElementById("soal2").style.display = "block";
  document.getElementById("berlatih").style.display = "none";
});

document.getElementById("btnLanjut2").addEventListener("click", function () {
  document.getElementById("soal3").style.display = "block";
  document.getElementById("soal2").style.display = "none";
  document.getElementById("berlatih2").style.display = "none";
  document.getElementById("berlatih").style.display = "none";
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
var a = [];

document.getElementById("btnCek1").addEventListener("click", function () {
  if (jwb11.value == 2 && jwb12.value == 6) {
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
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!! 
        </div>
      `;
  }
});

document.getElementById("btnCek2").addEventListener("click", function () {
  if (jwb21.value == 2 && jwb22.value == 3) {
    jwb21.classList.add("jawabpecahanbenar");
    jwb21.classList.remove("jawabpecahansalah");
    jwb22.classList.add("jawabpecahanbenar");
    jwb22.classList.remove("jawabpecahansalah");
    a[1] = true;
  } else {
    jwb21.classList.remove("jawabpecahanbenar");
    jwb21.classList.add("jawabpecahansalah");
    jwb22.classList.remove("jawabpecahanbenar");
    jwb22.classList.add("jawabpecahansalah");
    a[1] = false;
  }

  if (jwb31.value == 6 && jwb32.value == 9) {
    jwb31.classList.add("jawabpecahanbenar");
    jwb31.classList.remove("jawabpecahansalah");
    jwb32.classList.add("jawabpecahanbenar");
    jwb32.classList.remove("jawabpecahansalah");
    a[2] = true;
  } else {
    jwb31.classList.remove("jawabpecahanbenar");
    jwb31.classList.add("jawabpecahansalah");
    jwb32.classList.remove("jawabpecahanbenar");
    jwb32.classList.add("jawabpecahansalah");
    a[2] = false;
  }

  if (a[1] == true && a[2] == true) {
    document.getElementById("btnLanjut2").style.display = "block";
    document.getElementById("btnCek2").style.display = "none";
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!!
        </div>
      `;
  }
});

document.getElementById("btnCek3").addEventListener("click", function () {
  if (jwb41.value == 3 && jwb42.value == 5) {
    jwb41.classList.add("jawabpecahanbenar");
    jwb41.classList.remove("jawabpecahansalah");
    jwb42.classList.add("jawabpecahanbenar");
    jwb42.classList.remove("jawabpecahansalah");
    a[3] = true;
  } else {
    jwb41.classList.remove("jawabpecahanbenar");
    jwb41.classList.add("jawabpecahansalah");
    jwb42.classList.remove("jawabpecahanbenar");
    jwb42.classList.add("jawabpecahansalah");
    a[3] = false;
  }

  if (jwb51.value == 6 && jwb52.value == 10) {
    jwb51.classList.add("jawabpecahanbenar");
    jwb51.classList.remove("jawabpecahansalah");
    jwb52.classList.add("jawabpecahanbenar");
    jwb52.classList.remove("jawabpecahansalah");
    a[4] = true;
  } else {
    jwb51.classList.remove("jawabpecahanbenar");
    jwb51.classList.add("jawabpecahansalah");
    jwb52.classList.remove("jawabpecahanbenar");
    jwb52.classList.add("jawabpecahansalah");
    a[4] = false;
  }

  if (a[3] == true && a[4] == true) {
    document.getElementById("halNext").style.display = "block";
    document.getElementById("btnCek3").style.display = "none";
    document.getElementById("alertHasil3").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Ayo baca materi selanjutnya!
        </div>
      `;
  } else {
    document.getElementById("alertHasil3").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!!
        </div>
      `;
  }
});

//
document.getElementById("btnBerlatih").addEventListener("click", function () {
  document.getElementById("berlatih").style.display = "block";
  document.getElementById("btnBerlatih").style.display = "none";
  document.getElementById("berlatih2").style.display = "none";
  document.getElementById("soal2").style.display = "none";
  document.getElementById("soal3").style.display = "none";
});

document.getElementById("btnLanjut").addEventListener("click", function () {
  document.getElementById("soal2").style.display = "block";
  document.getElementById("berlatih").style.display = "none";
});

document.getElementById("btnLanjut2").addEventListener("click", function () {
  document.getElementById("soal3").style.display = "block";
  document.getElementById("soal2").style.display = "none";
  document.getElementById("berlatih2").style.display = "none";
  document.getElementById("berlatih").style.display = "none";
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
var a = [];

document.getElementById("btnCek1").addEventListener("click", function () {
  if (jwb11.value == 2 && jwb12.value == 6) {
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
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!! 
        </div>
      `;
  }
});

document.getElementById("btnCek2").addEventListener("click", function () {
  if (jwb21.value == 2 && jwb22.value == 3) {
    jwb21.classList.add("jawabpecahanbenar");
    jwb21.classList.remove("jawabpecahansalah");
    jwb22.classList.add("jawabpecahanbenar");
    jwb22.classList.remove("jawabpecahansalah");
    a[1] = true;
  } else {
    jwb21.classList.remove("jawabpecahanbenar");
    jwb21.classList.add("jawabpecahansalah");
    jwb22.classList.remove("jawabpecahanbenar");
    jwb22.classList.add("jawabpecahansalah");
    a[1] = false;
  }

  if (jwb31.value == 6 && jwb32.value == 9) {
    jwb31.classList.add("jawabpecahanbenar");
    jwb31.classList.remove("jawabpecahansalah");
    jwb32.classList.add("jawabpecahanbenar");
    jwb32.classList.remove("jawabpecahansalah");
    a[2] = true;
  } else {
    jwb31.classList.remove("jawabpecahanbenar");
    jwb31.classList.add("jawabpecahansalah");
    jwb32.classList.remove("jawabpecahanbenar");
    jwb32.classList.add("jawabpecahansalah");
    a[2] = false;
  }

  if (a[1] == true && a[2] == true) {
    document.getElementById("btnLanjut2").style.display = "block";
    document.getElementById("btnCek2").style.display = "none";
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!!
        </div>
      `;
  }
});

document.getElementById("btnCek3").addEventListener("click", function () {
  if (jwb41.value == 3 && jwb42.value == 5) {
    jwb41.classList.add("jawabpecahanbenar");
    jwb41.classList.remove("jawabpecahansalah");
    jwb42.classList.add("jawabpecahanbenar");
    jwb42.classList.remove("jawabpecahansalah");
    a[3] = true;
  } else {
    jwb41.classList.remove("jawabpecahanbenar");
    jwb41.classList.add("jawabpecahansalah");
    jwb42.classList.remove("jawabpecahanbenar");
    jwb42.classList.add("jawabpecahansalah");
    a[3] = false;
  }

  if (jwb51.value == 6 && jwb52.value == 10) {
    jwb51.classList.add("jawabpecahanbenar");
    jwb51.classList.remove("jawabpecahansalah");
    jwb52.classList.add("jawabpecahanbenar");
    jwb52.classList.remove("jawabpecahansalah");
    a[4] = true;
  } else {
    jwb51.classList.remove("jawabpecahanbenar");
    jwb51.classList.add("jawabpecahansalah");
    jwb52.classList.remove("jawabpecahanbenar");
    jwb52.classList.add("jawabpecahansalah");
    a[4] = false;
  }

  if (a[3] == true && a[4] == true) {
    document.getElementById("halNext").style.display = "block";
    document.getElementById("btnCek3").style.display = "none";
    document.getElementById("alertHasil3").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Ayo baca materi selanjutnya!
        </div>
      `;
  } else {
    document.getElementById("alertHasil3").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!!
        </div>
      `;
  }
});
