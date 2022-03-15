const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/calculator", function (req, res) {
	res.sendFile(__dirname + "/" + "cal1.html");
});


app.post("/", function (req, res) {
    var st = req.body.txt1;
    var arr1 = st.split("+");
    var arr2 = st.split("-");
    var arr3 = st.split("*");
    var arr4 = st.split("/");
    var output;
    if (arr1.length == 2)
      output = (parseInt(arr1[0]) + parseInt(arr1[1])).toString();
    if (arr2.length == 2)
      output = (parseInt(arr2[0]) - parseInt(arr2[1])).toString();
    if (arr3.length == 2)
      output = (parseInt(arr3[0]) * parseInt(arr3[1])).toString();
    if (arr4.length == 2)
      output = (parseInt(arr4[0]) / parseInt(arr4[1])).toString();
  res.send("output is"+output);

  

});
app.listen(8000, function () {
	console.log("port active at 8000");
});
