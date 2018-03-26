 //var xoff = 0;
 //var yoff = 10000;
 var inc = 0.01;
 var start = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
   stroke(255);
   noFill();
   beginShape();
   // var inc = 0.01;
   var xoff2 = start;
  for (var x = 0; x < width; x++) {
    stroke(255);
    var n = map(noise(xoff2), 0, 1, -50, 50);
    var s = map(sin(xoff2), -1, 1, 0, height);
    var y = s + n;
    // var y = random(height);
    //var y = noise(xoff2) * 100 + height / 2 + sin(xoff);
    vertex(x, y);
    xoff2 += inc;
  }
  endShape();
  start += inc;
  //noLoop();
}