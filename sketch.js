var box1,box2,box3;
var package;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=new paper(50,500,30);


	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(280,600,20,100,)
	box1.shapeColor="red";
	
	box2=createSprite(480,600,20,100)
	box2.shapeColor="red";
	
	box3=createSprite(380,640,200,20)
	box3.shapeColor="red";




	engine = Engine.create();
	world = engine.world;

	package = Bodies.circle(150, 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, package);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground)
	 
	 box3Body = Bodies.rectangle(380, 640, 200, 20 , {isStatic:true} );
	 World.add(world, box3Body);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= package.position.x 
  packageSprite.y= package.position.y 
  package.display();
 
	  //packageBody.(groundSprite)
  
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(package.body,package.body.position,{x:185,y:-175});
 }
 


} 

