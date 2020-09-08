var ball,paddle, ball_image, paddle_image;
function preload() {
  ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 30, 30);
  paddle = createSprite(200, 250, 40, 40);
  ball = addImage("ball", ball_image);
  paddle = addImage("paddle", paddle_image);
  
  ball.velocityX = 9;
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[3])
  

  ball.bounceOff(paddle);
  randomVelocity();
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+5;
  }
  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityY = random(-8,8);
}
}
