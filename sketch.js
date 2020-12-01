
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 monkeyImage = loadImage("sprite_1.png");
}



function setup() {
 createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);

  ground.x=ground.width/2;

  console.log(ground.x);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
  background("lightblue")
  ground.velocityX=-4;
  if (ground.x < 0){
  ground.x = ground.width / 2
}
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

spawnobstacle();

drawSprites();
  
}

function spawnobstacle(){
  if(frameCount%120===0){
    obstacle=createSprite(400,300,20,20);
    obstacle.velocityX=-3;
    //obstacle.x=Math.round(random(0,400));
    //obstacle.y=Math.round(random(30,450));
      obstacle.scale=0.2;
    obstacle.lifetime=150;
    //r=Math.round(random(1,2));
      //if(r===1){
      obstacle.addImage(obstacleImage);
    
obstacleGroup.add(obstacle);
  }
     
     
     
     
}