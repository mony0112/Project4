let pepper;
let x, y, x1, y1;
let color;

function preload() {
  pepper = loadImage("assets/IMG_2760.jpg");
}

function setup() {
  createCanvas(800, 1000);
  
  x = width/2;
  y = height/2;
  background(0);
}

function draw() {
  
  for (i=0; i<10; i++) {

    //image(pepper,0,0);
    x1 = x + random(-10,10);
    y1 = y + random(-10,10);
    color = pepper.get(x,y);
    stroke(color);
    strokeWeight(2);
    line (x, y, x1, y1);
    x = x1;
    y = y1;

    //draw only on the canvas
    if (x <0 || x > width || y < 0 || y > height){
      x = random(0, width);
      y = random(0, height);
    }
  }
  
}