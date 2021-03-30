
var fixedRect,movingRect;
var rect1;
var rect2;
var rect3;
var rect4;

function setup() {

  createCanvas(800,800);
  fixedRect = createSprite(400, 400, 40,40);
  movingRect = createSprite(200,100,40,40);
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "red"

   rect1 = createSprite(200,200,40,40);
   rect1.shapeColor = "brown";
   rect2= createSprite(700,200,40,40);
   rect2.shapeColor = "orange";
   rect3= createSprite(150,500,40,40);
   rect3.shapeColor = "purple";
   rect4 = createSprite(500,250,40,40);
   rect4.shapeColor = "pink";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(Touching(movingRect,rect4)){
    movingRect.shapeColor = "yellow"
    rect4.shapeColor = "blue"
 }
else{
  movingRect.shapeColor = "red"
  rect4.shapeColor = "pink"
}

if(Touching(movingRect,rect3)){
  movingRect.shapeColor = "yellow"
  rect3.shapeColor = "blue"
}
else{
movingRect.shapeColor = "red"
rect3.shapeColor = "purple"
}

if(Touching(movingRect,rect2)){
  movingRect.shapeColor = "yellow"
  rect2.shapeColor = "blue"
}
else{
movingRect.shapeColor = "red"
rect2.shapeColor = "orange"
}

if(Touching(movingRect,rect1)){
  movingRect.shapeColor = "yellow"
  rect1.shapeColor = "blue"
}
else{
movingRect.shapeColor = "red"
rect1.shapeColor = "brown"
}

if(Touching(movingRect,fixedRect)){
  movingRect.shapeColor = "yellow"
  fixedRect.shapeColor = "blue"
}
else{
movingRect.shapeColor = "red"
fixedRect.shapeColor = "green"
}
  drawSprites();
}




