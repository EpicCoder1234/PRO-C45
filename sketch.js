var database;
var player;
var playerCount=0;
var form;

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    form = new Form();
    player = new Player();
    playerCount = 2;
    
}
function draw(){
    //playerCount = player.getPlayerCount();
    console.log(playerCount);

    form.display();

    drawSprites();
}

