let winkel;

function setup() {
  let canvas = createCanvas(800,800);
  canvas.parent('meincanvas');
  winkel = 0;
  frameRate(1);
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  ellipse(400,400,400,400);
  line(0,400,800,400);
  line(800,400,780,390);
  line(800,400,780,410);
  line(400,800,400,0);
  line(390,20,400,0);
  line(410,20,400,0);
  text("x",760,415);
  text("y",405,40);

  let x = 400 + 200 * Math.cos(winkel);
  let y = 400 + 200 * Math.sin(winkel);

  text("Radius: 200",50,50);
  text("Winkel: " + str(-1 * winkel) + " rad",50,75);
  text("Winkel: " + str(winkel * -180 / Math.PI) + " °",50,100);
  text("x     : " + str(x - 400),50,125);
  text("y     : " + str(400 - y),50,150);
  text("Runde : " + str(Math.floor(-1 * winkel / (2 * Math.PI)) + 1),50,200);
  stroke(0,0,255);
  fill(0,0,255);
  line(x,400,x,y);
  line(400,y,x,y);
  line(400,400,x,y);
  ellipse(x, y, 8, 8);
  winkel = winkel - Math.PI/18;
}
