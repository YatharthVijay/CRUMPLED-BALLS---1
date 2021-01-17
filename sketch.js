const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;
var engine, world;

function setup()
{
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 570, width, 20);
	dustbin = new Dustbin(600, 550);
	paper = new Paper(200, 250, 40);
	
	Engine.run(engine); 
}

function draw()
{
	background("black");
	Engine.update(engine);
	
	rectMode(CENTER);
	ground.display();
	dustbin.display();
	paper.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(paper.body, paper.body.position, {x: 50, y: -50});
  	}
}