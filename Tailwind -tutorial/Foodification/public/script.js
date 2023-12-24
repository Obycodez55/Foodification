$("#burger").click(() => {
  $("#menu").toggleClass("hidden");
});

$("#menu li").click(function () {
  $(".active__nav").removeClass("active__nav");
  $(this).addClass("active__nav");
});

$("#dark-mode__check").click(() => {
  $("html").toggleClass("dark");

  var theme = $("html").hasClass("dark");

  if (theme) {
    $("#theme-mode").text("Dark Mode");
  } else {
    $("#theme-mode").text("Light Mode");
  }
});


