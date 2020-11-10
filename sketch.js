
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(320,350)
	bob2 = new Bob(360,350)
	bob3 = new Bob(400,350)
	bob4 = new Bob(440,350)
	bob5 = new Bob(480,350)
	roof = new Roof(400,150,200,30)
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(91,114,72);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:85,y:-85})
	}
}


