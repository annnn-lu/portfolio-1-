$(".exp_toggle").click(function () {
  $(this)
    .closest(".experience_item")
    .find(".exp_detail")
    .slideToggle();
});

$(".exp_toggle").click(function () {

  if ($(this).text() === "less") {
    $(this).text("more");
  } else {
    $(this).text("less");
  }

  $(this).next(".exp_detail").slideToggle();
});


$(".pickme").click(function () {
  $(this).text("Go →");
});


$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".header").addClass("scrolled");
  } else {
    $(".header").removeClass("scrolled");
  }
});