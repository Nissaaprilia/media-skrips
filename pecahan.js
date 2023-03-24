document.getElementById("cardBtn1").addEventListener("click", function () {
  document.getElementById("card2").style.display = "block";
  document.getElementById("cardBtn1").style.display = "none";
});

document.getElementById("btnLanjut").addEventListener("click", function () {
  document.getElementById("soal2").style.display = "block";
  document.getElementById("berlatih").style.display = "none";
  document.getElementById("lihat").style.display = "none";
});

document.getElementById("btnLanjut2").addEventListener("click", function () {
  document.getElementById("soal3").style.display = "block";
  document.getElementById("soal2").style.display = "none";
  document.getElementById("berlatih2").style.display = "none";
  document.getElementById("berlatih").style.display = "none";
  document.getElementById("lihat").style.display = "none";
});

document.getElementById("btnBerlatih").addEventListener("click", function () {
  document.getElementById("berlatih").style.display = "block";
  document.getElementById("btnBerlatih").style.display = "none";
  document.getElementById("berlatih2").style.display = "none";
  document.getElementById("lihat").style.display = "none";
});

var btnPrev = document.getElementById("btnPrev");
var btnHal1 = document.getElementById("btnHal1");
var btnHal2 = document.getElementById("btnHal2");
var btnHal3 = document.getElementById("btnHal3");
var btnNext = document.getElementById("btnNext");

btnHal1.addEventListener("click", function () {
  document.getElementById("card1").style.display = "block";
  // document.getElementById("berlatih2").style.display = 'block';
  document.getElementById("card3").style.display = "none";
  document.getElementById("card4").style.display = "none";
  // document.getElementById("berlatih").style.display ='none';
  btnHal1.classList.add("active");
  btnHal2.classList.remove("active");
  btnHal3.classList.remove("active");
  btnPrev.style.display = "none";
  btnNext.style.display = "block";
});

btnHal2.addEventListener("click", function () {
  document.getElementById("card1").style.display = "none";
  document.getElementById("card3").style.display = "block";
  // document.getElementById("berlatih2").style.display = 'block';
  document.getElementById("card2").style.display = "none";
  // document.getElementById("lihat").style.display = 'none';
  document.getElementById("card4").style.display = "none";
  // document.getElementById("berlatih").style.display ='none';
  btnHal2.classList.add("active");
  btnHal1.classList.remove("active");
  btnHal3.classList.remove("active");
  btnPrev.style.display = "block";
  btnNext.style.display = "block";
});

btnHal3.addEventListener("click", function () {
  document.getElementById("card1").style.display = "none";
  document.getElementById("card2").style.display = "none";
  document.getElementById("card3").style.display = "none";
  // document.getElementById("lihat").style.display ='none';
  document.getElementById("card4").style.display = "block";
  // document.getElementById("berlatih2").style.display ="block";
  btnHal1.classList.remove("active");
  btnHal2.classList.remove("active");
  btnHal3.classList.add("active");
  btnPrev.style.display = "block";
  btnNext.style.display = "none";
});

setInterval(function () {
  if (btnHal1.classList.contains("active")) {
    btnNext.addEventListener("click", function () {
      document.getElementById("card1").style.display = "none";
      document.getElementById("card3").style.display = "block";
      // document.getElementById("berlatih2").style.display = 'block';
      document.getElementById("card2").style.display = "none";
      // document.getElementById("lihat").style.display = 'none';
      document.getElementById("card4").style.display = "none";
      btnHal2.classList.add("active");
      btnHal1.classList.remove("active");
      btnHal3.classList.remove("active");
      btnPrev.style.display = "block";
      btnNext.style.display = "block";
    });
  } else if (btnHal2.classList.contains("active")) {
    btnNext.addEventListener("click", function () {
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "none";
      // document.getElementById("lihat").style.display ='none';
      document.getElementById("card4").style.display = "block";
      // document.getElementById("berlatih2").style.display ="block";
      btnHal1.classList.remove("active");
      btnHal2.classList.remove("active");
      btnHal3.classList.add("active");
      btnPrev.style.display = "block";
      btnNext.style.display = "none";
    });
    btnPrev.addEventListener("click", function () {
      document.getElementById("card1").style.display = "block";
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "none";
      btnHal1.classList.add("active");
      btnHal2.classList.remove("active");
      btnHal3.classList.remove("active");
      btnPrev.style.display = "none";
      btnNext.style.display = "block";
    });
  } else if (btnHal3.classList.contains("active")) {
    btnPrev.addEventListener("click", function () {
      document.getElementById("card1").style.display = "none";
      document.getElementById("card3").style.display = "block";
      // document.getElementById("berlatih2").style.display = 'block';
      document.getElementById("card2").style.display = "none";
      // document.getElementById("lihat").style.display = 'none';
      document.getElementById("card4").style.display = "none";
      // document.getElementById("berlatih").style.display ='none';
      btnHal2.classList.add("active");
      btnHal1.classList.remove("active");
      btnHal3.classList.remove("active");
      btnPrev.style.display = "block";
      btnNext.style.display = "block";
    });
  }
}, 1000);

var jwb1 = document.getElementById("jwb1");
var jwb11 = document.getElementById("jwb11");
var jwb12 = document.getElementById("jwb12");
var jwb21 = document.getElementById("jwb21");
var jwb22 = document.getElementById("jwb22");
var jwb3 = document.getElementById("jwb3");
var jwb31 = document.getElementById("jwb31");
var jwb32 = document.getElementById("jwb32");
var jwb4 = document.getElementById("jwb4");
var jwb41 = document.getElementById("jwb41");
var jwb42 = document.getElementById("jwb42");
var jwb43 = document.getElementById("jwb43");
var jwb44 = document.getElementById("jwb44");
var a = [];

document.getElementById("btnCek").addEventListener("click", function () {
  if (jwb1.value == 2 && jwb11.value == 1 && jwb12.value == 2) {
    document.getElementById("lihat").style.display = "block";
    document.getElementById("berlatih").style.display = "none";
    document.getElementById("berlatih2").style.display = "none";
    jwb1.classList.add("jawabpecahanbenar");
    jwb1.classList.remove("jawabpecahansalah");
    jwb11.classList.add("jawabpecahanbenar");
    jwb11.classList.remove("jawabpecahansalah");
    jwb12.classList.add("jawabpecahanbenar");
    jwb12.classList.remove("jawabpecahansalah");
    a[0] = true;
  } else {
    jwb1.classList.remove("jawabpecahanbenar");
    jwb1.classList.add("jawabpecahansalah");
    jwb11.classList.remove("jawabpecahanbenar");
    jwb11.classList.add("jawabpecahansalah");
    jwb12.classList.remove("jawabpecahanbenar");
    jwb12.classList.add("jawabpecahansalah");
    a[0] = false;
  }

  if (a[0] == true) {
    //   console.log("berhasil")
    document.getElementById("btnCek").style.display = "none";
    document.getElementById("hasilcek").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban kamu benar! Lihat penjelasan jawaban di sebelah kanan.
        </div>
      `;
  } else {
    document.getElementById("hasilcek").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Jawaban kamu masih ada yang salah atau kosong! 
        </div>
      `;
  }
});

document.getElementById("btnCek1").addEventListener("click", function () {
  if (jwb21.value == 27 && jwb22.value == 8) {
    document.getElementById("btnLanjut").style.display = "block";
    jwb21.classList.add("jawabpecahanbenar");
    jwb21.classList.remove("jawabpecahansalah");
    jwb22.classList.add("jawabpecahanbenar");
    jwb22.classList.remove("jawabpecahansalah");
    document.getElementById("btnCek1").style.display = "none";
    document.getElementById("alertHasil1").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb21.classList.remove("jawabpecahanbenar");
    jwb21.classList.add("jawabpecahansalah");
    jwb22.classList.remove("jawabpecahanbenar");
    jwb22.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil1").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Jawaban salah. Ayo coba lagi !!!
        </div>
      `;
  }
});

document.getElementById("btnCek2").addEventListener("click", function () {
  if (jwb3.value == 3 && jwb31.value == 1 && jwb32.value == 2) {
    document.getElementById("btnLanjut2").style.display = "block";
    jwb3.classList.add("jawabpecahanbenar");
    jwb3.classList.remove("jawabpecahansalah");
    jwb31.classList.add("jawabpecahanbenar");
    jwb31.classList.remove("jawabpecahansalah");
    jwb32.classList.add("jawabpecahanbenar");
    jwb32.classList.remove("jawabpecahansalah");
    document.getElementById("btnCek2").style.display = "none";
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Klik soal berikutnya!
        </div>
      `;
  } else {
    jwb3.classList.remove("jawabpecahanbenar");
    jwb3.classList.add("jawabpecahansalah");
    jwb31.classList.remove("jawabpecahanbenar");
    jwb31.classList.add("jawabpecahansalah");
    jwb32.classList.remove("jawabpecahanbenar");
    jwb32.classList.add("jawabpecahansalah");
    document.getElementById("alertHasil2").innerHTML = `
        <div class="alert alert-danger" role="alert">
          Jawaban salah. Ayo coba lagi !!! 
        </div>
      `;
  }
});

document.getElementById("btnCek3").addEventListener("click", function () {
  if (jwb4.value == 1 && jwb41.value == 1 && jwb42.value == 3) {
    jwb4.classList.add("jawabpecahanbenar");
    jwb4.classList.remove("jawabpecahansalah");
    jwb41.classList.add("jawabpecahanbenar");
    jwb41.classList.remove("jawabpecahansalah");
    jwb42.classList.add("jawabpecahanbenar");
    jwb42.classList.remove("jawabpecahansalah");
    a[1] = true;
  } else {
    jwb4.classList.remove("jawabpecahanbenar");
    jwb4.classList.add("jawabpecahansalah");
    jwb41.classList.remove("jawabpecahanbenar");
    jwb41.classList.add("jawabpecahansalah");
    jwb42.classList.remove("jawabpecahanbenar");
    jwb42.classList.add("jawabpecahansalah");
    a[1] = false;
  }

  if (jwb43.value == 4 && jwb44.value == 3) {
    jwb43.classList.add("jawabpecahanbenar");
    jwb43.classList.remove("jawabpecahansalah");
    jwb44.classList.add("jawabpecahanbenar");
    jwb44.classList.remove("jawabpecahansalah");
    a[2] = true;
  } else {
    jwb43.classList.remove("jawabpecahanbenar");
    jwb43.classList.add("jawabpecahansalah");
    jwb44.classList.remove("jawabpecahanbenar");
    jwb44.classList.add("jawabpecahansalah");
    a[2] = false;
  }

  if (a[1] == true && a[2] == true) {
    document.getElementById("halNext").style.display = "block";
    document.getElementById("btnCek3").style.display = "none";
    document.getElementById("alertHasil3").innerHTML = `
        <div class="alert alert-info" role="alert">
            Jawaban benar. Baca materi selanjutnya!
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

halNext.addEventListener("click", function () {
  localStorage.setItem("materi22", "materi22");
  location.href = "/materi/sub2/materi2.html";
});
