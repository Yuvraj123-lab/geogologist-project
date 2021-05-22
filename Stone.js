class Stone
{
  constructor(x,y,r)
  {
   var options={
        'restitution':0.8,
        'friction':0.9,
        'density':0.12
    }
      
    //this.body=Bodies.circle(x,y,(this.r-20)/2,options)
    this.body=Bodies.circle(x,y,(r-20)/2,options)
    Matter.World.add(world,this.body)
    this.x=x
    this.y=y
    this.r=r
  }
  display()
  {
     
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     rectMode(CENTER)
     ellipse(0,0,this.r,this.r)
     pop()
  }
}