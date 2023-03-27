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
