const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1, log1,log2,log3,log4, pig2, box2, box3, box4, box5, bird1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(500,height,1000,20);
    pig1=new Pig (100,350);
    box4 = new Box(800,290,100,100);
    bird1 = new Bird(200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
  
    ground.display();
    pig1.display();
    box4.display();
    bird1.display();
}