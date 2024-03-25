window.onload = function () {
  window.scrollTo(0, 0);
};
$(document).ready(function () {
  if (localStorage.getItem("darkMode") == "darkMode") {
    $("html").attr("data-bs-theme", "dark");
    $(".switch").prop("checked", true);
    $(".btn").removeClass("btn-dark").addClass("btn-light");
    $(".form-switch label").html(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
    </svg>
  `);
  } else {
    $("html").attr("data-bs-theme", "light");
    $(".switch").prop("checked", false);
    $(".btn").removeClass("btn-light").addClass("btn-dark");
    $(".form-switch label").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    class="bi bi-moon-stars" viewBox="0 0 16 16">
    <path
        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
    <path
        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
</svg>
    `);
  }
});
$(window).scroll(function () {
  const scrollToTopButton = $("#scrollToTopButton");
  if ($(this).scrollTop() > 1000) {
    scrollToTopButton.fadeIn("slow");
  } else {
    scrollToTopButton.fadeOut("slow");
  }
});

$("#scrollToTopButton").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
});
$(".switch").change(function (e) {
  e.preventDefault();
  if ($(".switch").is(":checked") == true) {
    $("html").attr("data-bs-theme", "dark");
    $(".form-switch label").html(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
    </svg>
  `);
    localStorage.setItem("darkMode", "darkMode");
  } else {
    localStorage.setItem("darkMode", "lightMode");
    $("html").attr("data-bs-theme", "light");
    $(".form-switch label").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    class="bi bi-moon-stars" viewBox="0 0 16 16">
    <path
        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
    <path
        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
</svg>
    `);
  }
});

$(".navbar-toggler").on("click", () => {
  const scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY === 0) {
    window.scrollTo(0, window.innerHeight * 0.1);
  }
});

$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");
  var elTujuan = $(tujuan);
  //   console.log(elTujuan.offset().top);
  $("html, body").animate({ scrollTop: elTujuan.offset().top - 130 }, 10);
  e.preventDefault();
});

const heroElement = document.querySelector("header");

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      if ($("html").attr("data-bs-theme") == "dark") {
        $("nav").addClass("bg-dark").attr("data-bs-theme", "dark");
      } else {
        $("nav").addClass("bg-white").attr("data-bs-theme", "light");
      }
    } else {
      $("nav").removeClass("bg-dark").removeAttr("data-bs-theme");
      $("nav").removeClass("bg-white").removeAttr("data-bs-theme");
    }
  },
  { threshold: 0.9 }
);
observer.observe(heroElement);

$(".switch").change(function (e) {
  e.preventDefault();
  $("nav").removeClass("bg-dark").removeAttr("data-bs-theme");
  $("nav").removeClass("bg-white").removeAttr("data-bs-theme");
  const heroElement = document.querySelector("header");

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        if ($("html").attr("data-bs-theme") == "dark") {
          $("nav").addClass("bg-dark").attr("data-bs-theme", "dark");
          $(".btn").removeClass("btn-dark").addClass("btn-light");
        } else {
          $("nav").addClass("bg-white").attr("data-bs-theme", "light");
          $(".btn").removeClass("btn-light").addClass("btn-dark");
        }
      } else {
        $("nav").removeClass("bg-dark").removeAttr("data-bs-theme");
        $("nav").removeClass("bg-white").removeAttr("data-bs-theme");
      }
    },
    { threshold: 0.9 }
  );
  observer.observe(heroElement);
});

const exampleModal = document.getElementById("exampleModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;

    const image = button.getAttribute("data-bs-whatever");
    const imageAlt = button.getAttribute("data-bs-whatever2");

    const modalBodyInput = exampleModal.querySelector(".modal-body .image");

    // modalBodyInput.value = image;
    modalBodyInput.setAttribute("src", image);
    modalBodyInput.setAttribute("alt", imageAlt);
    var imageElement = document.getElementById("image");
    var altText = imageElement.alt;

    console.log("Alt text:", altText);
  });
}

$(document).ready(function () {
  $("#form-pesanan").submit(function (e) {
    // Mengambil data dari form
    var nama = $("#form-pesanan input[name='nama']").val();
    var nomor = $("#form-pesanan input[name='nomor']").val();
    var alamat = $("#form-pesanan textarea[name='alamat']").val();
    var pilihan = $("#form-pesanan select[name='pilihan']").val();
    var jumlah = $("#form-pesanan input[name='jumlah']").val();
    var catatan = $("#form-pesanan textarea[name='catatan']").val();
    var imageElement = document.getElementById("image");
    var altText = imageElement.alt;
    // Memformat data untuk WhatsApp
    if (pilihan == "Sesuai Gambar") {
      var data =
        "Nama: " +
        nama +
        "\nNomor Whatsapp: " +
        nomor +
        "\nAlamat: " +
        alamat +
        "\nPilihan: " +
        pilihan +
        "\nSesuai dengan gambar: " +
        altText +
        "\nJumlah Pembelian: " +
        jumlah +
        "\nCatatan: " +
        catatan;
    } else {
      var data =
        "Nama: " +
        nama +
        "\nNomor Whatsapp: " +
        nomor +
        "\nAlamat: " +
        alamat +
        "\nPilihan: " +
        pilihan +
        "\nJumlah Pembelian: " +
        jumlah +
        "\nCatatan: " +
        catatan;
    }

    // Membuka WhatsApp dengan data yang sudah diformat
    window.open(
      "https://api.whatsapp.com/send?phone=6281232140171&text=" +
        encodeURIComponent(data),
      "_blank"
    );
  });
});
