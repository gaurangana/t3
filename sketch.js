
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot ;
var polygon_img ;
var stand1, stnd2 ,ball ;
var block1, block2,block3,block4,block5,block6,block7,block8,block9,block10 ;
var block11, block12,block13,block14,block15,block16 ;
var blocks1, blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9 ;
var a,b ;
var gameState= "onSling" ;
var score = 0

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(2000,1500) ;

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine) ;

    ground= new Stand(1000,1000,2000,20) ;
    stand1= new Stand(390,300,250,10) ;
    stand2= new Stand(700,200,200,10) ;

    block1 = new Block(300,275,30,40) ;
    block2 = new Block(330,275,30,40) ;
    block3 = new Block(360,275,30,40) ;
    block4 = new Block(390,275,30,40) ;
    block5 = new Block(420,275,30,40) ;
    block6 = new Block(450,275,30,40) ;
    block7 = new Block(480,275,30,40) ;

    block8 = new Block(330,235,30,40) ;
    block9 = new Block(360,235,30,40) ;
    block10 = new Block(390,235,30,40) ;
    block11 = new Block(450,235,30,40) ;
    block12 = new Block(480,235,30,40) ;

    block13 = new Block(360,195,30,40) ;
    block14 = new Block(390,195,30,40) ;
    block15 = new Block(420,195,30,40) ;

    block16 = new Block(390,155,30,40) ;

    blocks1 = new Block(640,175,30,40) ;
    blocks2 = new Block(670,175,30,40) ;
    blocks3 = new Block(700,175,30,40) ;
    blocks4 = new Block(730,175,30,40) ;
    blocks5 = new Block(760,175,30,40) ;

    blocks6 = new Block(670,135,30,40) ;
    blocks7 = new Block(700,135,30,40) ;
    blocks8 = new Block(730,135,30,40) ;

    blocks9 = new Block(700,95,30,40) ;

    a= 5, b= 5  ;
    ball= Matter.Bodies.polygon(100,200,5,5)

    World.add(world,ball ) ;
    console.log(ball) ;
    //slingshot = new Slingshot(ball,{x:100, y:200}) ;
    slingshot = new SlingShot(ball,{x:100, y:200});

 const Render=Matter.Render;
var render = Render.create({
 element: document.body,
 engine: engine,
 Options:
 { width: 1000,
     height: 700,
      wireframes: false 
    } }); 
Render.run(render);



}
function draw(){
  background("black") ;
  text(mouseX+',' + mouseY, 10 , 15 ) ;
  textSize(20) ;
  text("Drag the hexagonal stone and release it, to lauch it towards the block" , 100, 30) ;
  textSize(20)
  fill("white")
  text("score: "+ score, 750 , 40) 
  ground.display() ;
  stand1.display() ;
  stand2.display() ;
  strokeWeight(2) ;
  stroke(15) ;
  fill("skyblue") ;
  block1.display() ;
  block2.display() ;
  block3.display() ;
  block4.display() ;
  block5.display() ;
  block6.display() ;
  block7.display() ;
  fill("pink") ;
  block8.display() ;
  block9.display() ;
  block10.display() ;
  fill("pink") ;
  blocks1.display() ;
  blocks2.display() ;
  blocks3.display() ;
  blocks4.display() ;
  blocks5.display() ;
  fill("skyblue") ;
  blocks6.display() ;
  blocks7.display() ;
  blocks8.display() ;
  fill("pink") ;
  blocks9.display() ;
  fill("pink") ;
  slingshot.display() ;

  block1.score() ;
  block2.score() ;
  block3.score() ;
  block4.score() ;
  block5.score() ;
  block6.score() ;
  block7.score() ;
  
  block8.score() ;
  block9.score() ;
  block10.score() ;
  
  blocks1.score() ;
  blocks2.score() ;
  blocks3.score() ;
  blocks4.score() ;
  blocks5.score() ;
 
  blocks6.score() ;
  blocks7.score() ;
  blocks8.score() ;
  
  blocks9.score() ;
  
  image(polygon_img,ball.position.x,ball.position.y,50,50)


}


function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if( keyCode === 32 ){
     slingshot.attach(ball );
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") ;
  var responseJSON = await response.json() ;
  var dt = responseJSON.datetime
  var hour = dt.slice(11,13) ;

  
  
}


