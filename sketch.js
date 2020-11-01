var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(200,200,50,30);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  //30/2 = 15
  //50/2 = 25
  //15 + 25 = 40
}

function draw() {
  background(255,255,255);  

  console.log(fixedRect.x-movingRect.x);
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(fixedRect.x-movingRect.x< fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
   fixedRect.y-movingRect.y< fixedRect.height/2 + movingRect.height/2 && 
   movingRect.y- fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){

    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  drawSprites();
}