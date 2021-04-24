
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  rect1=createSprite(200,100,50,50);
  rect1.shapeColor="blue";

  rect2=createSprite(300,100,50,50);
  rect2.shapeColor="yellow";

 rect3=createSprite(400,100,50,50);
 rect3.shapeColor="orange"; 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(colisionTest(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(colisionTest(movingRect,rect1))
  {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red"; 
  }else if(colisionTest(movingRect,rect2))
  {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red"; 
  }
  else if(colisionTest(movingRect,rect3))
  {
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  } 
  else {
    movingRect.shapeColor = "green";
  rect1.shapeColor="blue";
  rect2.shapeColor="yellow";
  rect3.shapeColor="orange";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function colisionTest(r1,r2){
  if (r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x< r1.width/2 + r2.width/2
    && r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


