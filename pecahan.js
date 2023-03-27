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

$(document).ready(function () {
  function randomSoal() {
    let url = "kuis1.json";
    $.getJSON(url, function (data) {
      let random = Math.floor(Math.random() * data.persamaan.length);
      $("#show-soal11").html(data.persamaan[random].soal);
      $("#jawab11").html(data.persamaan[random].jawab);

      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    });
  }

  randomSoal();

  function hapus11() {
    $("#angka11").val("");
    $("#tanggap11").html("");
  }

  $("#dihapus11").on("click", function () {
    hapus11();
  });

  $("#btnnext11").on("click", function () {
    randomSoal();
  });

  function answer() {
    let a = JSON.stringify($("#angka11").val());
    let b = JSON.stringify($("#jawab11").html());

    if (a === b) {
      $("#tanggap11").html("Jawaban Kamu Benar");
      $("#tanggap11").css("color", "green");
      console.log(a);
      console.log(b);
    } else {
      $("#tanggap11").html("Jawaban Kamu Salah");
      $("#tanggap11").css("color", "red");
      console.log(a);
      console.log(b);
    }
  }
  $("#btnperiksa11").on("click", function () {
    answer();
  });
});
