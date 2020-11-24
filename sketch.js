var form1,game1,player1,database;
var allplayers;
var distance=0
var gameState=0;
var playercount;

function setup(){
    createCanvas(500,500);

    database=firebase.database();
    game1=new game();
    game1.getState();
    game1.start();
}

function draw(){
    background("white");
    
    drawSprites();
}

