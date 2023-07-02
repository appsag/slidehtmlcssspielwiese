let theta;

function setup() {
  let canvas = createCanvas(700,550);
  canvas.parent('meincanvas');

}

function draw() {
  background(235);
  frameRate(1);
  stroke('brown');
  strokeWeight(16)
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (mouseX / width) * 90;
  // Convert it to radians
  theta = radians(20);
  // Start the tree from the bottom of the screen
  translate(width/2,height);
  // Draw a line 150 pixels
  line(0,0,0,-150);
  // Move to the end of that line
  translate(0,-150);
  // Start the recursive branching!
  branch(150,16);
}

function branch(h,s) {
// Each branch will be 0.78 - Random(-0.38 - 0) the size of the previous one
//    h = h * (0.75 + random(-0.3,0));
    let h1 = h * (0.78 + random(-0.38,0));  
// Reduce stroke weight for smaller branches
    if (s > 3)
        s = s - 3;
    else
    // Set green color for small branches
        stroke('green');
    // Stroke the line
    strokeWeight(s);
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h1 > 2) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(2 * theta);   // Rotate by theta
      line(0, 0, 0, -h1);  // Draw the branch
      translate(0, -h1); // Move to the end of the branch
      branch(h1,s);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
    let h2 = h * (0.78 + random(-0.38,0));  
    // Repeat the same thing, only branch off to the "left" this time!
    if (h2 > 2) {
      push();
      rotate(-2.5 * theta);
      line(0, 0, 0, -h2);
      translate(0, -h2);
      branch(h2,s);
      pop();
    }
    let h3 = h * (0.78 + random(-0.38,0));  
    if (h3 > 2) {  
      // Repeat the same thing for the middle branch
      push();
      rotate(0.5 * theta);
      line(0, 0, 0, -h3);
      translate(0, -h3);
      branch(h3,s);
      pop();
    }
  }
  