
var score = 0
var bird,birdhit
var cannon
var nature
var ball
var boy


function preload(){
birdImg = loadAnimation("bird flying.png")
birdhitImg = loadAnimation("bird_hit.png")
ballImg = loadImage("ball1.png")
natureImg = loadImage("background_nature.png")
}

function setup() {
 createCanvas(900,600)
 nature= createSprite(width/2,height/3);
nature.addImage("nature",natureImg);
nature.velocityX = 1
nature.scale = 1.6
 
bird = createSprite(800,300)
  bird.addAnimation("flying",birdImg)
  bird.scale = 0.1



}

function draw() {
 background(100)





 drawSprites()
}