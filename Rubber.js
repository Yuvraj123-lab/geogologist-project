class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		'restitution':0.3,
		'friction':5,
		'density':1
	}
		
		this.body=Bodies.circle(x,y, (r-20)/2, options)
	    World.add(world, this.body);
        this.x=x
		this.y=y
		this.r=r
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r)
			pop()
	}

}