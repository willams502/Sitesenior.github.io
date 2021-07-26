document.querySelector(".hamburguer").addEventListener("click",() =>
document.querySelector(".container").classList.toggle("show-menu")
);
$('.slider-principal').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
  });