var spaceship,spacemodule,spacemoduleimg,spacemoduleimg1,invi;
var backgroundimg;
var gamestate="PLAY"


function preload(){
bagro=loadImage("spacebg.jpg");
spaceimg=loadImage("iss.png");
spacemoduleimg=loadImage("spacecraft1.png")
spacemoduleimg1=loadImage("spacecraft2.png")
}
function setup() {
  createCanvas(1000,700);
  spaceship=createSprite(500, 270, 50, 50);
  spacemodule=createSprite(200,400,40,20);
  invi=createSprite(345,345,20,20);
}

function draw() {
  background(bagro);
  if(spacemodule.isTouching(invi)){
    gamestate="OVER"
  }
  if (gamestate==="PLAY")  {
  
  spaceship.addImage("spa",spaceimg)
  spacemodule.addImage("mod",spacemoduleimg)
  spacemodule.scale=0.25
  
  if (keyDown("up")){
    spacemodule.y=spacemodule.y-5
    spacemodule.ChangeAnimation("spacemoduleimg1")
  }
  if (keyDown("down")){
    spacemodule.y=spacemodule.y+5
  }
  if (keyDown("right")){
    spacemodule.x=spacemodule.x+5
  }
  if (keyDown("left")){
    spacemodule.x=spacemodule.x-5
  }
  


//spaceship.debug=true;
invi.debug=true;
  drawSprites();
}
if (gamestate==="OVER"){
  stroke ("green")
  strokeWeight(4)
  textSize(100);
  fill ("red")
  text("YOU WON",200,200);
}
}