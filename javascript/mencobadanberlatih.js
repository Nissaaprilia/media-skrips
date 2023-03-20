//cek jawaban materi 13
function cekJawaban() {
  let jawabanmateri13 = document.querySelectorAll("#isian13");
  let jawabanbenar = ["18", "20", "3", "8", "6", "7", "8", "9", "5", "6", "9", "14", "9", "12", "10", "15", "7", "12", "15", "17"];

  for (let i = 0; i < jawabanmateri13.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri13[i].value.toLowerCase() == jawabanbenar[i]) {
      jawabanmateri13[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri13[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
}
//reset jawaban materi 13
function reset() {
  let jawabanmateri13 = document.querySelectorAll("#isian13");
  for (let i = 0; i < jawabanmateri13.length; i++) {
    jawabanmateri13[i].value = "";
    jawabanmateri13[i].style.border = "0.5px solid black";
    jawabanmateri13[i].ariaPlaceholder = ". . .";
  }
}

//cek jawaban materi 15
function cekJawaban() {
  let jawabanmateri15 = document.querySelectorAll("#isian15");
  let jawabanbenar = ["4", "5", "9", "16", "8", "5", "8", "15", "7", "10"];

  for (let i = 0; i < jawabanmateri15.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri15[i].value.toLowerCase() == jawabanbenar[i]) {
      jawabanmateri15[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri15[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
}
//reset jawaban materi 15
function reset() {
  let jawabanmateri15 = document.querySelectorAll("#isian15");
  for (let i = 0; i < jawabanmateri15.length; i++) {
    jawabanmateri15[i].value = "";
    jawabanmateri15[i].style.border = "0.5px solid black";
    jawabanmateri15[i].ariaPlaceholder = ". . .";
  }
}

//cek jawaban materi 16
function cekJawaban() {
  let jawabanmateri16 = document.querySelectorAll("#isian16");
  let jawabanbenar = ["3", "2", "2", "1", "13", "4", "21", "10", "11", "8", "5", "8", "6", "7", "5", "8", "3", "4", "8", "15"];

  for (let i = 0; i < jawabanmateri16.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri16[i].value.toLowerCase() == jawabanbenar[i]) {
      jawabanmateri16[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri16[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
}
//reset jawaban materi 16
function reset() {
  let jawabanmateri16 = document.querySelectorAll("#isian16");
  for (let i = 0; i < jawabanmateri16.length; i++) {
    jawabanmateri16[i].value = "";
    jawabanmateri16[i].style.border = "0.5px solid black";
    jawabanmateri16[i].ariaPlaceholder = ". . .";
  }
}
//cek jawaban materi 24
function cekJawaban() {
  let jawabanmateri24 = document.querySelectorAll("#isian24");
  let jawabanbenar = ["3", "1", "3", "3", "2", "3", "4", "1", "12", "7", "7", "15", "5", "5", "6", "7", "1", "12", "10", "2", "15", "7", "5", "12", "3", "5", "6", "3", "3", "4"];

  for (let i = 0; i < jawabanmateri24.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri24[i].value.toLowerCase() == jawabanbenar[i]) {
      jawabanmateri24[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri24[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
}
//reset jawaban materi 24
function reset() {
  let jawabanmateri24 = document.querySelectorAll("#isian24");
  for (let i = 0; i < jawabanmateri24.length; i++) {
    jawabanmateri24[i].value = "";
    jawabanmateri24[i].style.border = "0.5px solid black";
    jawabanmateri24[i].ariaPlaceholder = ". . .";
  }
}
