var screen=0;
var y = -20;
var x = 200;
var speed = 2;
var score=0;
var sound; 
function preload(){
    bg=loadImage("egg.png");
    ck=loadImage("hen.jpg");
}
function setup(){
    createCanvas(windowWidth, windowHeight);   
}
function draw(){
    background(ck);
    if (screen==0) {
        startScreen();
    }
    else if (screen==1) {
        gameOn();
    }
    else if (screen==2) {
        endScreen();
    }
}
function startScreen(){
background(bg);
fill("blue");
textAlign(CENTER);
textSize(30);
text("WELCOME TO MY EGG-CATCHING GAME!!!",width/2,height/2);
fill(255);
text("click to start",width/2,height/3+200);
reset();
}
function mousePressed(){
    if (screen==0) {
        screen=1;
    } else if (screen==2) {
        screen==0;
    }
}
function reset(){
    score=0;
    speed=2;
    y=-20;    
}

