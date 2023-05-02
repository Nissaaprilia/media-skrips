let userlink = document.getElementById("userlink");
let nisnlink = document.getElementById("nisnlink");
let signoutlink = document.getElementById("signoutlink");
let nama = sessionStorage.getItem("nama");
let nisn = sessionStorage.getItem("nisn");
var currentUser = null;

// Function;
function getNama() {
  if (nama == null) {
    window.location = "../index.html";
  } else {
    userlink.innerText = nama;
  }
}

function getNisn() {
  if (nisn == null) {
    window.location = "../index.html";
  } else {
    nisnlink.innerText = nisn;
  }
}

getNama();
getNisn();

function LogOut() {
  sessionStorage.removeItem("nama");

  window.location = "/index.html";
}

//cek jawaban materi
function cekJawaban() {
  //jawaban mulaibelajar2
  let jawabanbelajar2 = document.querySelectorAll("#mulaibelajar2");
  let jawabanbenarbe2 = ["3", "2", "1", "2"];
  //jawaban materi 12
  let jawabanmateri12 = document.querySelectorAll("#isian12");
  let jawabanbenar12 = ["4", "4", "5", "4", "3", "4", "2", "4"];

  //jawaban materi 13
  let jawabanmateri13 = document.querySelectorAll("#isian13");
  let jawabanbenar13 = ["18", "20", "3", "8", "6", "7", "8", "9", "5", "6", "9", "14", "9", "12", "10", "15", "7", "12", "15", "17"];

  // jawaban materi 15
  let jawabanmateri15 = document.querySelectorAll("#isian15");
  let jawabanbenar15 = ["3", "2", "5", "6", "3", "4", "7", "6", "2", "3"];

  //jawaban materi 16
  let jawabanmateri16 = document.querySelectorAll("#isian16");
  let jawabanbenar16 = ["11", "6", "2", "1", "13", "4", "21", "10", "11", "8", "2", "5", "7", "15", "14", "15", "7", "10", "7", "6"];

  //jawaban materi 22
  // let jawabanmateri22 = document.querySelectorAll("#isian22");
  // let jawabanbenar22 = ["5", "3", "5", "4", "11", "4", "17", "5", "29", "6", "23", "6", ""];
  //jawaban materi 24
  let jawabanmateri24 = document.querySelectorAll("#isian24");
  let jawabanbenar24 = ["3", "1", "3", "3", "2", "3", "4", "1", "12", "7", "7", "15", "5", "5", "6", "7", "1", "12", "10", "2", "15", "7", "5", "12", "3", "5", "6", "3", "3", "4"];

  // jawaban materi 32
  let jawabanmateri32 = document.querySelectorAll("#isian32");
  let jawabanbenar32 = ["4", "8", "12", "18", "7", "12", "10", "11", "6", "17"];

  //fungsi kolom jawaban mulaibelajar2
  for (let i = 0; i < jawabanbelajar2.length; i++) {
    if (jawabanbelajar2[i].value.toLowerCase() == jawabanbenarbe2[i]) {
      jawabanbelajar2[i].style.border = "2px solid green";
    } else {
      jawabanbelajar2[i].style.border = "2px solid red";
    }
  }

  //fungsi kolom jawaban materi 12
  for (let i = 0; i < jawabanmateri12.length; i++) {
    if (jawabanmateri12[i].value.toLowerCase() == jawabanbenar12[i]) {
      jawabanmateri12[i].style.border = "2px solid green";
    } else {
      jawabanmateri12[i].style.border = "2px solid red";
    }
  }

  //fungsi kolom jawaban materi 13
  for (let i = 0; i < jawabanmateri13.length; i++) {
    if (jawabanmateri13[i].value.toLowerCase() == jawabanbenar13[i]) {
      jawabanmateri13[i].style.border = "2px solid green";
    } else {
      jawabanmateri13[i].style.border = "2px solid red";
    }
  }

  //fungsi kolom jawaban materi 15
  for (let i = 0; i < jawabanmateri15.length; i++) {
    if (jawabanmateri15[i].value.toLowerCase() == jawabanbenar15[i]) {
      jawabanmateri15[i].style.border = "2px solid green";
    } else {
      jawabanmateri15[i].style.border = "2px solid red";
    }
  }

  //fungsi kolom jawaban materi 16
  for (let i = 0; i < jawabanmateri16.length; i++) {
    if (jawabanmateri16[i].value.toLowerCase() == jawabanbenar16[i]) {
      jawabanmateri16[i].style.border = "2px solid green";
    } else {
      jawabanmateri16[i].style.border = "2px solid red";
    }
  }
  //fungsi kolom jawaban materi 24
  for (let i = 0; i < jawabanmateri24.length; i++) {
    if (jawabanmateri24[i].value.toLowerCase() == jawabanbenar24[i]) {
      jawabanmateri24[i].style.border = "2px solid green";
    } else {
      jawabanmateri24[i].style.border = "2px solid red";
    }
  }

  //fungsi kolom jawaban materi 32
  for (let i = 0; i < jawabanmateri32.length; i++) {
    if (jawabanmateri32[i].value.toLowerCase() == jawabanbenar32[i]) {
      jawabanmateri32[i].style.border = "2px solid green";
    } else {
      jawabanmateri32[i].style.border = "2px solid red";
    }
  }
}
//reset jawaban materi
function reset() {
  let jawabanbelajar2 = document.querySelectorAll("#mulaibelajar2");
  let jawabanmateri12 = document.querySelectorAll("#isian12");
  let jawabanmateri13 = document.querySelectorAll("#isian13");
  let jawabanmateri15 = document.querySelectorAll("#isian15");
  let jawabanmateri16 = document.querySelectorAll("#isian16");
  let jawabanmateri24 = document.querySelectorAll("#isian24");
  let jawabanmateri32 = document.querySelectorAll("#isian32");

  //mulaibelajar2
  for (let i = 0; i < jawabanbelajar2.length; i++) {
    jawabanbelajar2[i].value = "";
    jawabanbelajar2[i].style.border = "0.5px solid black";
    jawabanbelajar2[i].ariaPlaceholder = ". . .";
  }
  //materi 12
  for (let i = 0; i < jawabanmateri12.length; i++) {
    jawabanmateri12[i].value = "";
    jawabanmateri12[i].style.border = "0.5px solid black";
    jawabanmateri12[i].ariaPlaceholder = ". . .";
  }

  //materi13
  for (let i = 0; i < jawabanmateri13.length; i++) {
    jawabanmateri13[i].value = "";
    jawabanmateri13[i].style.border = "0.5px solid black";
    jawabanmateri13[i].ariaPlaceholder = ". . .";
  }

  //materi15
  for (let i = 0; i < jawabanmateri15.length; i++) {
    jawabanmateri15[i].value = "";
    jawabanmateri15[i].style.border = "0.5px solid black";
    jawabanmateri15[i].ariaPlaceholder = ". . .";
  }

  //materi16
  for (let i = 0; i < jawabanmateri16.length; i++) {
    jawabanmateri16[i].value = "";
    jawabanmateri16[i].style.border = "0.5px solid black";
    jawabanmateri16[i].ariaPlaceholder = ". . .";
  }

  //materi24
  for (let i = 0; i < jawabanmateri24.length; i++) {
    jawabanmateri24[i].value = "";
    jawabanmateri24[i].style.border = "0.5px solid black";
    jawabanmateri24[i].ariaPlaceholder = ". . .";
  }

  //materi32
  for (let i = 0; i < jawabanmateri32.length; i++) {
    jawabanmateri32[i].value = "";
    jawabanmateri32[i].style.border = "0.5px solid black";
  }
}
