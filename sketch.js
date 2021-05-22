const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberBall = new Rubber(400,550,70)
    ironP = new Iron(600,550,80,20)
    stone1 = new Stone(990,500,4)
    stone2 = new Stone(980,500,4)
    stone3 = new Stone(970,500,4)
    stone4 = new Stone(960,500,4)
    stone5 = new Stone(950,500,4)
    stone6 = new Stone(940,500,4)
    stone7 = new Stone(950,500,4)
    stone8 = new Stone(940,500,4)
    stone9 = new Stone(930,500,4)
    stone10 = new Stone(920,500,4)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    console.log(ironP.x,ironP.y)

    plane.display();
    hammer.display();
    rubberBall.display();
    ironP.display();
    stone1.display();
    stone2.display(); 
    stone3.display(); 
    stone4.display(); 
    stone5.display(); 
    stone6.display(); 
    stone7.display(); 
    stone8.display(); 
    stone9.display(); 
    stone10.display(); 
}