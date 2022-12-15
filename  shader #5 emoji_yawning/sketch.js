function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background("#79bec3");
  fill("#fde7b1");
  ellipse(200,200,200,200);
  fill ("#000000");
  
  //eyes
  ellipse(150,210,20,mouseY/20);
  ellipse(250,210,20,mouseY/20);
  fill("#ffd5b399");
  
  //cheeks
  ellipse(140,240,25,25);
  ellipse(260,240,25,25);
  fill("#ffa761");
  
  //mouth
  
  ellipse(200,240,20,mouseX/10);
  
  
  
  
  
}