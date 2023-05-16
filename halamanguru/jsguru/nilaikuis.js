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

let idnya = [];
let kuis = document.getElementById("kuis");
let tmp = document.querySelector("#tbody1");
tmp.innerHTML = "";
let kelas = document.getElementById("kelas");
// let sekolah = document.getElementById('sekolah');
// sekolah = document.getElementById('sekolah');
let kelasfix = "";
let sekolahfix = "";
let cek11 = 0;

let cari = document.querySelector("#cari");
// datahasil = kuisnya.value;
cari.addEventListener("click", function () {
  let datahasil = kuis.value;
  // console.log(datahasil);
  var task = ref(db, datahasil);
  tmp.innerHTML = "";
  if (kelas.value == "1") {
    kelasfix = "V (A)";
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
              <td>${taskvalue.nis}</td>
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

// window.onload = function () {
// kelas = document.getElementById('kelas');
// // sekolah = document.getElementById('sekolah');
// kuis = document.getElementById('kuis');
// kelas.value = value = "0";
// // sekolah.value = value = "0";
// // kuis.value = value = "kuis1/";
// }

// //FILLING THE TABLE
// var Nosis = 0;
// var tbody = document.getElementById('tbody1');

// function AddItemToTable(nama,nis,kelas,sekolah,nilai,waktu,hari){
//     var tr = document.createElement("tr");
//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var td4 = document.createElement('td');
//     var td5 = document.createElement('td');
//     var td6 = document.createElement('td');
//     var td7 = document.createElement('td');
//     var td8 = document.createElement('td');

//     td1.innerHTML= ++Nosis;
//     td2.innerHTML= nama;
//     td3.innerHTML= nis;
//     td4.innerHTML= kelas;
//     td5.innerHTML= sekolah;
//     td6.innerHTML= nilai;
//     td7.innerHTML= waktu;
//     td8.innerHTML= hari;

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
//     tr.appendChild(td6);
//     tr.appendChild(td7);
//     tr.appendChild(td8);

//     tbody.appendChild(tr);
// }

// function AddAllItemsToTable(hasil){
//     Nosis = 0;
//     tbody.innerHTML = "";
//     hasil.forEach(element =>{
//         AddItemToTable(element.nama, element.nis, element.kelas, element.sekolah, element.nilai, element.waktu, element.hari)
//     });
// }

// function GetAllDataRealtime(){
//     const dbRef = ref(db, "kuis1");

//     onValue(dbRef,(snapshot)=>{
//         var hasil = [];

//         snapshot.forEach(childSnapshot =>{
//             hasil.push(childSnapshot.val());
//         });
//         AddAllItemsToTable(hasil);
//     });
// }

// window.onload = GetAllDataRealtime;
