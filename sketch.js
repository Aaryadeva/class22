const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
 var world,engine,box,ground,ball;
 function setup()
 {
   createCanvas(600,400);
   engine = Engine.create();
   world = engine.world;
   box = Bodies.rectangle(200,100,50,50);
   World.add(world,box);
   var ground_options = {
     isStatic : true
   }
   ground = Bodies.rectangle(200,380,600,20,ground_options);
   World.add(world,ground);
   var ball_options = {
     restitution : 0.8
   }
   ball = Bodies.circle(300,100,25,ball_options);
   World.add(world,ball);
 }
 function draw()
 {
   background(0);
   Engine.update(engine);
   rectMode(CENTER);
   rect(box.position.x,box.position.y,50,25);
   rect(ground.position.x,ground.position.y,600,20);
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,25);
 }