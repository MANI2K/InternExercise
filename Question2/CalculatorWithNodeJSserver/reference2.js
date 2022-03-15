var input = document.getElementById("txt1");
input.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
   event.preventDefault();
   document.getElementById("ans").click();
  }
});
var input = document.getElementById("txt1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode == 8) {
   event.preventDefault();
   document.getElementById("clear").click();
  }
});
function zero() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (0).toString();
}

function one() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (1).toString();
}
function two() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (2).toString();
}
function three() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (3).toString();
}
function four() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (4).toString();
}
function five() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (5).toString();
}
function six() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (6).toString();
}
function seven() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (7).toString();
}
function eight() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (8).toString();
}
function nine() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + (9).toString();
}
function add() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + ("+").toString();
}
function sub() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + ("-").toString();
}
function mul() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + ("*").toString();
}
function div() {
    var st = document.getElementById("txt1").value;
    document.getElementById("txt1").value = st + ("/").toString();
}

function oper() {
    var st = document.getElementById("txt1").value;
    var arr1 = st.split("+");
    var arr2 = st.split("-");
    var arr3 = st.split("*");
    var arr4 = st.split("/");
    if (arr1.length == 2)
        document.getElementById("txt1").value = (parseInt(arr1[0]) + parseInt(arr1[1])).toString();
    if (arr2.length == 2)
        document.getElementById("txt1").value = (parseInt(arr2[0]) - parseInt(arr2[1])).toString();
    if (arr3.length == 2)
        document.getElementById("txt1").value = (parseInt(arr3[0]) * parseInt(arr3[1])).toString();
    if (arr4.length == 2)
        document.getElementById("txt1").value = (parseInt(arr4[0]) / parseInt(arr4[1])).toString();
}
