let cloud, cloud2, cloud3, cloud4, clouds;

let jumpCounter = 0;
let jumpIncrement = 4;
let jumpEnd = 800/jumpIncrement;
let gravity = 3;

let pink, yellow, blue;
let pinkAnimation, blueAnimation, yellowAnimation;
let heartThings = [];
let hearts;

let snake, fish, hedgehog, skunk;
let snakeAnimation, fishAnimation, hedgehogAnimation, skunkAnimation;
let enemyThings = [];
let enemies;


const TILE_SIZE = 96;


const onion_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 96, 'height': 96}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 96, 'height': 96}},
];

const sad_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 96, 'height': 96}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 96, 'height': 96}},
];




const snake_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 96, 'height': 96}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 96, 'height': 96}},
  
];

const fish_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
];

const hedgehog_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 96, 'height': 96}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 96, 'height': 96}},
];

const skunk_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 96, 'height': 96}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 96, 'height': 96}},
];




const pink_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
];

const yellow_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},

];

const blue_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 96, 'height': 96}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 96, 'height': 96}},
];




function preload(){
  onion_sprite_sheet = loadSpriteSheet('img/onion.png', 96, 96, 6);
  sad_sprite_sheet = loadSpriteSheet('img/sad.png', 96, 96, 6);

  snake_sprite_sheet = loadSpriteSheet('img/snake.png', 96, 96, 6);
  fish_sprite_sheet = loadSpriteSheet('img/fish.png', 96, 96, 4);
  hedgehog_sprite_sheet = loadSpriteSheet('img/hedgehog.png', 96, 96, 6);
  skunk_sprite_sheet = loadSpriteSheet('img/skunk.png', 96, 96, 6);
  
  pink_sprite_sheet = loadSpriteSheet('img/pink.png', 96, 96, 4);
  yellow_sprite_sheet = loadSpriteSheet('img/yellow.png', 96, 96, 4);
  blue_sprite_sheet = loadSpriteSheet('img/blue.png', 96, 96, 4);


// sadAnimation = loadAnimation(sad_sprite_sheet);
  // sad = createSprite(200, 500, 96, 96);

  onionAnimation = loadAnimation(onion_sprite_sheet);
  onion = createSprite(550, 325, 96, 96);

  
  snakeAnimation = loadAnimation(snake_sprite_sheet);
  fishAnimation = loadAnimation(fish_sprite_sheet);
  hedgehogAnimation = loadAnimation(hedgehog_sprite_sheet);
  skunkAnimation = loadAnimation(skunk_sprite_sheet);


  pinkAnimation = loadAnimation(pink_sprite_sheet);
  blueAnimation = loadAnimation(blue_sprite_sheet);
  yellowAnimation = loadAnimation(yellow_sprite_sheet);


  //(heartObject, x, y, w, h, name, heartAnimation, scaler){
heartThings = [
  {
    heartObject: blue,
    x: 580,
    y: 1490,
    w: TILE_SIZE,
    h: TILE_SIZE,
    name: 'blue',
    heartAnimation: blueAnimation,
    scaler: 1.4
  },
  {
    heartObject: pink,
    x: 290,
    y: 690,
    w: TILE_SIZE,
    h: TILE_SIZE,
    name: 'pink',
    heartAnimation: pinkAnimation,
    scaler: 1.3
  },
  
  {    
    heartObject: yellow,
    x: 780,
    y: 890,
    w: TILE_SIZE,
    h: TILE_SIZE,
    name: 'yellow',
    heartAnimation: yellowAnimation,
    scaler: 1.3
  }
]

  // pink = createSprite(650, 200, 96, 96);
  // pink.addAnimation('pink', pinkAnimation);
  // pink.scale = 1.3;

  // yellow = createSprite(550, 200, 96, 96);
  // yellow.addAnimation('yellow', yellowAnimation);
  // yellow.scale = 1.3;

  // blue = createSprite(750, 200, 96, 96);
  // blue.addAnimation('blue', blueAnimation);
  // blue.scale = 1.3;



    //(enemyObject, x, y, w, h, name, enemyAnimation, scaler){
  enemyThings = [
    {
      enemyObject: snake,
      x: 280,
      y: 320,
      w: TILE_SIZE,
      h: TILE_SIZE,
      name: 'snake',
      enemyAnimation: snakeAnimation,
      scaler: 1.3
    },
    {
      enemyObject: fish,
      x: 490,
      y: 1035,
      w: TILE_SIZE,
      h: TILE_SIZE,
      name: 'fish',
      enemyAnimation: fishAnimation,
      scaler: 1.2
    },
    {
      enemyObject: hedgehog,
      x: 580,
      y: 560,
      w: TILE_SIZE,
      h: TILE_SIZE,
      name: 'hedgehog',
      enemyAnimation: hedgehogAnimation,
      scaler: 1.3
    },
    {
      enemyObject: skunk,
      x: 520,
      y: 2090,
      w: TILE_SIZE,
      h: TILE_SIZE,
      name: 'skunk',
      enemyAnimation: skunkAnimation,
      scaler: 1.3
    },
  ]
  // snake.addAnimation('snake', snakeAnimation);
  // snake.scale = 1.3;
  // snake = createSprite(300, 270, 96, 96);

  // fish.addAnimation('fish', fishAnimation);
  // fish.scale = 1.2;
  // fish = createSprite(420, 650, 96, 96);

  // hedgehog.addAnimation('hedgehog', hedgehogAnimation);
  // hedgehog.scale = 1.3;
  // hedgehog = createSprite(500, 440, 96, 96);

  // skunk.addAnimation('skunk', skunkAnimation);
  // skunk.scale = 1.3;
   // skunk = createSprite(700, 380, 96, 96);




  cloud = loadImage('img/cloud.png');
  cloud1 = loadImage('img/cloud.png');
  cloud2 = loadImage('img/cloud.png');
  cloud3 = loadImage('img/cloud.png');
  cloud4 = loadImage('img/cloud.png');
  cloud5 = loadImage('img/cloud.png');
  cloud6 = loadImage('img/cloud.png');
  cloud7 = loadImage('img/cloud.png');
  cloud8 = loadImage('img/cloud.png');
  cloud9 = loadImage('img/cloud.png');

  clouds = [
    {img: cloud, x: 500, y: 20, w: 350, h:350},
    {img: cloud1, x: 100, y: 200, w: 350, h:350},
    {img: cloud2, x: 400, y:450, w:350, h:350},
    {img: cloud3, x:100, y:600, w:350, h:350},
    {img: cloud4, x:600, y:800, w:350, h:350},
    {img: cloud5, x: 300, y:950, w:350, h:350},
    {img: cloud6, x:50, y:1200, w:350, h:350},
    {img: cloud7, x:400, y:1400, w:350, h:350},
    {img: cloud8, x:200, y:1700, w:350, h:350},
    {img: cloud9, x:340, y:2000, w:350, h:350},
  ]
  
}




function setup(){
  createCanvas(1000, 2500);

  hearts = new Group();
  enemies = new Group();

  heartThings.forEach((heart, i) => {
    const returnedHeart = initHeartThing(heart);
    hearts.add(returnedHeart);
  })

  enemyThings.forEach((enemy,i) => {
    const returnedEnemy = initEnemyThing(enemy);
    enemies.add(returnedEnemy);
  }) 
  
 

  onion.addAnimation('onion', onionAnimation);
  onion.scale = 1.0;
  onion.setCollider('rectangle', 0, 0, 50, 50);

  // sad.addAnimation('sad', sadAnimation);
  // sad.scale = 1.0;

  


}

function draw(){
  background(110, 201, 224);
  
  applyGravity();

  onion.collide(hearts);
  onion.collide(enemies);

  drawSprites();

  drawClouds(clouds);



}



function drawClouds(clouds){
  clouds.forEach(cloud =>{
    image(cloud.img, cloud.x, cloud.y, cloud.w, cloud.h);
  })
}



function keyPressed(){
  if(key === 'a'){
    onion.setSpeed(-1, 0);
  }

  if(key === 'd'){
    onion.setSpeed(1, 0);
  }

  if(key === 'w'){
    jumpOnion();
  }

  if(key === 's'){
    onion.position.y +=5;
  }

}


function jumpOnion(){
  if(jumpCounter < jumpEnd){
    onion.position.y -= jumpIncrement;
    jumpCounter+=jumpIncrement;
    setTimeout(jumpOnion, 10);
  } else {
    jumpCounter = 0;
  }
}

function applyGravity(){
  onion.position.y+=gravity;
}



function initHeartThing({heartObject, x, y, w, h, name, heartAnimation, scaler}){

  heartObject = createSprite(x, y, w, h);
  heartObject.addAnimation(name, heartAnimation);
  heartObject.scale = scaler;

  return heartObject
}


function initEnemyThing({enemyObject, x, y, w, h, name, enemyAnimation, scaler}){

  enemyObject = createSprite(x, y, w, h);
  enemyObject.addAnimation(name, enemyAnimation);
  enemyObject.scale = scaler;

  return enemyObject
}

