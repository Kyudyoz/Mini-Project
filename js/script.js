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
