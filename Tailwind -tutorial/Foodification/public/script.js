$("#burger").click(() => {
  $("#menu").toggleClass("hidden");
});

$("#menu li").click(function () {
  $(".active__nav").removeClass("active__nav");
  $(this).addClass("active__nav");
});

$("#dark-mode__check").click( () => {
    $("html").toggleClass("dark");
});