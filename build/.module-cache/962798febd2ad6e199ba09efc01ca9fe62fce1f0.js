React.render(
	React.createElement("h1", null, "Hello, James!"),
	document.getElementById('example')
);

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var opts = {
  distance : 30,
  lineWidth : 1,
  gridColor  : "#66ff00",
  caption : false
};
new Grid(opts).draw(context);