function setup() {
  createCanvas(800, 800);
  frameRate(20);
  }
  
  
function draw() {
  ellipse(400,400,400);
  line (400,0,400,800);
  line(0,400,800,400);
  ellipse(400,400,1,1);
  let winkel = (Math.random()*2*Math.PI);
  let x = 400 + 200 * Math.cos(winkel);
  let y = 400 + 200 * Math.sin(winkel);
  stroke(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
  ellipse(x,y,10,10);
  }