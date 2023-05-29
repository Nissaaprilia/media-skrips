// Konfigurasi FIRE BASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

import { getDatabase, ref, set, push, child, onValue, get, update, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
// let userlink = document.getElementById("userlink");
// let nisnlink = document.getElementById("nisnlink");
// let signoutlink = document.getElementById("signoutlink");
// let nama = sessionStorage.getItem("nama");
// let kelas = sessionStorage.getItem("kelas");

let nisn = sessionStorage.getItem("nisn");

// const getKelas = new Promise((resolve, reject) => {
//   const antri = query(ref(db, "kelas/"));
//   onValue(antri, (snapshot) => {
//     const kelas = snapshot.val();
//     resolve(kelas);
//   });
// });

onValue(ref(db, "DataSiswa/" + nisn), (snapshot) => {
  const users = snapshot.val();
  $("#namaSiswa, #userlink").html(users.fullname);
  $("#nisnlink").html(users.nisn);
  // //   $("#absSiswa").html(users.absen);
  $("#kelas").html(users.kelas);
  console.log(nisn);
});

onValue(ref(db, "kuis1/" + nisn), (snapshot) => {
  const kuis1 = snapshot.val();
  $("#kuis1").html(kuis1.nilai);
  console.log(kuis1);
});

onValue(ref(db, "kuis2/" + nisn), (snapshot) => {
  const kuis2 = snapshot.val();
  if ((kuis1 = snapshot)) $("#kuis2").html(kuis2.nilai);
  console.log(kuis2);
});

onValue(ref(db, "evaluasi/" + nisn), (snapshot) => {
  const evaluasi = snapshot.val();
  if (evaluasi != null) {
    $("#evaluasi").html(evaluasi.nilai);
    console.log(evaluasi);
  }
});
