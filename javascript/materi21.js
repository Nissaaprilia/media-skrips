// Darg and Drop Gunung Api
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

let hslJwb = document.getElementById("hasil");
let benarDrop = 0;

function cekJawabandropkesimpulan() {
  let drop1 = document.getElementById("drop1");
  let drop2 = document.getElementById("drop2");
  let drop3 = document.getElementById("drop3");
  let drop4 = document.getElementById("drop4");
  let drop5 = document.getElementById("drop5");
  // if (drop1.value == 'kosong') {
  //   console.log(benarDrop);
  // } else {
  // }
  if (drop1.value == "kosong" && drop2.value == "kosong" && drop3.value == "kosong" && drop4.value == "kosong" && drop5.value == "kosong") {
    document.getElementById("ket").innerHTML = "Kamu belum memilih Jawaban!";
    document.getElementById("ket").hidden = false;
  } else {
    // hslJwb.hidden = false;
    // document.getElementById('ket').hidden = true;

    //   drop kedalaman
    if (drop1.innerText == "Abu Gunung Api") {
      benarDrop = benarDrop + 1;
      document.getElementById("drop1").style.background = "green";
      document.getElementById("drop1").style.color = "white";
      document.getElementById("drop1").disabled = true;
    } else {
      document.getElementById("drop1").style.background = "red";
      document.getElementById("drop1").style.color = "white";
      document.getElementById("drop1").disabled = true;
    }
    if (drop2.innerText == "Lava/Magma") {
      benarDrop = benarDrop + 1;
      document.getElementById("drop2").style.background = "green";
      document.getElementById("drop2").style.color = "white";
      document.getElementById("drop2").disabled = true;
    } else {
      document.getElementById("drop2").style.background = "red";
      document.getElementById("drop2").style.color = "white";
      document.getElementById("drop2").disabled = true;
    }
    if (drop3.innerText == "Lelehan Lava") {
      benarDrop = benarDrop + 1;
      document.getElementById("drop3").style.background = "green";
      document.getElementById("drop3").style.color = "white";
      document.getElementById("drop3").disabled = true;
    } else {
      document.getElementById("drop3").style.background = "red";
      document.getElementById("drop3").style.color = "white";
      document.getElementById("drop3").disabled = true;
    }
    if (drop4.innerText == "Pipa Vulkanik") {
      benarDrop = benarDrop + 1;
      document.getElementById("drop4").style.background = "green";
      document.getElementById("drop4").style.color = "white";
      document.getElementById("drop4").disabled = true;
    } else {
      document.getElementById("drop4").style.background = "red";
      document.getElementById("drop4").style.color = "white";
      document.getElementById("drop4").disabled = true;
    }
    if (drop5.innerText == "Ruang Magma") {
      benarDrop = +1;
      document.getElementById("drop5").style.background = "green";
      document.getElementById("drop5").style.color = "white";
      document.getElementById("drop5").draggable = true;
    } else {
      document.getElementById("drop5").style.background = "red";
      document.getElementById("drop5").style.color = "white";
      document.getElementById("drop5").draggable = true;
    }
    // hslJwb.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3 mx-auto w-50 text-center">
    //   <span> Benar = ${benarDrop}</kbl></span><br>
    //   <span> Salah = ${3 - benarDrop}</span><br>
    //   </div>	`;
  }
}
