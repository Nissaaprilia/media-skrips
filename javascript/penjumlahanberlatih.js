//cek jawaban materi 13
function cekJawaban() {
  let jawabanmateri13 = document.querySelectorAll("#isian1");
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
  let jawabanmateri13 = document.querySelectorAll("#isian1");
  for (let i = 0; i < jawabanmateri13.length; i++) {
    jawabanmateri13[i].value = "";
    jawabanmateri13[i].style.border = "0.5px solid black";
    jawabanmateri13[i].ariaPlaceholder = ". . .";
  }
}
