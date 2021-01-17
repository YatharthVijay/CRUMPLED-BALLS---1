class Dustbin
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = 200;
		this.height = 100;
		this.wallThickness = 20;
		this.angle = 0;
		
		var options =
		{
			isStatic: true
		}
		this.bottomWall = Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, options);
		
		var xPos = this.x - this.width / 2;
		var yPos = this.y - (this.height / 2) + 10;
		this.leftWall = Bodies.rectangle(xPos, yPos, this.wallThickness, this.height, options);
		Matter.Body.setAngle(this.leftWall, this.angle);
		
		xPos = this.x + this.width / 2;
		this.rightWall = Bodies.rectangle(xPos, yPos, this.wallThickness, this.height, options);
		Matter.Body.setAngle(this.rightWall, -1 * this.angle);

		World.add(world, this.bottomWall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);
	}

	display()
	{
			var posBottom = this.bottomWall.position;
			var posLeft = this.leftWall.position;
			var posRight = this.rightWall.position;

			

			push();
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			strokeWeight(4);
			stroke("DarkOliveGreen");
			fill("DarkOliveGreen");		
			rotate(this.angle);
			rect(0, 0, this.wallThickness, this.height);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			strokeWeight(4);
			stroke("DarkOliveGreen");
			fill("DarkOliveGreen");
			rotate(-1 * this.angle);
			rect(0, 0, this.wallThickness, this.height);
			pop();

			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			strokeWeight(4);
			stroke("DarkOliveGreen");
			fill("DarkOliveGreen");
			rect(0, 0, this.width, this.wallThickness);
			pop();
	}
}