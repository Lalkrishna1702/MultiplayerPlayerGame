var canvas, backgroundImage;
var car1, car2, car3, car4;
var cars;
var c1I, c2I, c3I, c4I, trackImage, groundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
  trackImage = loadImage("Images/track.jpg");
  groundImage = loadImage("Images/ground.png");
  c1I = loadImage("Images/car1.png");
  c2I = loadImage("Images/car2.png");
  c3I = loadImage("Images/car3.png");
  c4I = loadImage("Images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
