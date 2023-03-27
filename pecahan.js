$(document).ready(function () {
  function randomSoal() {
    let url = "kuis.json";
    $.getJSON(url, function (data) {
      let randArray = Math.floor(Math.random() * data.persamaan.length);

      $("#show-soal1").html(data.persamaan[randArray].soal);
      $("#jawab1").html(data.persamaan[randArray].jawab);

      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    });
  }

  randomSoal();

  function hapus() {
    $("#angka1").val("");
    $("#tanggap1").html("");
  }

  $("#dihapus").on("click", function () {
    hapus();
  });

  $("#btnnext1").on("click", function () {
    randomSoal();
  });

  function answer() {
    let a = parseInt($("#angka1").val());
    let b = parseInt($("#jawab1").html());

    if (a === b) {
      $("#tanggap1").html("Jawaban Kamu Benar");
      $("#tanggap1").css("color", "green");
      console.log(a);
      console.log(b);
    } else {
      $("#tanggap1").html("Jawaban Kamu Salah");
      $("#tanggap1").css("color", "red");
      console.log(a);
      console.log(b);
    }
  }
  $("#btnperiksa1").on("click", function () {
    answer();
  });
});
