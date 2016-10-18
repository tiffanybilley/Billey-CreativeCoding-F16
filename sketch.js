var bubble; 
var rect; 
var a;
var b;
var c; 

function setup() {
  createCanvas(710, 400);
  bubble = movement();
  a = 150;
  b = 10;
  c = 0;
  rect = [];
}

function draw() {
    background(50, 50, 100);
    //jitter();
    bubblevisual();
    backandforth();
    //mousePressed();
    //mouseReleased();
}

function movement() {
  x = random(width);
  y = random(height);
  diameter = random(20, 100);
  speed = 1;
}

function backandforth() {
  x += random(-speed, speed);
  y += random(-speed, speed);
}

function bubblevisual() {
  fill(a,0,0);
  ellipse(x, y, diameter, diameter);

}

function mousePressed(){
  a = a + 50;
  diameter =  diameter - 10;
  //rect.push(rect(mouseX,mouseY));
}



function mouseReleased(){
  a = a + 50;
}