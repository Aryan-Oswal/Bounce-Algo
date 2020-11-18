var fixedRect , movingRect , a,b;

function setup() {
  createCanvas(800,400);
  background ("blue")
  fixedRect = createSprite(100, 100, 50, 50);
  movingRect = createSprite(100, 300, 80, 50);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"

  fixedRect.velocityY = 2;
  movingRect.velocityY = -2;
  

  
}

function draw() {
  background("blue");  
   


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width  / 2 && fixedRect.x- movingRect.x  < movingRect.width/2 + fixedRect.width ){


  fixedRect.velocityX = fixedRect.velocityX * -1;
  movingRect.velocityX = movingRect.velocityX  * -1;

  

  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height  / 2 && fixedRect.y-movingRect.y   < movingRect.height/2 + fixedRect.height  / 2){

    fixedRect.velocityY = fixedRect.velocityY * -1;
    movingRect.velocityY = movingRect.velocityY  * -1;

  }
  drawSprites();
}