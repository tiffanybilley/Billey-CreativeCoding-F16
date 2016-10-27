var xPos;
var velocity;
var soundEffect;

function preload(){
	//soundEffect = loadSound("Media/ball.wav");
}

function setup(){
	createCanvas(600,600);
	xPos = 50;
	velocity = 5;
}

function draw(){
	background(255);
	ballAnimation();

}
function ballAnimation(){
	ellipse(xPos,height/2,100,100);
	xPos = xPos + velocity;
	if(xPos >= width || xPos <= 0){
		velocity = -velocity;
	}
	
	if (xPos ==550){
		soundEffect.play;
	}
	if (xPos == 50){
		soundEffect.play;
	}
	
}

