const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,350,70,70);
    box2 = new Box(850,350,70,70);
    ground = new Ground(width/2,height,1200,20)
    bird1 = new Bird (100,100);
    pig1 = new Pig (800,350);
    log1 = new Log (800,270,238,PI/2);
    box3 = new Box(750,240,70,70);
    box4 = new Box(850,240,70,70);
    pig2 = new Pig (800,260);
    log2 = new Log (800,200,245,PI/2);
    box5 = new Box(750,150,70,70);
    log3 = new Log (850,130,125,-(PI/4));
    log4 = new Log (750,130,125,PI/4);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    box5.display();
    log4.display();
}