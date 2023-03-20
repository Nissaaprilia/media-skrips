//cek jawaban materi 24
function cekJawaban() {
  let jawabanmateri24 = document.querySelectorAll("#isian24");
  let jawabanbenar24 = ["3", "1", "3", "3", "2", "3", "4", "1", "12", "7", "7", "15", "5", "5", "6", "7", "1", "12", "10", "2", "15", "7", "5", "12", "3", "5", "6", "3", "3", "4"];

  let jawabanmateri16 = document.querySelectorAll("#isian16");
  let jawabanbenar16 = ["11", "6", "2", "1", "13", "4", "21", "10", "11", "8", "2", "5", "7", "15", "14", "15", "7", "10", "7", "6"];
  let jawabanmateri13 = document.querySelectorAll("#isian13");
  let jawabanbenar13 = ["18", "20", "3", "8", "6", "7", "8", "9", "5", "6", "9", "14", "9", "12", "10", "15", "7", "12", "15", "17"];

  let jawabanmateri15 = document.querySelectorAll("#isian15");
  let jawabanbenar15 = ["4", "5", "9", "16", "8", "5", "8", "15", "7", "10"];

  let jawabanmateri12 = document.querySelectorAll("#isian12");
  let jawabanbenar12 = ["3", "3", "5", "4", "3", "4", "4", "4"];

  for (let i = 0; i < jawabanmateri12.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri12[i].value.toLowerCase() == jawabanbenar12[i]) {
      jawabanmateri12[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri12[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }

  for (let i = 0; i < jawabanmateri15.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri15[i].value.toLowerCase() == jawabanbenar15[i]) {
      jawabanmateri15[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri15[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
  for (let i = 0; i < jawabanmateri13.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri13[i].value.toLowerCase() == jawabanbenar13[i]) {
      jawabanmateri13[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri13[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
  for (let i = 0; i < jawabanmateri16.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri16[i].value.toLowerCase() == jawabanbenar16[i]) {
      jawabanmateri16[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawabanmateri16[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
  for (let i = 0; i < jawabanmateri24.length; i++) {
    //length ada 12 jawaban
    if (jawabanmateri24[i].value.toLowerCase() == jawabanbenar24[i]) {
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
  let jawabanmateri16 = document.querySelectorAll("#isian16");
  let jawabanmateri13 = document.querySelectorAll("#isian13");
  let jawabanmateri15 = document.querySelectorAll("#isian15");
  let jawabanmateri12 = document.querySelectorAll("#isian12");
  for (let i = 0; i < jawabanmateri12.length; i++) {
    jawabanmateri12[i].value = "";
    jawabanmateri12[i].style.border = "0.5px solid black";
    jawabanmateri12[i].ariaPlaceholder = ". . .";
  }
  for (let i = 0; i < jawabanmateri15.length; i++) {
    jawabanmateri15[i].value = "";
    jawabanmateri15[i].style.border = "0.5px solid black";
    jawabanmateri15[i].ariaPlaceholder = ". . .";
  }

  for (let i = 0; i < jawabanmateri13.length; i++) {
    jawabanmateri13[i].value = "";
    jawabanmateri13[i].style.border = "0.5px solid black";
    jawabanmateri13[i].ariaPlaceholder = ". . .";
  }
  for (let i = 0; i < jawabanmateri16.length; i++) {
    jawabanmateri16[i].value = "";
    jawabanmateri16[i].style.border = "0.5px solid black";
    jawabanmateri16[i].ariaPlaceholder = ". . .";
  }

  for (let i = 0; i < jawabanmateri24.length; i++) {
    jawabanmateri24[i].value = "";
    jawabanmateri24[i].style.border = "0.5px solid black";
    jawabanmateri24[i].ariaPlaceholder = ". . .";
  }
}

// //cek jawaban materi12
// function cekJawaban() {
//
// }
// //reset jawaban materi12
// function reset() {
//
// }
