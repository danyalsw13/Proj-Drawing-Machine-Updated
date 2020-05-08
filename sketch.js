var radius =40;
var x = -radius;
var speed = 0.1;
var t = 0;
var pg;
var theta;
function setup(){
  createCanvas(800,800);
  textFont("Arial");


}

function draw() {

  fill(2,0,20);
fill(0,220,100);
//variableEllipse(mouseX, mouseY, pmouseX, pmouseY);


frameRate(30);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (mouseX / width)*180;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
//  translate(400,700);

  // Move to the end of that line
//translate(-280,-320);
  // Start the recursive branching!
  branch(420);
  branch(320);
  branch(-50);


   smooth();
   stroke(255);
   strokeWeight(5);
  // var x= mouseX;
   //var y= mouseY;
//   point(140,160);
  // point(240,180);
   //point(180,210);

   textSize(75);
  fill(random(255), random(255), random(255));
   text("WHY SO SERIOUS?", 27,90);
   text("See Ya Later!", 27,90,x);

  //if (random(0,1) > 0.5){

    //    fill(5);



      //}
      if (random(0,1)> 0.5){
        background(0);
        fill(random(255), random(255), random(255));
      }


  // quad(350,y+670,310,280,400,100, 120,295);

  // quad(35,y+67,31,28,40,10,20,29);
  // quad(30,y+70,10,80,40,100, 120,95);


   //for(var i= 20; i < 100; i+=60){
    //  line(50+i,50, 420+i, 410);
  // }
   //for (var i = 20; i <200; i+=20){
  //    line(50,50, 420+i, 410);
  // }

    strokeWeight(random(3, 10));
    stroke(random(255), random(255),random(255));
    fill(0,0,0);
    rainbow_size = random(200, 270);
    lifespan= 255;
    fill(0,lifespan/2);
    ellipse(650, 350, rainbow_size, rainbow_size);
    ellipse(450, 550, rainbow_size, rainbow_size);
    ellipse(450, 450, rainbow_size, rainbow_size);
    rect(180,390,rainbow_size,rainbow_size);
    rect(120,520,rainbow_size,rainbow_size);
    //quad(35,y+67,31,28,40,10,20,29);

    push()
    //  background(0, 0, 0, random(1, 10))
      lines()
      pop()

}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}

function branch(h) {
   h *= 0.66;

   if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}

function lines () {
  //const DEGREE = 1 / 12
  const LINES = 4;
  const HORIZON_Y = windowHeight * 20 / 30;

  stroke(255, 255,0);
  strokeWeight(2);

  for (let i = 0; i < LINES; ++i) {
  let y = HORIZON_Y + i * windowHeight / 30 / LINES;

    for (let y = 0; y < windowHeight; ++y) {
      x += sin(random(1/12*y));
//      x -= sin(random(1/12*y));

    x= -x;


      point(x, y);

        }

      }



    //  background(10, 10); // translucent background (creates trails)

       // make a x and y grid of ellipses
       if (mouseIsPressed){
       for (let x = 0; x <= width; x = x + 30) {
         for (let y = 0; y <= height; y = y + 30) {
           // starting point of each circle depends on mouse position
           const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
           const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
           // and also varies based on the particle's location
           const angle = xAngle * (x / width) + yAngle * (y / height);

           // each particle moves in a circle
           const myX = x + 20 * cos(2 * PI * t + angle);
           const myY = y + 20 * sin(2 * PI * t + angle);

          fill(204,153,255);
          ellipse(myX, myY, 15); // draw particle

         }

        }
       t = t + 0.01; // update time

      }



};
