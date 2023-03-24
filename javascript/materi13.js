const btn_warna = document.querySelector(".warna");
const bg_warna = document.querySelector(".warna_pilih");
const pilih_warna = document.querySelectorAll(".warnanya");
const html = document.querySelector("html");
const navigasi = document.querySelectorAll(".nihhh");
const navigasi_sub = document.querySelectorAll(".sub-bagian");
let bg_navigasi = document.getElementById("nav");
let konten = document.getElementById("konten");
let navi = document.querySelector(".icon");

// load awal halaman
if (localStorage.getItem("color") != null) {
  html.dataset.colorMode = localStorage.getItem("color");
}
bg_tutup.classList.toggle("tutup");

// warna
for (let i = 0; i < pilih_warna.length; i++) {
  pilih_warna[i].addEventListener("click", function () {
    if (html.dataset.colorMode != pilih_warna[i].attributes.name.nodeValue) {
      html.dataset.colorMode = pilih_warna[i].attributes.name.nodeValue;
      localStorage.setItem("color", pilih_warna[i].attributes.name.nodeValue);
    }
  });
}

btn_warna.addEventListener("click", function () {
  bg_warna.classList.toggle("hilang");
  console.log(bg_warna);
});

// navigasi
for (let i = 0; i < navigasi.length - 1; i++) {
  navigasi[i].addEventListener("click", function () {
    console.log("ok");
    if (navigasi_sub[i].className.indexOf("hilang") == -1) {
      navigasi_sub[i].classList.toggle("hilang");
    } else {
      navigasi_sub[i].classList.toggle("hilang");
    }
  });
}

// menu navigasi
navi.addEventListener("click", function () {
  console.log("ok");
  if (bg_navigasi.className.indexOf("navigasi-hilang") == -1) {
    bg_navigasi.classList.toggle("navigasi-hilang");
    konten.className = konten.className.replace("konten", "konten-penuh");
  } else {
    bg_navigasi.classList.toggle("navigasi-hilang");
    konten.className = konten.className.replace("konten-penuh", "konten");
  }
});

let soal1 = ["\\[a+8a-7b-b = . . . .\\]", "\\[2a+6a-5b+b = . . . .\\]", "\\[11x+5y-6x+2y = . . . .\\]", "\\[2x+7y-5x-5y = . . . .\\]", "\\[-4y+7y+5x-2y= . . . .\\]"];
let kunci = [
  ["+9a", "-8b"],
  ["+8a", "-4b"],
  ["+5x", "+7y"],
  ["-3x", "-2y"],
  ["+1y", "+5x"],
];
let pembahasanket = [
  '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[a + 8 a - 7 b - b\\] </p> <p class = "masuk aau" > \\[ = (a + 8 a) + (-7 b - b)\\] </p> <p class = "masuk aau" > \\[ = (9 a) + (-8 b)\\] </p> <p class = "masuk aau" > \\[ = 9 a - 8 b\\] </p>',
  '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[2a + 6a - 5b +b\\] </p> <p class = "masuk aau" > \\[ = (2a + 6 a) + (-7b + b)\\] </p> <p class = "masuk aau" > \\[ = (8a) + (-4b)\\] </p> <p class = "masuk aau" > \\[ = 8a - 4b\\] </p>',
  '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[11x + 5y -6x + 2y\\] </p> <p class = "masuk aau" > \\[ = (11x - 6x) + (5y + 2y)\\] </p> <p class = "masuk aau" > \\[ = (5x) + (7y)\\] </p> <p class = "masuk aau" > \\[ = 5x+7y\\] </p>',
  '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[2x + 7y -5x -5y\\] </p> <p class = "masuk aau" > \\[ = (2x - 5x) + (7y -5y)\\] </p> <p class = "masuk aau" > \\[ = (-3x) + (-2y)\\] </p> <p class = "masuk aau" > \\[ = -3x-2y\\] </p>',
  '<p class="masuk aau">Pembahasan :</p> <p class = "masuk aau" > \\[-4y +7y +5x -2y\\] </p> <p class = "masuk aau" > \\[ = (-4y+7y-2y) + (5x)\\] </p> <p class = "masuk aau" > \\[ = (y) + (5x)\\] </p> <p class = "masuk aau" > \\[ = y+5x\\] </p>',
];

// pertanyaan 2
let soal2 = ["\\[2x^2+4-x^2-3 = . . . .\\]", "\\[5x^2+3x^2-2y+5= . . . .\\]"];
let pembahasanket2 = [
  ' <p class = "masuk aau" > Pembahasan: </p> <p class = "masuk aau"> \\[2 x ^ 2 + 4 - x ^ 2 - 3\\] </p> <p class = "masuk aau" > \\[ = (2 x ^ 2 - x ^ 2) + (4 - 3)\\] </p> <p class = "masuk aau" > \\[ = (x ^ 2) + (1)\\] </p> <p class = "masuk aau" > \\[ = x ^ 2 + 1\\] </p>',
  ' <p class = "masuk aau" > Pembahasan: </p> <p class = "masuk aau"> \\[5x^2+3x^2-2y+5\\] </p> <p class = "masuk aau" > \\[ = (5x^2+3x^2) + (-2y)+(5)\\] </p> <p class = "masuk aau" > \\[ = (8x ^ 2) + (-2y)+(5)\\] </p> <p class = "masuk aau" > \\[ = 8x ^ 2 -2y + 5\\] </p>',
];
let kunci1 = [
  ["+x2", "+1"],
  ["+8x2", "-2y", "+5"],
];
let syarat_pertanyaan2 = ["2", "3"];

let ket_pembahasann = document.querySelector(".pembahasantnya1");
let soalnya_nih = document.querySelector(".soalnya_nih");
let acang_angka = Math.floor(Math.random() * soal1.length);

// kunci jawaban pertanyaan 1
let jwb_benar = kunci[acang_angka];

// kunci jawaban pertanyaan 2
let jwb_benarr = kunci1[0];
let pnjang_jawaban = syarat_pertanyaan2[0];

// tombol ubah 1
let tmbl_ubah = document.querySelector(".ubah1");
tmbl_ubah.addEventListener("click", function () {
  let ket_pembahasann = document.querySelector(".pembahasantnya1");
  let soalnya_nih = document.querySelector(".soalnya_nih");
  let acang_angka = Math.floor(Math.random() * soal1.length);
  let kete = document.querySelector(".kete");
  let gambar = document.querySelector(".ketgambar");
  let inpunya = document.querySelector(".ptnya");
  console.log(acang_angka);
  jwb_benar = kunci[acang_angka];

  if (ket_pembahasann.className.indexOf("hilang1") == -1) {
    ket_pembahasann.className += " hilang1";
    console.log("ok");
  }
  if (kete.className.indexOf("hilang1") == -1) {
    kete.className += " hilang1";
  }
  if (gambar.className.indexOf("hilang1") == -1) {
    gambar.className += " hilang1";
  }
  if (inpunya.className.indexOf("salah") != -1) {
    inpunya.className = inpunya.className.replace("salah", "");
  }

  inputnya.value = "";

  soalnya_nih.innerHTML = soal1[acang_angka];
  ket_pembahasann.innerHTML = pembahasanket[acang_angka];

  MathJax.typeset();
});

// tombol ubah 2
let tmbl_ubah2 = document.querySelector(".ubah2");
tmbl_ubah2.addEventListener("click", function () {
  console.log("ok");
  let soalnya_nih = document.querySelector(".soalnya2");
  let acang_angka = Math.floor(Math.random() * soal2.length);
  let tmpt_jwb = document.querySelector(".jwbnya_nih");
  let tmbl = document.querySelector(".tombolnih");
  let ket_pembahasann = document.querySelector(".pembahasantnya2");
  let kete = document.querySelector(".kete1");
  let gambar = document.querySelector(".ggmbr");

  jwb_benarr = kunci1[acang_angka];
  pnjang_jawaban = syarat_pertanyaan2[acang_angka];
  soalnya_nih.innerHTML = soal2[acang_angka];
  ket_pembahasann.innerHTML = pembahasanket2[acang_angka];

  tmpt_jwb.innerText = "Tekan Saya";
  if (tmpt_jwb.className.indexOf("black") != -1) {
    tmpt_jwb.className = tmpt_jwb.className.replace("black", "");
    tmbl.className += " hilang1";
  }

  if (ket_pembahasann.className.indexOf("hilang1") == -1) {
    ket_pembahasann.className += " hilang1";
    console.log("ok");
  }
  if (kete.className.indexOf("hilang1") == -1) {
    kete.className += " hilang1";
  }
  if (gambar.className.indexOf("hilang1") == -1) {
    gambar.className += " hilang1";
  }

  MathJax.typeset();
});

// saat halaman dimuat
window.onload = function () {
  inputnya.value = "";
  inputnya3.value = "";

  soalnya_nih.innerHTML = soal1[acang_angka];
  ket_pembahasann.innerHTML = pembahasanket[acang_angka];

  MathJax.typeset();
};

// saat tombol icon diklik lakukan
let nav = document.querySelector(".icon");
nav.addEventListener("click", function () {
  let navigasi = document.getElementById("nav");
  let konten = document.getElementById("konten");

  if (navigasi.className.indexOf("navigasi-hilang") == -1) {
    navigasi.className += " navigasi-hilang";
    konten.className = konten.className.replace("konten", "konten-penuh");
  } else {
    navigasi.className = navigasi.className.replace("navigasi-hilang", "");
    konten.className = konten.className.replace("konten-penuh", "konten");
  }
});

// subbab sembunyikan dan tampilkan
let materi = document.querySelectorAll(".navigasi li .nihhh");
let submateri = document.querySelectorAll(" .sub-bagian");
for (let i = 0; i < materi.length; i++) {
  materi[i].addEventListener("click", function () {
    submateri[i].classList.toggle("hilang");
  });
}

// petunjuk
let petunjunya = document.querySelectorAll(".petunjuk");
let isinya = document.querySelectorAll(".isinya");
for (let i = 0; i < petunjunya.length; i++) {
  petunjunya[i].addEventListener("click", function () {
    isinya[i].classList.toggle("hilang");
  });
}

// bg_pertanyaan next back
let bgnyaa = document.querySelectorAll(".pertanyaann");
let sbnya = document.querySelectorAll(".sb");
let slnya = document.querySelectorAll(".sl");
for (let i = 0; i < slnya.length; i++) {
  slnya[i].addEventListener("click", function () {
    console.log("ok");
    if (slnya[i].className.indexOf("disable") == -1) {
      if (bgnyaa[i].className.indexOf("hilang") == -1) {
        bgnyaa[i].className += " hilang";
        bgnyaa[i + 1].className = bgnyaa[i + 1].className.replace("hilang", "");
      }
    }
  });
}
for (let i = 0; i < sbnya.length; i++) {
  sbnya[i].addEventListener("click", function () {
    console.log("ok");
    if (sbnya[i].className.indexOf("disable") == -1) {
      if (bgnyaa[i].className.indexOf("hilang") == -1) {
        bgnyaa[i].className += " hilang";
        bgnyaa[i - 1].className = bgnyaa[i - 1].className.replace("hilang", "");
      }
    }
  });
}

// cek klik
let tmbl = document.querySelector(".cek");
let bgpertanyaan1 = document.querySelector(".pembahasantnya1");
let keterangannya = document.querySelectorAll(".kete");
let ketgambar = document.querySelectorAll(".ketgambar");
let inputnya = document.querySelector(".ptnya");

// pertanyaan 1 ----------------
// ubah inputan jadi huruf kecil

inputnya.addEventListener("keyup", function () {
  inputnya.value = inputnya.value.toLowerCase();

  inputnya.value = inputnya.value.split(" ").join("");
});

tmbl.addEventListener("click", function () {
  let hasilnyaa = [];
  let new_hasil = [];

  if (inputnya.value == "") {
    if (inputnya.className.indexOf("salah") == -1) {
      inputnya.className += " salah";
    }
    keterangannya[0].innerText = "* Jawaban Masih Kosong";
    if (keterangannya[0].className.indexOf("hilang1") != -1) {
      keterangannya[0].className = keterangannya[0].className.replace("hilang1", "");
    }
    if (keterangannya[0].className.indexOf("red") == -1) {
      keterangannya[0].className += " red";
    }

    ketgambar[0].src = "gambar/salah.png";
    if (ketgambar[0].className.indexOf("hilang1") != -1) {
      ketgambar[0].className = ketgambar[0].className.replace("hilang1", "");
    }
  } else if (inputnya.value != "") {
    console.log("ok");
    let jawabannya1 = inputnya.value.split(" ").join("");
    jawabannya1 = jawabannya1.split(".").join("");

    // potong inputan dengan batas +
    hasilnya = jawabannya1.split("+");
    for (let i = 0; i < hasilnya.length; i++) {
      if (hasilnya[i].indexOf("-") != 0) {
        var validasiAngka = /^[1-9]+$/;
        if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
          hasilnya[i] = "+1" + hasilnya[i];
        } else {
          hasilnya[i] = "+" + hasilnya[i];
        }
      }
    }

    // potong inputan dengan batas -
    for (let i = 0; i < hasilnya.length; i++) {
      hasilnyaa.push(hasilnya[i].split("-"));
    }

    // gabungkan array jadi satu baris
    for (let i = 0; i < hasilnyaa.length; i++) {
      if (hasilnyaa[i].length > 0) {
        for (let j = 0; j < hasilnyaa[i].length; j++) {
          new_hasil.push(hasilnyaa[i][j]);
        }
      } else {
        new_hasil.push(hasilnyaa[i]);
      }
    }

    // cek baris pertama jika ada ''
    if (new_hasil[0] == "") {
      new_hasil.shift();
    }

    // tambahkan - pada awalnya
    for (i = 0; i < new_hasil.length; i++) {
      if (new_hasil[i].indexOf("+") != 0) {
        var validasiAngka = /^[1-9]+$/;
        if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
          new_hasil[i] = "-1" + new_hasil[i];
        } else {
          new_hasil[i] = "-" + new_hasil[i];
        }
      }
    }
    console.log(new_hasil);

    // cek jawaban
    let sarat = 0;
    if (new_hasil.length == 2) {
      for (let i = 0; i < jwb_benar.length; i++) {
        for (let j = 0; j < new_hasil.length; j++) {
          if (jwb_benar[i] == new_hasil[j]) {
            sarat += 1;
            delete new_hasil[j];
          }
        }
      }

      if (sarat == 2) {
        if (inputnya.className.indexOf("salah") != -1) {
          inputnya.className = inputnya.className.replace("salah", "");
        }
        keterangannya[0].innerText = "* Jawaban Benar";
        if (keterangannya[0].className.indexOf("hilang1") != -1) {
          keterangannya[0].className = keterangannya[0].className.replace("hilang1", "");
        }
        if (keterangannya[0].className.indexOf("red") != -1) {
          keterangannya[0].className = keterangannya[0].className.replace("red", "");
        }

        ketgambar[0].src = "gambar/benar.png";
        if (ketgambar[0].className.indexOf("hilang1") != -1) {
          ketgambar[0].className = ketgambar[0].className.replace("hilang1", "");
        }
        if (bgpertanyaan1.className.indexOf("hilang1") == -1) {
          bgpertanyaan1.className += " hilang1";
        }
      } else {
        if (bgpertanyaan1.className.indexOf("hilang1") != -1) {
          bgpertanyaan1.className = bgpertanyaan1.className.replace("hilang1", "");
        }
        if (inputnya.className.indexOf("salah") == -1) {
          inputnya.className += " salah";
        }
        keterangannya[0].innerText = "* Jawaban Salah";
        if (keterangannya[0].className.indexOf("hilang1") != -1) {
          keterangannya[0].className = keterangannya[0].className.replace("hilang1", "");
        }
        if (keterangannya[0].className.indexOf("red") == -1) {
          keterangannya[0].className += " red";
        }

        ketgambar[0].src = "gambar/salah.png";
        if (ketgambar[0].className.indexOf("hilang1") != -1) {
          ketgambar[0].className = ketgambar[0].className.replace("hilang1", "");
        }
      }
    } else {
      if (bgpertanyaan1.className.indexOf("hilang1") != -1) {
        bgpertanyaan1.className = bgpertanyaan1.className.replace("hilang1", "");
      }
      if (inputnya.className.indexOf("salah") == -1) {
        inputnya.className += " salah";
      }
      keterangannya[0].innerText = "* Jawaban Salah";
      if (keterangannya[0].className.indexOf("hilang1") != -1) {
        keterangannya[0].className = keterangannya[0].className.replace("hilang1", "");
      }
      if (keterangannya[0].className.indexOf("red") == -1) {
        keterangannya[0].className += " red";
      }

      ketgambar[0].src = "gambar/salah.png";
      if (ketgambar[0].className.indexOf("hilang1") != -1) {
        ketgambar[0].className = ketgambar[0].className.replace("hilang1", "");
      }
    }
  }
});

// pertanyaan 2
let tmpt_jwb = document.querySelector(".jwbnya_nih");
let bg_tmbl = document.querySelector(".tombolnih");
let tmbls = document.querySelectorAll(".tmbl");
let bgpembahasan = document.querySelector(".pembahasantnya2");
let ketenya2 = document.querySelector(".kete1");
let ketgambar2 = document.querySelector(".ggmbr");

tmpt_jwb.addEventListener("click", function () {
  tmpt_jwb.classList.toggle("black");
  bg_tmbl.classList.toggle("hilang1");
});

for (let i = 0; i < tmbls.length; i++) {
  tmbls[i].addEventListener("click", function () {
    input_jawaban = tmpt_jwb.innerText;
    console.log(i);

    if (input_jawaban == "Tekan Saya") {
      if (i != 16 && i != 13 && i != 14 && i != 7 && i != 20) {
        tmpt_jwb.innerText = "";
        let bgnya = document.createElement("span");
        let text = document.createTextNode(tmbls[i].innerText);
        bgnya.appendChild(text);
        tmpt_jwb.appendChild(bgnya);
        // tmpt_jwb.innerText = tmbls[i].innerText;
      }
      if (i == 7) {
        tmpt_jwb.innerText = "";
      } else if (i == 13) {
        if (input_jawaban == "Tekan Saya") {
          tmpt_jwb.innerText = "";
        }
        let bgnya = document.createElement("span");
        let bgnya1 = document.createElement("span");
        let pangakat = document.createElement("sup");
        let text = document.createTextNode("2");
        let text1 = document.createTextNode("x");

        bgnya1.appendChild(text1);
        tmpt_jwb.appendChild(bgnya1);

        pangakat.appendChild(text);
        bgnya.appendChild(pangakat);
        tmpt_jwb.appendChild(bgnya);
      } else if (i == 14) {
        if (input_jawaban == "Tekan Saya") {
          tmpt_jwb.innerText = "";
        }
        let bgnya = document.createElement("span");
        let bgnya1 = document.createElement("span");
        let pangakat = document.createElement("sup");
        let text = document.createTextNode("2");
        let text1 = document.createTextNode("y");

        bgnya1.appendChild(text1);
        tmpt_jwb.appendChild(bgnya1);

        pangakat.appendChild(text);
        bgnya.appendChild(pangakat);
        tmpt_jwb.appendChild(bgnya);
      }
    } else {
      if (i == 7) {
        tmpt_jwb.innerText = "";
      } else if (i == 13) {
        let bgnya = document.createElement("span");
        let bgnya1 = document.createElement("span");
        let pangakat = document.createElement("sup");
        let text = document.createTextNode("2");
        let text1 = document.createTextNode("x");

        bgnya1.appendChild(text1);
        tmpt_jwb.appendChild(bgnya1);

        pangakat.appendChild(text);
        bgnya.appendChild(pangakat);
        tmpt_jwb.appendChild(bgnya);
      } else if (i == 14) {
        let bgnya = document.createElement("span");
        let bgnya1 = document.createElement("span");
        let pangakat = document.createElement("sup");
        let text = document.createTextNode("2");
        let text1 = document.createTextNode("y");

        bgnya1.appendChild(text1);
        tmpt_jwb.appendChild(bgnya1);

        pangakat.appendChild(text);
        bgnya.appendChild(pangakat);
        tmpt_jwb.appendChild(bgnya);
      } else if (i == 3) {
        let hapus = document.querySelectorAll(".jwbnya_nih span");
        tmpt_jwb.removeChild(hapus[hapus.length - 1]);
      } else if (i == 20) {
        let jawaban = document.querySelectorAll(".jwbnya_nih span");
        let gabung = "";
        for (let j = 0; j < jawaban.length; j++) {
          gabung += jawaban[j].innerText;
        }
        console.log(gabung);

        let hasilnyaa = [];
        let new_hasil = [];

        hasilnya = gabung.split("+");
        for (let j = 0; j < hasilnya.length; j++) {
          if (hasilnya[j].indexOf("-") != 0) {
            var validasiAngka = /^[1-9]+$/;
            if (hasilnya[j].length == 1 && hasilnya[j].match(validasiAngka) == null) {
              hasilnya[j] = "+1" + hasilnya[j];
            } else {
              hasilnya[j] = "+" + hasilnya[j];
            }
          }
        }

        // potong inputan dengan batas -
        for (let j = 0; j < hasilnya.length; j++) {
          hasilnyaa.push(hasilnya[j].split("-"));
        }

        // // gabungkan array jadi satu baris
        for (let j = 0; j < hasilnyaa.length; j++) {
          if (hasilnyaa[j].length > 0) {
            for (let k = 0; k < hasilnyaa[j].length; k++) {
              new_hasil.push(hasilnyaa[j][k]);
            }
          } else {
            new_hasil.push(hasilnyaa[j]);
          }
        }

        // // cek baris pertama jika ada ''
        if (new_hasil[0] == "") {
          new_hasil.shift();
        }

        // // tambahkan - pada awalnya
        for (j = 0; j < new_hasil.length; j++) {
          if (new_hasil[j].indexOf("+") != 0) {
            var validasiAngka = /^[1-9]+$/;
            if (new_hasil[j].length == 1 && new_hasil[j].match(validasiAngka) == null) {
              new_hasil[j] = "-1" + new_hasil[j];
            } else {
              new_hasil[j] = "-" + new_hasil[j];
            }
          }
        }
        console.log(new_hasil);

        let sarat = 0;
        if (new_hasil.length == pnjang_jawaban) {
          for (let i = 0; i < jwb_benarr.length; i++) {
            for (let j = 0; j < new_hasil.length; j++) {
              if (jwb_benarr[i] == new_hasil[j]) {
                sarat += 1;
                delete new_hasil[j];
              }
            }
          }
        }
        console.log(sarat);

        console.log(jwb_benarr);
        console.log(pnjang_jawaban);
        if (sarat == pnjang_jawaban) {
          ketgambar2.src = "gambar/benar.png";
          if (ketgambar2.className.indexOf("hilang1") != -1) {
            ketgambar2.className = ketgambar2.className.replace("hilang1", "");
          }
          ketenya2.innerText = "Jawaban Benar";
          if (ketenya2.className.indexOf("hilang1") != -1) {
            ketenya2.className = ketenya2.className.replace("hilang1", "");
          }
          if (ketenya2.className.indexOf("red") != -1) {
            ketenya2.className = ketenya2.className.replace("red", "");
          }
          if (bgpembahasan.className.indexOf("hilang1") == -1) {
            bgpembahasan.className += " hilang1";
          }

          tmpt_jwb.classList.toggle("black");
          bg_tmbl.classList.toggle("hilang1");
        } else {
          if (bgpembahasan.className.indexOf("hilang1") != -1) {
            bgpembahasan.className = bgpembahasan.className.replace("hilang1", "");
          }
          tmpt_jwb.classList.toggle("black");
          bg_tmbl.classList.toggle("hilang1");

          ketenya2.innerText = "Jawaban Salah";
          if (ketenya2.className.indexOf("hilang1") != -1) {
            ketenya2.className = ketenya2.className.replace("hilang1", "");
          }
          if (ketenya2.className.indexOf("red") == -1) {
            ketenya2.className += " red";
          }
          ketgambar2.src = "gambar/salah.png";
          if (ketgambar2.className.indexOf("hilang1") != -1) {
            ketgambar2.className = ketgambar2.className.replace("hilang1", "");
          }
        }

        console.log(gabung);
      } else {
        let bgnya = document.createElement("span");
        let text = document.createTextNode(tmbls[i].innerText);
        bgnya.appendChild(text);
        tmpt_jwb.appendChild(bgnya);
      }
    }

    MathJax.typeset();
  });
}

// pertanyaan 3
// cek klik
let tmbl1 = document.querySelector(".cek1");
let bgpertanyaan3 = document.querySelector(".pembahasantnya3");
let keterangannya3 = document.querySelectorAll(".kete3");
let ketgambar3 = document.querySelectorAll(".asa3");
let inputnya3 = document.querySelector(".ptnya3");
let jwb_benar9 = ["+2s", "+4r"];

// ubah inputan jadi huruf kecil
inputnya3.addEventListener("keyup", function () {
  inputnya3.value = inputnya3.value.toLowerCase();

  inputnya3.value = inputnya3.value.split(" ").join("");
});

tmbl1.addEventListener("click", function () {
  let hasilnyaa = [];
  let new_hasil = [];

  if (inputnya3.value == "") {
    if (inputnya3.className.indexOf("salah") == -1) {
      inputnya3.className += " salah";
    }
    keterangannya3[0].innerText = "* Jawaban Masih Kosong";
    if (keterangannya3[0].className.indexOf("hilang1") != -1) {
      keterangannya3[0].className = keterangannya3[0].className.replace("hilang1", "");
    }
    if (keterangannya3[0].className.indexOf("red") == -1) {
      keterangannya3[0].className += " red";
    }

    ketgambar3[0].src = "gambar/salah.png";
    if (ketgambar3[0].className.indexOf("hilang1") != -1) {
      ketgambar3[0].className = ketgambar3[0].className.replace("hilang1", "");
    }
  } else if (inputnya3.value != "") {
    console.log("ok");
    let jawabannya1 = inputnya3.value.split(" ").join("");
    jawabannya1 = jawabannya1.split(".").join("");

    // potong inputan dengan batas +
    hasilnya = jawabannya1.split("+");
    for (let i = 0; i < hasilnya.length; i++) {
      if (hasilnya[i].indexOf("-") != 0) {
        var validasiAngka = /^[1-9]+$/;
        if (hasilnya[i].length == 1 && hasilnya[i].match(validasiAngka) == null) {
          hasilnya[i] = "+1" + hasilnya[i];
        } else {
          hasilnya[i] = "+" + hasilnya[i];
        }
      }
    }

    // potong inputan dengan batas -
    for (let i = 0; i < hasilnya.length; i++) {
      hasilnyaa.push(hasilnya[i].split("-"));
    }

    // gabungkan array jadi satu baris
    for (let i = 0; i < hasilnyaa.length; i++) {
      if (hasilnyaa[i].length > 0) {
        for (let j = 0; j < hasilnyaa[i].length; j++) {
          new_hasil.push(hasilnyaa[i][j]);
        }
      } else {
        new_hasil.push(hasilnyaa[i]);
      }
    }

    // cek baris pertama jika ada ''
    if (new_hasil[0] == "") {
      new_hasil.shift();
    }

    // tambahkan - pada awalnya
    for (i = 0; i < new_hasil.length; i++) {
      if (new_hasil[i].indexOf("+") != 0) {
        var validasiAngka = /^[1-9]+$/;
        if (new_hasil[i].length == 1 && new_hasil[i].match(validasiAngka) == null) {
          new_hasil[i] = "-1" + new_hasil[i];
        } else {
          new_hasil[i] = "-" + new_hasil[i];
        }
      }
    }
    console.log(new_hasil);

    // cek jawaban
    let sarat = 0;
    if (new_hasil.length == 2) {
      for (let i = 0; i < jwb_benar9.length; i++) {
        for (let j = 0; j < new_hasil.length; j++) {
          if (jwb_benar9[i] == new_hasil[j]) {
            sarat += 1;
            delete new_hasil[j];
          }
        }
      }

      if (sarat == 2) {
        if (inputnya3.className.indexOf("salah") != -1) {
          inputnya3.className = inputnya3.className.replace("salah", "");
        }
        keterangannya3[0].innerText = "* Jawaban Benar";
        if (keterangannya3[0].className.indexOf("hilang1") != -1) {
          keterangannya3[0].className = keterangannya3[0].className.replace("hilang1", "");
        }
        if (keterangannya3[0].className.indexOf("red") != -1) {
          keterangannya3[0].className = keterangannya3[0].className.replace("red", "");
        }

        ketgambar3[0].src = "gambar/benar.png";
        if (ketgambar3[0].className.indexOf("hilang1") != -1) {
          ketgambar3[0].className = ketgambar3[0].className.replace("hilang1", "");
        }
        if (bgpertanyaan3.className.indexOf("hilang1") == -1) {
          bgpertanyaan3.className += " hilang1";
        }
      } else {
        if (bgpertanyaan3.className.indexOf("hilang1") != -1) {
          bgpertanyaan3.className = bgpertanyaan3.className.replace("hilang1", "");
        }
        if (inputnya3.className.indexOf("salah") == -1) {
          inputnya3.className += " salah";
        }
        keterangannya3[0].innerText = "* Jawaban Salah";
        if (keterangannya3[0].className.indexOf("hilang1") != -1) {
          keterangannya3[0].className = keterangannya3[0].className.replace("hilang1", "");
        }
        if (keterangannya3[0].className.indexOf("red") == -1) {
          keterangannya3[0].className += " red";
        }

        ketgambar3[0].src = "gambar/salah.png";
        if (ketgambar3[0].className.indexOf("hilang1") != -1) {
          ketgambar3[0].className = ketgambar3[0].className.replace("hilang1", "");
        }
      }
    } else {
      if (bgpertanyaan3.className.indexOf("hilang1") != -1) {
        bgpertanyaan3.className = bgpertanyaan3.className.replace("hilang1", "");
      }
      if (inputnya3.className.indexOf("salah") == -1) {
        inputnya3.className += " salah";
      }
      keterangannya3[0].innerText = "* Jawaban Salah";
      if (keterangannya3[0].className.indexOf("hilang1") != -1) {
        keterangannya3[0].className = keterangannya3[0].className.replace("hilang1", "");
      }
      if (keterangannya3[0].className.indexOf("red") == -1) {
        keterangannya3[0].className += " red";
      }

      ketgambar3[0].src = "gambar/salah.png";
      if (ketgambar3[0].className.indexOf("hilang1") != -1) {
        ketgambar3[0].className = ketgambar3[0].className.replace("hilang1", "");
      }
    }
  }
});
