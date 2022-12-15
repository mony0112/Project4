var pixelsize = 10;

let img;
let bgcolor = 0;
let capture;

function preload() {
  img = loadImage("assets/dim-gunger-eTEqbJFdqFU-unsplash.jpg");
}

function setup() {
  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);

  createCanvas(600, 600);
  
  image(img,0,0, width, height);
  
  drawgrid();

}

function draw() {
  //background(220);
  image(capture, 0,0, width, height);
  drawgrid();
  
}

function drawgrid() {//this draws a grid of shapes based on the canvas pixels
  //image(img, 0, 0)
  loadPixels();
  
  background(255);
  noStroke();
  for (var i=0;i<width;i+=pixelsize) {
    for (var j=0;j<height;j+=pixelsize) {
      let index = 4*(i+j*img.width);
      let r = pixels[index];
      let g = pixels[index+1];
      let b = pixels[index+2];
      fill(r, g, b, 255);//same colors as the pixels
      
      
      let av = (r+g+b)/3.0;
      
      if (av<70) {
        fill(255, 0,0);
        ellipse(i, j, pixelsize+2, pixelsize+2);
  
      }
      else {
        fill(r, g, b, 255);
      }
      
      let tempsize = random(1, pixelsize);
      rect(i, j, tempsize, tempsize);
      //rect(i, j, pixelsize-2, pixelsize-2);
      //rect(i, j, pixelsize, pixelsize);
      //ellipse(i, j, pixelsize, pixelsize);
      
    }
  }
}

function keyPressed() {
  if (key=='+' || key=='=') {
    pixelsize++;
  }
  if (key=='-'||key=='_') {
    if (pixelsize>1)
      pixelsize--;
  
  }
  drawgrid();
    
}