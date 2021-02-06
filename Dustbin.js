class Dustbin
{
	constructor(x,y)
	{
		var options ={
			isStatic:true
		}
		this.x=x;
		this.y=y;
		
		this.image=loadImage("sprites/dustbin.png");
		this.bottom=Bodies.rectangle(670, 700, 213, 10, options);
		this.left=Bodies.rectangle(570, 570, 10, 213, options);
		this.right=Bodies.rectangle(770, 570, 10, 213, options);
		
		World.add(world, this.bottom);
		World.add(world, this.left);
		World.add(world, this.right);

	}
	display() {
		fill(255);
		rect(570, 570,10, 213);
		rect(770, 570, 10, 213);

		imageMode(CENTER);
		image(this.image, 670,570,200, 213);

	}
}