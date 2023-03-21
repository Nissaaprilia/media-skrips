//cek jawaban materi
function cekJawaban() {
  // jawaban materi 32
  let jawabanmateri32 = document.querySelectorAll("#isian321");
  let jawabanbenar32 = ["4", "8", "12", "18", "1", "12", "10", "11"];

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
  let jawabanmateri32 = document.querySelectorAll("#isian321");

  //materi32
  for (let i = 0; i < jawabanmateri32.length; i++) {
    jawabanmateri32[i].value = "";
    jawabanmateri32[i].style.border = "0.5px solid black";
  }
}
