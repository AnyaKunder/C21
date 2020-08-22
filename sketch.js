var fixedRect, movingRect;
var ball, paddle
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 ball=createSprite(400,400,20,20)
 paddle=createSprite(400,400,50,10)
 ball.shapeColor="purple"
 paddle.shapeColor="yellow"
  /*movingRect.velocityY = -5;
  fixedRect.velocityY = +5;*/
}

function draw() {
  background(0,0,0);  
//movingRect.x=mouseX
//movingRect.y=mouseY
ball.x=mouseX
ball.y=mouseY

 if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
 }

 else {
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}
 if(isTouching (ball,paddle)){
 ball.shapeColor="yellow"
 paddle.shapeColor="purple"
 }
  else{
    ball.shapeColor="purple"
 paddle.shapeColor="yellow"
  }
  drawSprites();
}
function isTouching (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
  
 && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  return true
}
else {
 return false 
}

}