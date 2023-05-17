// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ePhZv8xSqO_waYpONtzxWW3cKYKWdYQ",
  authDomain: "register-816dd.firebaseapp.com",
  databaseURL: "https://register-816dd-default-rtdb.firebaseio.com",
  projectId: "register-816dd",
  storageBucket: "register-816dd.appspot.com",
  messagingSenderId: "823212877497",
  appId: "1:823212877497:web:676370d0e7d17ba7489d68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();
const kkmRef = ref(db, "kkm/2");

//reference
let userlink = document.getElementById("userlink");
let nislink = document.getElementById("nislink");
let kelaslink = document.getElementById("kelaslink");
// let sekolahlink = document.getElementById("sekolahlink");

let nama = sessionStorage.getItem("nama");
let nisn = sessionStorage.getItem("nisn");
let kelas = sessionStorage.getItem("kelas");
// let sekolah = sessionStorage.getItem("sekolah");

userlink.innerText = nama;
nislink.innerText = nisn;
kelaslink.innerText = kelas;
// sekolahlink.innerText = sekolah;

// Mulai Kuis
let selanjutnya = document.querySelector("#masuk");
let datasiswa = document.querySelector("#k1");

selanjutnya.addEventListener("click", function () {
  let nama = sessionStorage.getItem("nama");
  let nisn = sessionStorage.getItem("nisn");
  let kelas = sessionStorage.getItem("kelas");
  // let sekolah = sessionStorage.getItem("sekolah");

  if (nama == null) {
    Swal.fire({
      icon: "info",
      title: "Silahkan Login Terlebih Dahulu",
    }).then(() => {
      window.location = "../../index.html";
    });

    // alert('silahkan login terlebih dahulu');
    // window.location = '../index.html';
  } else {
    document.getElementById("k1").className += " hilang";
    datasiswa.className += " hilang";
    document.getElementById("k2").className = document.getElementById("k2").className.replace("hilang", "");
  }
});

window.onload = () => {
  document.getElementById("k2").className += " hilang";
};

// WAKTUUUU
let wktu = document.querySelector("time");
let nilaiwktu = 0;
// countDown();

let countDownDate = new Date().getTime();
//waktu 30 menit
countDownDate += 1801000;
// //waktu 45 menit
// countDownDate += 2700000;
// countDownDate += 12000;
//15 detik
// countDownDate += 17000;
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Perhitungan waktu untuk menit dan detik
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Waktu Selesai";
    nilaiwktu = 1;
  }
}, 1000);

// DATA dan tampil data
let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
  let cek = [];
  let jwbs = [];
  let hasilakhir = 0;
  let benarr = 0;
  let salahh = 0;

  if (dat.readyState == 4 && dat.status == 200) {
    // tankap apapun responsnya tangkap,lalu diubah ke objeck
    let data = JSON.parse(this.responseText);
    // melihat data
    // console.log(data);

    // ---------------------------------
    // acak urutan soal
    //RANDOM URUTAN SOAL
    for (let x = 0; x < 100; x++) {
      // acak angka dengan batas length.data dan minimum 0
      let angka = Math.floor(Math.random() * data.length) + 0;
      cek.push(angka);
    }
    // membuang angka yang sama
    cek = Array.from(new Set(cek));
    console.log(cek);
    // ---------------------------------
    // ambil data tertentu

    for (let i = 0; i < cek.length; i++) {
      let nilai = cek[i];

      let soaldata = data[nilai]["soal" + nilai]["soal"];
      let jwb0 = data[nilai]["soal" + nilai]["a"];
      let jwb1 = data[nilai]["soal" + nilai]["b"];
      let jwb2 = data[nilai]["soal" + nilai]["c"];
      let jwb3 = data[nilai]["soal" + nilai]["d"];

      let bnr = data[nilai]["soal" + nilai]["benar"];

      let jwb = [jwb0, jwb1, jwb2, jwb3];

      jwbs.push(bnr);

      // ---------------------------------
      // // rangkai konten soal;
      // let bg_pertanyaan = document.getElementById('bg_pertanyaan');
      // if (i != 0) {
      //     bg_pertanyaan.className += " hilang";
      // }

      //nomor ke-
      let nomor = document.querySelectorAll(".soal #nomornya");
      nomor[i].innerHTML = i + 1;

      //soal
      let soal = document.querySelectorAll(".bg_soal #soalnya");
      soal[i].innerHTML = soaldata;

      //pilihan a
      let piliha = document.querySelectorAll(".textnya #pil0");
      piliha[i].innerHTML = jwb0;

      //pilihan b
      let pilihb = document.querySelectorAll(".textnya #pil1");
      pilihb[i].innerHTML = jwb1;

      //pilihan c
      let pilihc = document.querySelectorAll(".textnya #pil2");
      pilihc[i].innerHTML = jwb2;

      //pilihan d
      let pilihd = document.querySelectorAll(".textnya #pil3");
      pilihd[i].innerHTML = jwb3;

      let bg_soal = document.getElementsByClassName("bg_soal");

      for (let u = 0; u < bg_soal.length; u++) {
        if (u != 0) {
          if (bg_soal[u].className.indexOf("hilang") == -1) {
            bg_soal[u].className += " hilang";
          }
        }
      }
    }

    let bg_soal = document.getElementsByClassName("bg_soal");

    //fungsi tombol lanjut
    let lanjut = document.querySelectorAll(".nav_selanjut");
    for (let y = 0; y < lanjut.length; y++) {
      lanjut[y].addEventListener("click", function () {
        if (lanjut[y].className.indexOf("disable") == -1) {
          if (bg_soal[y].className.indexOf("hilang") == -1) {
            bg_soal[y + 1].className = bg_soal[y + 1].className.replace("hilang", "");
            bg_soal[y].className += " hilang";
          }
          // console.log(bg_soal[y + 1]);
        }
      });
    }

    //fungsi tombol sebelumnya
    let sebelum = document.querySelectorAll(".nav_sebelum");
    for (let y = 0; y < sebelum.length; y++) {
      sebelum[y].addEventListener("click", function () {
        if (sebelum[y].className.indexOf("disable") == -1) {
          if (bg_soal[y].className.indexOf("hilang") == -1) {
            bg_soal[y - 1].className = bg_soal[y - 1].className.replace("hilang", "");
            bg_soal[y].className += " hilang";
          }
        }
      });
    }

    //navigasi soal
    let no_soal = document.querySelectorAll(".no_soal");
    for (let y = 0; y < no_soal.length; y++) {
      no_soal[y].addEventListener("click", function () {
        for (let u = 0; u < bg_soal.length; u++) {
          if (bg_soal[u].className.indexOf("hilang") == -1) {
            bg_soal[u].className += " hilang";
          }
        }
        bg_soal[y].className = bg_soal[y].className.replace("hilang", "");
      });
    }

    //mewarnai soal yang sdh dijawab
    let pilsoal = document.querySelectorAll(".pilsoal");
    for (let y = 0; y < pilsoal.length; y++) {
      pilsoal[y].addEventListener("click", function () {
        let pilih = document.querySelectorAll(".bg_pil input");
        for (let j = 0; j < pilih.length; j++) {
          pilih[j].addEventListener("click", function () {
            no_soal[y].className = no_soal[y].className.replace("belum", "sudah");
          });
        }
      });
    }

    //cek jawaban
    let selesai = document.querySelector(".selesai");
    let pil_user = [];
    let new_jwb_urut = [];
    let new_jwb_urut_no = [];

    selesai.addEventListener("click", function () {
      let sarat = 0;

      for (let t = 0; t < jwbs.length; t++) {
        if (no_soal[t].className.indexOf("belum") == -1) {
          sarat = sarat + 1;
        }
      }
      // console.log(sarat);

      if (sarat == jwbs.length) {
        // array kunci
        // console.log(jwbs);
        hasilakhir = 0;
        benarr = 0;
        salahh = jwbs.length;

        for (let i = 0; i < jwbs.length; i++) {
          let a = i + 1;
          let namaradio = document.getElementsByName("radio" + a);
          let checked = false;
          for (let j = 0; j < namaradio.length; j++) {
            if (namaradio[j].checked) {
              checked = true;
              pil_user.push(namaradio[j].value);
              if (namaradio[j].value == jwbs[i]) {
                hasilakhir = hasilakhir + 10;
                benarr = benarr + 1;
              } else {
                hasilakhir = hasilakhir;
              }
            }
          }
        }

        for (let i = 0; i < cek.length; i++) {
          for (let j = 0; j < cek.length; j++) {
            if (i == cek[j]) {
              new_jwb_urut.push(pil_user[j]);
              new_jwb_urut_no.push(cek[j]);
            }
          }
        }

        // simpan kedatabase----------
        console.log(nama);
        console.log(nisn);
        console.log(kelas);
        // console.log(sekolah);
        console.log(hasilakhir);
        let waktunya = waktu();
        let harinya = hari();

        createTask(nama, nisn, kelas, hasilakhir, waktunya, harinya, new_jwb_urut);

        let namaget = document.querySelector(".nama");
        namaget.innerText = nama;

        let nisnget = document.querySelector(".nis");
        nisnget.innerText = nisn;

        let kelasget = document.querySelector(".kelas");
        kelasget.innerText = kelas;

        // let sekolahget = document.querySelector(".sekolah");
        // sekolahget.innerText = sekolah;

        let hariget = document.querySelector(".hari");
        hariget.innerText = harinya;

        let waktuget = document.querySelector(".waktu");
        waktuget.innerText = waktunya;

        let hasillget = document.querySelector(".hasill");
        hasillget.textContent = hasilakhir;
        const db = getDatabase();
        onValue(ref(db, "kkm/2"), (snapshot) => {
          const kkm = snapshot.val().kkm;

          let keterangan = "Tidak lulus";
          if (hasilakhir >= kkm) {
            keterangan = "Lulus";
            let materi = document.getElementById("materi");
            materi.className = materi.className.replace("hilang", "");
          } else {
            let ulang = document.getElementById("ulang");
            ulang.className = ulang.className.replace("hilang", "");
          }

          hasillget.innerHTML = `${hasilakhir} ( ${keterangan})`;
        });

        let k2hilang = document.querySelector(".k2");
        k2hilang.className += " hilang";

        // let kananhilang = document.querySelector('.kanan');
        // kananhilang.className += ' hilang';

        let datanya = document.querySelector(".dataaa");
        datanya.className = datanya.className.replace("hilang", "");

        // if (hasilakhir < 60) {
        //   let ulang = document.getElementById("ulang");
        //   ulang.className = ulang.className.replace("hilang", "");
        // } else {
        //   let materi = document.getElementById("materi");
        //   materi.className = materi.className.replace("hilang", "");
        // }
      } else {
        Swal.fire({
          icon: "error",
          title: "Mohon Maaf!",
          text: "Jawablah semua soal terlebih dahulu!",
        });
        // alert(' Jawablah Semua Soal Terlebih Dahulu!');
      }

      //nilai disimpan ke local storage
      localStorage.setItem("skkuis2", hasilakhir);
      sessionStorage.setItem("skkuis2", hasilakhir);
      // console.log(localStorage);
    });
    // if (hassilakhir > 60) {
    //   localStorage.setItem("skkuis2", 1);
    // }
  }
};
//pemanggilan soal json
dat.open("GET", "kuis2.json", true);
dat.send();

// $(document).ready(function () {
//   // mengambil data JSON
//   var data = '{"equation": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"}';
//   var equation = JSON.parse(data).equation;

//   // menampilkan persamaan Matematika menggunakan MathJax
//   $("#equation").html("\\(" + equation + "\\)");
//   MathJax.typeset();
// });

//FUNGSI WAKTU DAN HARI
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);
  return tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds();
}

// harinya
function hari() {
  let tanggallengkap = new String();
  let namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
  namahari = namahari.split(" ");
  let namabulan = "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
  namabulan = namabulan.split(" ");
  let tgl = new Date();
  let hari = tgl.getDay();
  let tanggal = tgl.getDate();
  let bulan = tgl.getMonth();
  let tahun = tgl.getFullYear();
  tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
  return tanggallengkap;
}

// Firebase
function createTask(nama, nisn, kelas, nilai, waktunya, hari, jwb) {
  counter += 1;
  const db = getDatabase();
  set(ref(db, "kuis2/" + counter), {
    id: counter,
    nama: nama,
    nisn: nisn,
    kelas: kelas,

    nilai: nilai,
    waktu: waktunya,
    hari: hari,
    jawabannya: jwb,
  });
}
