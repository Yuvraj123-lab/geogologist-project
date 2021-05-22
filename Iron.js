class Iron
{
 constructor(x,y,w,h)
 {
    var options={
        'restitution':0.8,
        'friction':3,
        'density':30
     }
     this.body=Bodies.rectangle(x,y,w,h,options)
     Matter.World.add(world, this.body)
     this.w=w;
     this.h=h;
 }
   display()
   {
       push()
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       strokeWeight(4)
       stroke("yellow")
       fill("red")
       rect(0,0,this.w,this.h)
       pop()
   }
}