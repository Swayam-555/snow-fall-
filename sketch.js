const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snowfall;
var boy;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(255,255,255);  
  
}