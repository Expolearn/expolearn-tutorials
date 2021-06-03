$(document).ready(function () {
  // card 1
  $(".hidden").hide();
  var carda = $("#view1");
  carda.click(function () {
    $(".hidden1").show();
    $(this).html("View less");
    carda.click(function () {
      $(".hidden1").toggle();
    });
  });
  // Card 2
  $(".hidden2").hide();
  var cardb = $("#view2");
  cardb.click(function () {
    $(".hidden2").show();
    $(this).html("View less");
    cardc.click(function () {
      $(".hidden2").toggle();
    });
  });

  // Card 2
  $(".hidden3").hide();
  var cardc = $("#view3");
  cardc.click(function () {
    $(".hidden3").show();
    $(this).html("View less");
    cardc.click(function () {
      $(".hidden3").toggle();
    });
  });
});
