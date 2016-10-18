var bubble; 
var rectangle; 
var a;
var b;
var c; 

function setup() {
  createCanvas(700, 400);
  bubble = movement();
  a = 150;
  b = 10;
  c = 0;
  s = random(0,700);
  t = random(0,400);
}

function draw() {
  	background(50, 50, 100);
  	//movement();
  	bubblevisual();
  	backandforth();
  	mousePressed();
  	//diameterOfNone();
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
	push();
	a = a + 50;
	diameter =  diameter - 10;
	pop();
	if (diameter < 0){
		random(0,700);
	}
}
/*
function diameterOfNone(){
	if (diameter <  0){
		ellipse(s,t,2,2);
		ellipse(s,t,2,2);
		ellipse(s,t,2,2);
		ellipse(s,t,2,2);
		ellipse(s,t,2,2);
	}
}

*/

