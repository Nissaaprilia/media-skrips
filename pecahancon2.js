function hasilC() {
  let a1 = document.getElementById("ans1");
  let a2 = document.getElementById("ans2");
  let a3 = document.getElementById("ans3");
  let a4 = document.getElementById("ans4");

  if (a1.value == "6" && a2.value == "3" && a3.value == "12" && a4.value == "4") {
    document.getElementById("checkA").innerHTML = "Benar, kamu hebat!";
    document.getElementById("checkA").style = "margin-left: 10px; color:green; font-size: 20px;";
  } else {
    document.getElementById("checkA").innerHTML = "Salah, coba lagi!";
    document.getElementById("checkA").style = "margin-left: 10px; color:red; font-size: 20px;";
  }
}
