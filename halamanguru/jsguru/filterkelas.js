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
const db = getDatabase();
const auth = getAuth(app);
const btnTambahkelas = document.getElementById("tomboltambahkelas");
onValue(ref(db, "kelas/"), (snapshot) => {
  const filterkelas = document.getElementById("categoryFilter");
  filterkelas.innerHTML = `<option value="" selected="selected">Show All</option>`;
  const kelas = snapshot;
  kelas.forEach((kls) => {
    const kelasVal = kls.val();

    let kelas1 = `
  <option value="${kelasVal.class}">${kelasVal.class}</option>
  `;

    filterkelas.innerHTML += kelas1;
  });

  btnTambahkelas.addEventListener("click", () => {
    const tambahkelas = document.getElementById("tambahkelas").value;
    if (tambahkelas == "") {
      alert("Kelas yang ingin ditambahkan belum dimasukan!");
      return;
    }
    set(ref(db, "kelas/" + tambahkelas), {
      class: tambahkelas,
    })
      .then(() => {
        $("#tambahkelas").val("");
        alert("Kelas berhasil ditambahkan!");
        $("#modaltambahkelas").modal("hide");
      })
      .catch((error) => {
        alert("Kelas gagal ditambahkan!");
      });
  });
});
