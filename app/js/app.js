$(document).ready(function () {
  // Меню категорий
  $("#submenuHeaderTop").click((evt) => {
    evt.preventDefault();
    $("#submenuHeader").toggleClass("header__submenu--active");
    $("#submenuNav").slideToggle(500);
  });

  $(".header__submenu__item").click(function (evt) {
    evt.preventDefault();
    $("#submenuHeader .header__submenu__text").text($(this).text());
    $("#submenuHeader").removeClass("header__submenu--active");
    $("#submenuNav").slideUp(300);
  });

  $(window).click((evt) => {
    const target = evt.target;
    if (
      !target.closest("#submenuHeader") &&
      !target.closest("#submenuHeaderTop")
    ) {
      $("#submenuHeader").removeClass("header__submenu--active");
      $("#submenuNav").slideUp(300);
    }
  });

  // Меню
  $("#menuBtn").click((evt) => {
    $("#menuBtn").toggleClass("header__menu__btn--active");
    $("#header").toggleClass("header--fade");
    $("#menu").fadeToggle();
    $("html").toggleClass("noscroll");
  });

  /* Fixed Header */
  var header = $("#header");
  var firstBlock = $(".first__block").innerHeight();
  var scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= firstBlock) {
      header.addClass("header--fixed");
    } else {
      header.removeClass("header--fixed");
    }
  }

  // Слайдер "наши работы"
  $("#incarnateSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: true,
      nextArrow: $("#incarnateNext"),
      prevArrow: $("#incarnatePrev"),
      asNavFor: "#incarnateNav",
    });

  // Навигация для слайдера
  $("#incarnateNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: "#incarnateSlider",
    focusOnSelect: true,
  });

  // Макса для телефона
  $(".input--phone").mask("+7 (999) 999 - 9999");

  // Модалльное окно
  function closeModal() {
    $(".mask").fadeOut();
    $("html").removeClass("noscroll");
    $(".modal").slideUp(300);
  }

  function openModal($modal) {
    $(".mask").fadeIn();
    $("html").addClass("noscroll");
    $modal.slideDown(500);
  }

  $(".recall").click((evt) => {
    evt.preventDefault();
    openModal($("#recallModal"));
  });

  $(".mask").click(() => {
    closeModal();
  });

  $(".modal__close").click((evt) => {
    evt.preventDefault();
    closeModal();
  });

  // Показать ещё "Портфолио"
  $(".portfolio__more").click((evt) => {
    evt.preventDefault();
    $(".portfolio__item--hide").fadeIn(200);
    $(".portfolio__item--more").fadeOut(200);
    $(".portfolio__hide__wrapper").slideDown(300);
  });

  // Наши работы (детальная)
  $("#worksSlider1")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: true,
      nextArrow: $("#worksNext1"),
      prevArrow: $("#worksPrev1"),
      asNavFor: "#worksNav1",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    });

  $("#worksNav1").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#worksSlider1",
    focusOnSelect: true,
  });

  $("#worksSlider2")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: true,
      nextArrow: $("#worksNext2"),
      prevArrow: $("#worksPrev2"),
      asNavFor: "#worksNav2",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    });

  $("#worksNav2").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#worksSlider2",
    focusOnSelect: true,
  });

  $("#worksSlider3")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: true,
      nextArrow: $("#worksNext3"),
      prevArrow: $("#worksPrev3"),
      asNavFor: "#worksNav3",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    });

  $("#worksNav3").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#worksSlider3",
    focusOnSelect: true,
  });

  // Изделия
  $(".products__nav__box").click(function (evt) {
    evt.preventDefault();
    $(".products__nav__box").removeClass("products__nav__box--active");
    $(this).addClass("products__nav__box--active");
  });

  $("#productsSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: true,
      nextArrow: $("#productsNext"),
      prevArrow: $("#productsPrev"),
      asNavFor: "#productsNav",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    });

  $("#productsNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: "#productsSlider",
    focusOnSelect: true,
  });
});
