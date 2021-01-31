var canvas;
var music;
var box1, box2, box3, box4;
var square
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(300,550,100,20)
    box1.shapeColor = "black";
    
    box2 = createSprite(100,550,100,20)
    box2.shapeColor = "red";

    box3 = createSprite(500,550,100,20)
    box3.shapeColor = "orange";
    
    box4 = createSprite(700,550,100,20)
    box4.shapeColor = "yellow";
    
    square = createSprite(400,50,20,20);
    square.shapeColor = "white"
    square.velocityX = -4;
    square.velocityY = 3;

    edges = createEdgeSprites();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(square.isTouching(box1)){
        square.shapeColor = "black"
        music.play();
    }

    if(square.isTouching(box2)){
        square.shapeColor = "red"
    }

    if(square.isTouching(box3)){
        square.shapeColor = "orange"
    }

    if(square.isTouching(box4)){
        square.shapeColor = "yellow"
    }

    square.bounceOff (box1)
    square.bounceOff (box2)
    square.bounceOff (box3)
    square.bounceOff (box4) 

    square.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    
    drawSprites();

}
