
var trex ,trex_running,trex_collided;
function preload(){
  // 3 llamar imagenes para animación
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
// 4 llamar a la animacion
  trex_collided=loadAnimation("trex_collided.png");
  // groundImage=loadImage("ground2.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //1 create a trex sprite
  trex=createSprite(50,100,20,100);
  // llamar animación 
  trex.addAnimation("running",trex_running);
  //  5 tamaño de trex
  trex.scale=0.5;
  // 5 ubicación de trex
  trex.x=50;   
  // 2 crear sprite del piso
  ground=createSprite(200,180,400,20)
 
}

function draw(){

  background("white")
  // 6 trex se mueve con la tecla space
  if(keyDown("space"))
  {
    trex.velocityY=-10;
           
  }
  //  7 gravedad Trex
  trex.velocityY=trex.velocityY + 0.5;    
  // 8 trex toca el suelo
 trex.collide(ground);
  drawSprites();
  

}
