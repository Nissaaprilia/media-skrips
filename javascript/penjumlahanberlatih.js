//cek jawaban isian
function cekJawaban() {
  let jawaban16 = document.querySelectorAll("#isian1");
  let jawabanbenar = ["18", "20"];

  for (let i = 0; i < jawaban16.length; i++) {
    //length ada 12 jawaban
    if (jawaban16[i].value.toLowerCase() == jawabanbenar[i]) {
      jawaban16[i].style.border = "2px solid green";
      // hasilJawaban[i].innerHTML = "Benar";
      // hasilJawaban[i].style.color = "green";
    } else {
      jawaban16[i].style.border = "2px solid red";
      // hasilJawaban[i].innerHTML = "Salah";
      // hasilJawaban[i].style.color = "green";
    }
  }
}
//reset isian
function reset() {
  let jawaban16 = document.querySelectorAll("#isian1");
  for (let i = 0; i < jawaban16.length; i++) {
    jawaban16[i].value = "";
    jawaban16[i].style.border = "0.5px solid black";
    jawaban16[i].ariaPlaceholder = ". . .";
  }
}
