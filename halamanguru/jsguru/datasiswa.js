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

const usersRef = ref(db, "DataSiswa/");
let deleteIDs = [];

// GET TOTAL SIZE
onValue(usersRef, (snapshot) => {
  let size = snapshot.size;
  $(".count").text(size);
  if (size == 0) {
    $("#selectAll").attr("disabled", true);
  } else {
    $("#selectAll").attr("disabled", false);
  }
});

//  Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();
// const dbref = ref(db, "UserSiswa/");

const getDataSiswa = new Promise((resolve, reject) => {
  const antri = query(ref(db, "DataSiswa/"));
  onValue(antri, (snapshot) => {
    const users = snapshot.val();
    resolve(users);
  });
});

getDataSiswa.then((users) => {
  const tampilData = document.querySelector("#tbody");
  console.log(users);
  for (let user in users) {
    const tr = `
        <tr data-id=${user}>
        <td class="text-capitalize">${users[user].fullname}</td>
        <td>${users[user].nisn}</td>
          <td>${users[user].kelas}</td>
          <td>${users[user].pass}</td>
          <td>
          <button class="edit btn" data-bs-toggle="modal" data-bs-target="#edituser" title="Edit"><img src="/img/guruimg/pensil.png" width="25px" alt="" /></button>
          <button class="delete btn" title="Hapus"><img src="/img/guruimg/sampah.png" width="25px" alt="" /></button>
          
          </td>
        </tr>
      `;

    tampilData.innerHTML += tr;
  }

  //filter kelas
  // onValue(ref(db, "kelas/"), (snapshot) => {
  //   // const edit = document.getElementById(".edit");
  //   // editkelas.innerHTML = `<option value="" selected="selected">-Pilih Kelas-</option>`;
  //   const filterkelas = document.getElementById("categoryFilter");
  //   filterkelas.innerHTML = `<option value="" selected="selected">Show All</option>`;
  //   const kelas = snapshot;
  //   kelas.forEach((kls) => {
  //     const kelasVal = kls.val();

  //     let kelas1 = `
  // <option value="${kelasVal.class}">${kelasVal.class}</option>
  // `;

  //     filterkelas.innerHTML += kelas1;
  //     // editkelas.innerHTML += kelas1;
  //   });
  // });

  //Edit
  let editButtons = document.querySelectorAll(".edit");
  let keluarButtons = document.querySelector(".keluar");
  editButtons.forEach((edit) => {
    edit.addEventListener("click", () => {
      document.querySelector(".update").classList.add("active");
      let userId = edit.parentElement.parentElement.dataset.id;
      const dbRef = ref(db);
      get(child(dbRef, `DataSiswa/${userId}`)).then((snapshot) => {
        updateform.fullname.value = snapshot.val().fullname;
        updateform.nis.value = snapshot.val().nisn;
        updateform.kelas.value = snapshot.val().kelas;
        // updateform.sekolah.value = snapshot.val().sekolah;
        updateform.pass.value = snapshot.val().pass;
      });
      updateform.addEventListener("submit", (e) => {
        e.preventDefault();
        update(ref(db, `DataSiswa/${userId}`), {
          fullname: updateform.fullname.value,
          nisn: updateform.nis.value,
          kelas: updateform.kelas.value,
          // sekolah: updateform.sekolah.value,
          pass: updateform.pass.value,
        }).then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Data diperbarui",
            });
            // alert('Data diperbarui');
            document.querySelector(".update").classList.remove("active");
            updateform.fullname.value = snapshot.val().fullname;
            updateform.nis.value = snapshot.val().nisn;
            updateform.kelas.value = snapshot.val().kelas;
            // updateform.sekolah.value = snapshot.val().sekolah;
            updateform.pass.value = snapshot.val().pass;

            // updateform.reset();
            // window.location.reload();
          },
          (onRejected) => {
            Swal.fire({
              icon: "error",
              title: "Gagal",
            });
            // alert('gagal');
          }
        );
      });
    });
    keluarButtons.addEventListener("click", () => {
      window.location.reload();
    });
  });

  //Delete
  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      let userId = deleteBtn.parentElement.parentElement.dataset.id;
      Swal.fire({
        title: "Apakah Anda yakin menghapus data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus data!",
      }).then((result) => {
        if (result.isConfirmed) {
          remove(ref(db, "DataSiswa/" + userId));
          // Swal.fire('Hapus', 'Data anda telah dihapus', 'success');
          Swal.fire({
            icon: "success",
            title: "Data anda telah dihapus",
            showConfirButton: false,
            Timer: 1500,
          }).then(function () {
            window.location.reload();
          });
        }
      });

      // // const db = getDatabase();
      // remove(ref(db, 'DataSiswa/' + userId));

      // alert('Data berhasil dihapus');
    });
  });

  $("#example").DataTable();
});

var tbody = document.querySelector("#tbody");
var addUser = document.querySelector("#adduser"),
  popup = document.querySelector(".popup"),
  addform = document.querySelector(".add form"),
  updateform = document.querySelector(".update form");

function writeUserData(fullname, nisn, kelas, pass) {
  //sekolah
  set(ref(db, "DataSiswa/" + nisn), {
    fullname: fullname,
    nisn: nisn,
    kelas: kelas,
    // sekolah: sekolah,
    pass: pass,
  })
    .then(() => {
      // alert('Akun Berhasil Dibuat');
      Swal.fire({
        icon: "success",
        title: "Data berhasil ditambahkan",
      }).then(function () {
        window.location.reload();
      });
    })
    .catch((error) => {
      // alert('Gagal' + error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
      });
    });
}

// Tambah user
addUser.addEventListener("click", () => {
  document.querySelector(".add").classList.add("active");
  addform.addEventListener("submit", (e) => {
    // if (snapshot.val()) {
    //   alert('Akun sudah terdaftar!');
    // } else {
    e.preventDefault();
    writeUserData(addform.fullname.value, addform.nisn.value, addform.kelas.value, addform.pass.value); //, addform.sekolah.value
    // }
  });
});
