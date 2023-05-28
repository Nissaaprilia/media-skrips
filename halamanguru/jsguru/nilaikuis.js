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
let kuis = document.getElementById("kuis");
let tmp = document.querySelector("#tbody1");
tmp.innerHTML = "";
let kelas = document.getElementById("kelas");

let kelasfix = "";
let sekolahfix = "";
let cek11 = 0;

let cari = document.querySelector("#cari");

cari.addEventListener("click", function () {
  let datahasil = kuis.value;
  // console.log(datahasil);
  var task = ref(db, datahasil);
  tmp.innerHTML = "";

  if (kelas.value == "1") {
    kelasfix = "V (A)";
  } else if (kelas.value == "2") {
    kelasfix = "V (B)";
  } else {
    // Jika nilai kelas tidak sama dengan "1" atau "2",
  }

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
$("#hasilKuis")
  .DataTable({
    lengthMenu: [
      [5, 10, 30, -1],
      [5, 10, 30, "all"],
    ],
  })
  .destroy();

// Inisialisasi DataTable
$("#hasilKuis")
  .DataTable({
    lengthMenu: [
      [5, 10, 30, -1],
      [5, 10, 30, "all"],
    ],
  })
  .destroy();

let userguru = document.getElementById("userguru");
let logoutguru = document.getElementById("logoutguru");
let nama = sessionStorage.getItem("nama");
var currentUser = null;
let nip = sessionStorage.getItem("nip");
// Function;
function getName() {
  if (nama == null) {
    Swal.fire({
      icon: "info",
      title: "Silahkan Login Terlebih Dahulu",
    }).then(() => {
      window.location = "./loginguru.html";
    });

    // alert('Silahkan Login Terlebih Dahulu');
    // window.location = './loginguru.html';
  } else {
    userguru.innerText = nama;
  }
}

getName();

function Signout() {
  // logoutguru.href = '../index.html';
  sessionStorage.removeItem("nama");
  window.location = "../../loginguru.html";
}

// window Load

window.onload = function () {
  getName();
  if (currentUser == null) {
    logoutguru.href = "../../loginguru.html";
  } else {
    userguru.innerText = currentUser.nama;
    logoutguru.innerText = "Logout";
  }
};

// download data Excel
let downloadDataExcel = document.querySelector("#downloadDataExcel");
downloadDataExcel.addEventListener("click", function () {
  let kelas = document.querySelector("#kelas");
  let kelasfix = "";

  if (kelas.value == "1") {
    kelasfix = "V (A)";
  } else if (kelas.value == "2") {
    kelasfix = "V (B)";
  }

  let table_div = document.getElementById("hasilKuis");

  if (table_div.rows.length == 0) {
    $("#ModalDownload").modal("show");
  } else {
    let table_html = table_div.outerHTML;
    let data_type = "data:application/vnd.ms-excel";
    let encodedUri = encodeURIComponent(table_html);

    let a = document.createElement("a");
    a.href = data_type + ", " + encodedUri;
    a.download = `Nilai_${kelasfix}.xls`;
    a.click();
  }
});
