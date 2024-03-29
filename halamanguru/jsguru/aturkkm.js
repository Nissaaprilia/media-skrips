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

import { getDatabase, ref, set, child, get, onValue, remove, update, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();
let idnya = [];

onValue(ref(db, "kkm"), (snapshot) => {
  handleSuccess(snapshot);
});

// const dbkkm = db.ref("kkm").on("value", handleSuccess, handleError);

// let getKKM;
function handleSuccess(items) {
  let getKKM = items.val();

  let kkm1 = getKKM[1]["kkm"];
  let kkm2 = getKKM[2]["kkm"];
  let kkm3 = getKKM[3]["kkm"];

  var kkm1html = document.querySelector(".kkm1");
  kkm1html.innerHTML = kkm1;

  var editkkm1 = document.querySelector(".editKKM1");
  editkkm1.value = kkm1;

  var kkm2html = document.querySelector(".kkm2");
  kkm2html.innerHTML = kkm2;

  var editkkm2 = document.querySelector(".editKKM2");
  editkkm2.value = kkm2;

  var kkm3html = document.querySelector(".kkm3");
  kkm3html.innerHTML = kkm3;

  var editkkm3 = document.querySelector(".editKKM3");
  editkkm3.value = kkm3;

  //   var kkm4html = document.querySelector(".kkm4");
  //   kkm4html.innerHTML = kkm4;

  //   var editkkm4 = document.querySelector(".editKKM4");
  //   editkkm4.value = kkm4;

  //   var kkm5html = document.querySelector(".kkm5");
  //   kkm5html.innerHTML = kkm5;

  //   var editkkm5 = document.querySelector(".editKKM5");
  //   editkkm5.value = kkm5;
}

function handleError(eror) {
  console.log(eror);
}

setKKM1.addEventListener("click", (e) => {
  const db = getDatabase();
  const kkminput = document.getElementById("kkm1").value;

  // var task = {
  //   id: 0,
  //   kkm: kkminput,
  // };
  //
  // let database = ref(db, "kkm/" + 0);
  // database.set(task);

  set(ref(db, "kkm/" + 1), {
    id: 0,
    kkm: kkminput,
  });
});

setKKM2.addEventListener("click", (e) => {
  const kkminput = document.getElementById("kkm2").value;
  const db = getDatabase();

  set(ref(db, "kkm/" + 2), {
    id: 0,
    kkm: kkminput,
  });
});

setKKM3.addEventListener("click", (e) => {
  const kkminput = document.getElementById("kkm3").value;
  const db = getDatabase();

  set(ref(db, "kkm/" + 3), {
    id: 0,
    kkm: kkminput,
  });
});

// setKKM4.addEventListener("click", (e) => {
//   const kkminput = document.getElementById("kkm4").value;
//   const db = getDatabase();

//   set(ref(db, "kkm/" + 4), {
//     id: 0,
//     kkm: kkminput,
//   });
// });

// setKKM5.addEventListener("click", (e) => {
//   const kkminput = document.getElementById("kkm5").value;
//   const db = getDatabase();

//   set(ref(db, "kkm/" + 5), {
//     id: 0,
//     kkm: kkminput,
//   });
// });
