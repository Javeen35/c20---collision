var fixed;
var moving;

function setup() {
  createCanvas(1200,800);

  moving = createSprite(400,200,80,30);
  fixed = createSprite(200,200,50,80);
}

function draw() {
  background(0); 

  fixed.shapeColor= "green";
  moving.shapeColor="green"; 

  
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  console.log(moving.x-fixed.x);

  if(moving.x-fixed.x<fixed.width/2+moving.width/2 && 
    fixed.x-moving.x<fixed.width/2+moving.width/2 && 
    moving.y-fixed.y<fixed.height/2+moving.height/2 && 
    fixed.y-moving.y<fixed.height/2+moving.height/2){
    fixed.shapeColor= "red";
    moving.shapeColor="red"; 
  }

  else {

  fixed.shapeColor= "green";
  moving.shapeColor="green"; 

  }

  
  drawSprites();
}