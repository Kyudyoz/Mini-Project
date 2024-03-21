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
      $("nav").addClass("bg-dark").attr("data-bs-theme", "dark");
    } else {
      $("nav").removeClass("bg-dark").removeAttr("data-bs-theme");
    }
  },
  { threshold: 0.9 }
);
observer.observe(heroElement);

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
