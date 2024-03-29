let userguru = document.getElementById("userguru");
let logoutguru = document.getElementById("logoutguru");
let nama = localStorage.getItem("nama");
var currentUser = null;
let nip = localStorage.getItem("nip");
// Function;
function getName() {
  if (nama == null) {
    Swal.fire({
      icon: "info",
      title: "Silahkan Login Terlebih Dahulu",
    }).then(() => {
      window.location = "./loginguru.html";
    });

    // alert('Silahkan Login Terlebih Dahulu');
    // window.location = './loginguru.html';
  } else {
    userguru.innerText = nama;
  }
}

getName();

function Signout() {
  // logoutguru.href = '../index.html';
  localStorage.removeItem("nama");
  window.location = "../../loginguru.html";
}

// window Load

window.onload = function () {
  getName();
  if (currentUser == null) {
    logoutguru.href = "../../loginguru.html";
  } else {
    userguru.innerText = currentUser.nama;
    logoutguru.innerText = "Logout";
  }
};

// CENTER MODAL
(function ($) {
  "use strict";

  function centerModal() {
    $(this).css("display", "block");
    var $dialog = $(this).find(".modal-dialog"),
      offset = ($(window).height() - $dialog.height()) / 2,
      bottomMargin = parseInt($dialog.css("marginBottom"), 10);

    // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
    if (offset < bottomMargin) offset = bottomMargin;
    $dialog.css("margin-top", offset);
  }

  $(document).on("show.bs.modal", ".modal", centerModal);
  $(window).on("resize", function () {
    $(".modal:visible").each(centerModal);
  });
})(jQuery);
