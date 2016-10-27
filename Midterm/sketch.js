var bubble; 
var a;
var b;
var c; 
var rectHeight;
var rectWidth;
var table;
var book;
var e;

function preload(){
  table = loadImage("assets/table.png");
  book = loadImage("assets/book_too.png");
}


function setup() {
  createCanvas(710, 710);
  bubble = movement();
  a = 150;
  b = 10;
  c = 0;

 
   
}


function draw() {
    background(50, 50, 100);
    image(table,0, height - table.height);
    image(book,0, (height - table.height)+14);
    //booksOnTable();
    textSize(50);
    fill(255);
    text("Stress Bubble", 0,75);
    text("Find it, and click!", 0,125);
    bubblevisual();
    backandforth();
    ending();

    
}

function movement() {
  x = random(100,600);
  y = random(100,600);
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
  
  
}


function ending(){
  if (diameter <= 1){
    diameter = diameter +10;
    loop();
  }
}



function mouseReleased(){
  a = a + 50;
  
}
