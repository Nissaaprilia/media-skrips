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
        updateform.nis.value = snapshot.val().nis;
        updateform.kelas.value = snapshot.val().kelas;
        // updateform.sekolah.value = snapshot.val().sekolah;
        updateform.pass.value = snapshot.val().pass;
      });
      updateform.addEventListener("submit", (e) => {
        e.preventDefault();
        update(ref(db, `DataSiswa/${userId}`), {
          fullname: updateform.fullname.value,
          nis: updateform.nis.value,
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
            updateform.nis.value = snapshot.val().nis;
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

// Tampil Data semua
// onValue(usersRef, (snapshot) => {
//   const users = snapshot.val();
//   tbody.innerHTML = '';

//   for (let user in users) {
//     console.log(users[user]);

//     let tr = `
//       <tr data-id = ${user}>
//           <td>${users[user].fullname}</td>
//           <td>${users[user].nis}</td>
//           <td>${users[user].kelas}</td>

//           <td>${users[user].pass}</td>
//           <td>
//           <button class="edit btn" data-bs-toggle="modal" data-bs-target="#edituser" title="Edit"><img src="/gambar/pencil.png" width="25px" alt="" /></button>
//           <button class="delete btn" title="Hapus"><img src="/gambar/bin.png" width="25px" alt="" /></button>
//           </td>
//           <tr>
//           `;

//     // <td>${users[user].sekolah}</td>
//     tbody.innerHTML += tr;
//   }

//   //Edit
//   let editButtons = document.querySelectorAll('.edit');
//   editButtons.forEach((edit) => {
//     edit.addEventListener('click', () => {
//       document.querySelector('.update').classList.add('active');
//       let userId = edit.parentElement.parentElement.dataset.id;
//       const dbRef = ref(db);
//       get(child(dbRef, `DataSiswa/${userId}`)).then((snapshot) => {
//         updateform.fullname.value = snapshot.val().fullname;
//         updateform.nis.value = snapshot.val().nis;
//         updateform.kelas.value = snapshot.val().kelas;
//         // updateform.sekolah.value = snapshot.val().sekolah;
//         updateform.pass.value = snapshot.val().pass;
//       });
//       updateform.addEventListener('submit', (e) => {
//         e.preventDefault();
//         update(ref(db, `DataSiswa/${userId}`), {
//           fullname: updateform.fullname.value,
//           nis: updateform.nis.value,
//           kelas: updateform.kelas.value,
//           // sekolah: updateform.sekolah.value,
//           pass: updateform.pass.value,
//         }).then(
//           () => {
//             Swal.fire({
//               icon: 'success',
//               title: 'Data diperbarui',
//             });
//             // alert('Data diperbarui');
//             document.querySelector('.update').classList.remove('active');
//             updateform.reset();
//           },
//           (onRejected) => {
//             Swal.fire({
//               icon: 'error',
//               title: 'Gagal',
//             });
//             // alert('gagal');
//           }
//         );
//       });
//     });
//   });

//   //Delete
//   let deleteButtons = document.querySelectorAll('.delete');
//   deleteButtons.forEach((deleteBtn) => {
//     deleteBtn.addEventListener('click', () => {
//       let userId = deleteBtn.parentElement.parentElement.dataset.id;
//       Swal.fire({
//         title: 'Apakah Anda yakin menghapus data?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Ya, Hapus data!',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           remove(ref(db, 'DataSiswa/' + userId));
//           Swal.fire('Hapus', 'Data anda telah dihapus', 'success');
//         }
//       });
//       // // const db = getDatabase();
//       // remove(ref(db, 'DataSiswa/' + userId));

//       // alert('Data berhasil dihapus');
//     });
//   });

//   // SELECT/DESELECT CHECKBOXES
//   // var checkbox = $('table tbody input[type="checkbox"]');
//   // $('#selectAll').click(function () {
//   //   if (this.checked) {
//   //     checkbox.each(function () {
//   //       console.log(this.id);
//   //       deleteIDs.push(this.id);
//   //       this.checked = true;
//   //     });
//   //   } else {
//   //     checkbox.each(function () {
//   //       this.checked = false;
//   //     });
//   //   }
//   // });
//   // checkbox.click(function () {
//   //   if (!this.checked) {
//   //     $('#selectAll').prop('checked', false);
//   //   }
//   // });

//   $('#example').DataTable();
// });

// let tmp = document.querySelector('#tbody');
// tmp.innerHTML = '';
// let kelas = document.getElementById('kelasInp');
// let kelasfix = '';
// let cek11 = 0;
// let cari = document.querySelector('#cari');
// // datahasil = kuisnya.value;
// cari.addEventListener('click', function () {
//   let datasiswa = kelas.value;
//   console.log(kelas);
//   console.log(kelas.value);

//   var task = ref(db, datasiswa);
//   tmp.innerHTML = '';
//   if (kelas.value == '1') {
//     kelasfix = 'VIII A';
//   }
//   if (kelas.value == '2') {
//     kelasfix = 'VIII B';
//   }

//   if (kelasfix != '') {
//     const que = query(ref(db, 'DataSiswa/'), orderByChild('VIII B'));
//     onValue(que, (snapshot) => {
//       console.log(snapshot.val());
//       const users = snapshot.val();
//       // for (let user in users) {
//       //   let tr =

//       // const users = snapshot.val();
//       // tbody.innerHTML = '';

//       for (let user in users) {
//         // console.log(users[user]);

//         let tr = `
//                   <tr data-id = ${user}>
//                       <td>${users[user].fullname}</td>
//                       <td>${users[user].nis}</td>
//                       <td>${users[user].kelas}</td>

//                       <td>${users[user].pass}</td>
//                       <td>
//                       <button class="edit btn" data-bs-toggle="modal" data-bs-target="#edituser" title="Edit"><img src="/gambar/pencil.png" width="25px" alt="" /></button>
//                       <button class="delete btn" title="Hapus"><img src="/gambar/bin.png" width="25px" alt="" /></button>
//                       </td>
//                       <tr>
//                       `;

//         // <td>${users[user].sekolah}</td>
//         tbody.innerHTML += tr;
//       }

//       //Edit
//       let editButtons = document.querySelectorAll('.edit');
//       editButtons.forEach((edit) => {
//         edit.addEventListener('click', () => {
//           document.querySelector('.update').classList.add('active');
//           let userId = edit.parentElement.parentElement.dataset.id;
//           const dbRef = ref(db);
//           get(child(dbRef, `DataSiswa/${userId}`)).then((snapshot) => {
//             updateform.fullname.value = snapshot.val().fullname;
//             updateform.nis.value = snapshot.val().nis;
//             updateform.kelas.value = snapshot.val().kelas;
//             // updateform.sekolah.value = snapshot.val().sekolah;
//             updateform.pass.value = snapshot.val().pass;
//           });
//           updateform.addEventListener('submit', (e) => {
//             e.preventDefault();
//             update(ref(db, `DataSiswa/${userId}`), {
//               fullname: updateform.fullname.value,
//               nis: updateform.nis.value,
//               kelas: updateform.kelas.value,
//               // sekolah: updateform.sekolah.value,
//               pass: updateform.pass.value,
//             }).then(
//               () => {
//                 Swal.fire({
//                   icon: 'success',
//                   title: 'Data diperbarui',
//                 });
//                 // alert('Data diperbarui');
//                 document.querySelector('.update').classList.remove('active');
//                 updateform.reset();
//               },
//               (onRejected) => {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Gagal',
//                 });
//                 // alert('gagal');
//               }
//             );
//           });
//         });
//       });

//       //Delete
//       let deleteButtons = document.querySelectorAll('.delete');
//       deleteButtons.forEach((deleteBtn) => {
//         deleteBtn.addEventListener('click', () => {
//           let userId = deleteBtn.parentElement.parentElement.dataset.id;
//           Swal.fire({
//             title: 'Apakah Anda yakin menghapus data?',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Ya, Hapus data!',
//           }).then((result) => {
//             if (result.isConfirmed) {
//               remove(ref(db, 'DataSiswa/' + userId));
//               Swal.fire('Hapus', 'Data anda telah dihapus', 'success');
//             }
//           });
//           // // const db = getDatabase();
//           // remove(ref(db, 'DataSiswa/' + userId));

//           // alert('Data berhasil dihapus');
//         });
//       });

//       // SELECT/DESELECT CHECKBOXES
//       // var checkbox = $('table tbody input[type="checkbox"]');
//       // $('#selectAll').click(function () {
//       //   if (this.checked) {
//       //     checkbox.each(function () {
//       //       console.log(this.id);
//       //       deleteIDs.push(this.id);
//       //       this.checked = true;
//       //     });
//       //   } else {
//       //     checkbox.each(function () {
//       //       this.checked = false;
//       //     });
//       //   }
//       // });
//       // checkbox.click(function () {
//       //   if (!this.checked) {
//       //     $('#selectAll').prop('checked', false);
//       //   }
//       // });

//       // $('#example').DataTable();
//     });
//   }
//   // else {
//   //   onValue(usersRef, (snapshot) => {
//   //     const users = snapshot.val();
//   //     tbody.innerHTML = '';

//   //     for (let user in users) {
//   //       console.log(users[user]);

//   //       let tr = `
//   //                 <tr data-id = ${user}>
//   //                     <td>${users[user].fullname}</td>
//   //                     <td>${users[user].nis}</td>
//   //                     <td>${users[user].kelas}</td>

//   //                     <td>${users[user].pass}</td>
//   //                     <td>
//   //                     <button class="edit btn" data-bs-toggle="modal" data-bs-target="#edituser" title="Edit"><img src="/gambar/pencil.png" width="25px" alt="" /></button>
//   //                     <button class="delete btn" title="Hapus"><img src="/gambar/bin.png" width="25px" alt="" /></button>
//   //                     </td>
//   //                     <tr>
//   //                     `;

//   //       // <td>${users[user].sekolah}</td>
//   //       tbody.innerHTML += tr;
//   //     }

//   //     //Edit
//   //     let editButtons = document.querySelectorAll('.edit');
//   //     editButtons.forEach((edit) => {
//   //       edit.addEventListener('click', () => {
//   //         document.querySelector('.update').classList.add('active');
//   //         let userId = edit.parentElement.parentElement.dataset.id;
//   //         const dbRef = ref(db);
//   //         get(child(dbRef, `DataSiswa/${userId}`)).then((snapshot) => {
//   //           updateform.fullname.value = snapshot.val().fullname;
//   //           updateform.nis.value = snapshot.val().nis;
//   //           updateform.kelas.value = snapshot.val().kelas;
//   //           // updateform.sekolah.value = snapshot.val().sekolah;
//   //           updateform.pass.value = snapshot.val().pass;
//   //         });
//   //         updateform.addEventListener('submit', (e) => {
//   //           e.preventDefault();
//   //           update(ref(db, `DataSiswa/${userId}`), {
//   //             fullname: updateform.fullname.value,
//   //             nis: updateform.nis.value,
//   //             kelas: updateform.kelas.value,
//   //             // sekolah: updateform.sekolah.value,
//   //             pass: updateform.pass.value,
//   //           }).then(
//   //             () => {
//   //               Swal.fire({
//   //                 icon: 'success',
//   //                 title: 'Data diperbarui',
//   //               });
//   //               // alert('Data diperbarui');
//   //               document.querySelector('.update').classList.remove('active');
//   //               updateform.reset();
//   //             },
//   //             (onRejected) => {
//   //               Swal.fire({
//   //                 icon: 'error',
//   //                 title: 'Gagal',
//   //               });
//   //               // alert('gagal');
//   //             }
//   //           );
//   //         });
//   //       });
//   //     });

//   //     //Delete
//   //     let deleteButtons = document.querySelectorAll('.delete');
//   //     deleteButtons.forEach((deleteBtn) => {
//   //       deleteBtn.addEventListener('click', () => {
//   //         let userId = deleteBtn.parentElement.parentElement.dataset.id;
//   //         Swal.fire({
//   //           title: 'Apakah Anda yakin menghapus data?',
//   //           icon: 'warning',
//   //           showCancelButton: true,
//   //           confirmButtonColor: '#3085d6',
//   //           cancelButtonColor: '#d33',
//   //           confirmButtonText: 'Ya, Hapus data!',
//   //         }).then((result) => {
//   //           if (result.isConfirmed) {
//   //             remove(ref(db, 'DataSiswa/' + userId));
//   //             Swal.fire('Hapus', 'Data anda telah dihapus', 'success');
//   //           }
//   //         });
//   //         // // const db = getDatabase();
//   //         // remove(ref(db, 'DataSiswa/' + userId));

//   //         // alert('Data berhasil dihapus');
//   //       });
//   //     });

//   //     // SELECT/DESELECT CHECKBOXES
//   //     // var checkbox = $('table tbody input[type="checkbox"]');
//   //     // $('#selectAll').click(function () {
//   //     //   if (this.checked) {
//   //     //     checkbox.each(function () {
//   //     //       console.log(this.id);
//   //     //       deleteIDs.push(this.id);
//   //     //       this.checked = true;
//   //     //     });
//   //     //   } else {
//   //     //     checkbox.each(function () {
//   //     //       this.checked = false;
//   //     //     });
//   //     //   }
//   //     // });
//   //     // checkbox.click(function () {
//   //     //   if (!this.checked) {
//   //     //     $('#selectAll').prop('checked', false);
//   //     //   }
//   //     // });

//   //     // $('#example').DataTable();
//   //   });
//   // }
// });
