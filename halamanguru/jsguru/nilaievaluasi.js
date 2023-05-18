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

import { getDatabase, ref, set, child, get, onValue, remove, update, onChildAdded } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();

let idnya = [];
let soal = document.getElementById("soal");
let tmp = document.querySelector("#tbody1");
tmp.innerHTML = "";
let kelas = document.getElementById("kelas");
// let sekolah = document.getElementById('sekolah');
// sekolah = document.getElementById('sekolah');
let kelasfix = "";
let sekolahfix = "";
let cek11 = 0;

let cari = document.querySelector("#cari");
// datahasil = soalnya.value;
cari.addEventListener("click", function () {
  let datahasil = soal.value;
  // console.log(datahasil);
  var task = ref(db, datahasil);
  tmp.innerHTML = "";
  if (kelas.value == "1") {
    kelasfix = "V (A)";
  }
  // if (kelas.value == "2") {
  //   kelasfix = "V (B)";
  // }
  // if (sekolah.value == '3') {
  //   sekolahfix = 'SMPN 1';
  // } else if (sekolah.value == '4') {
  //   sekolahfix = 'SMPN 2';
  // }
  if (kelasfix != "") {
    //&& sekolahfix != ''
    onChildAdded(task, (data) => {
      // task.on("child_added", function (data) {
      var taskvalue = data.val();
      var i = 0;

      if (kelasfix == taskvalue.kelas) {
        //&& sekolahfix == taskvalue.sekolah
        tmp.innerHTML += `<tr>
              <td>${taskvalue.nama}</td>
              <td>${taskvalue.nisn}</td>
              <td>${taskvalue.kelas}</td>
              
              <td>${taskvalue.nilai}</td>
              <td>${taskvalue.waktu}</td>
              <td>${taskvalue.hari}</td>
          </tr>`;
        idnya.push(taskvalue.id);
        // <td>${taskvalue.sekolah}</td>
      }
    });
  } else {
    $("#ModalFilter").modal("show");
  }
});

// download data
// downloadData.addEventListener("click", function () {
//   if (kelas.value == "1") {
//     kelasfix = "V (A) ";
//   } else if (kelas.value == "2") {
//     kelasfix = "V (B)";
//   }

//   document.querySelector(".download");
//   // download.addEventListener('click', function () {
//   var data_type = "data:application/vnd.ms-excel";
//   var table_div = document.getElementById("table_wrapper");

//   if (table_div.rows.length == 0) {
//     $("#ModalDownload").modal("show");
//   } else {
//     var table_html = table_div.outerHTML.replace(/ /g, "%20");

//     var a = document.createElement("a");
//     a.href = data_type + ", " + table_html;
//     a.download = `Nilai_${kelasfix}.xls`;
//     a.click();
//   }
// });
// function downloadfile() {
//   if (kelas.value == '1') {
//     kelasfix = 'VIII A';
//   } else if (kelas.value == '2') {
//     kelasfix = 'VIII B';
//   } else if (kelas.value == '3') {
//     kelasfix = 'VIII C';
//   }

//   document.querySelector('.download');
//   // download.addEventListener('click', function () {
//   var data_type = 'data:application/vnd.ms-excel';
//   var table_div = document.getElementById('table_wrapper');

//   if (table_div.rows.length <= 1) {
//     $('#ModalDownload').modal('show');
//   } else {
//     var table_html = table_div.outerHTML.replace(/ /g, '%20');

//     var a = document.createElement('a');
//     a.href = data_type + ', ' + table_html;
//     a.download = `Nilai_${kelasfix}.xls`;
//     a.click();
// }
// });
