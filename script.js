// Declare and initialize global variables
var canvas;
var clearButton;
var spread;
var slider;

function setup() {
  canvas = createCanvas(500, 400);
  canvas.parent("#canvas-area");
  canvas.mousePressed(drawSplatter);
  clearButton = select("#clear-button");
  clearButton.mousePressed(clearScreen);
  slider = select("#slider");
  slider.input(updateSpread);
  background(0);
  //spread = 50;
}

function updateSpread(){
  spread = slider.value();
}

function drawEllipse() {
  fill("#02ffff");
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}

function clearScreen() {
  background(0);
}

function drawSplatter() {
  var randomNum = random(10, 15);

    for(var i = 0; i < randomNum; i++){
      var r = random(256);
      var g = 221;
      var b = 221;
      fill(r,g,b);
      var randomSize = random(5, 15);
      var x = random(mouseX - spread, mouseX + spread);
      var y = random(mouseY - spread, mouseY + spread);
      ellipse(x, y, randomSize, randomSize);
    }

}
