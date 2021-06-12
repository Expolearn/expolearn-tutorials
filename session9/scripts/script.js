var a = document.getElementById("num1");
var b = document.getElementById("num2");
a = 5;
b = 0;
var r1;
var r2;
var r3;
var r4;
r1 = a + b;
r2 = a > b ? a - b : b - a;
r3 = a * b;
r4 = b == 0 ? 0 : a / b;
$("#add").click(function () {
  document.getElementById("result1").innerHTML = r1;
});

$("#difference").click(function () {
  document.getElementById("result2").innerHTML = r2;
});

$("#multiply").click(function () {
  document.getElementById("result3").innerHTML = r3;
});

$("#divide").click(function () {
  document.getElementById("result4").innerHTML = r4;
});
