let pepper;
let x,y;
let color;
let i;
let r, g, b;

function preload () {
  pepper = loadImage("assets/IMG_2760.jpg")
}

function setup() {
  createCanvas(800,1000);
  background(225);
  
  //image(pepper,0,0,400,500);
}

function draw() {
  
  //random point
  
  for (i = 0; i<10; i++) {
    x = random(0, width);
    y = random(0, height);
    color = pepper.get(x,y);
   
    fill(color);
    noStroke();
    ellipse (x, y,20,20);
    //ellipse (x, y, random(5,15));
    
    
  }

  
  
 
}

