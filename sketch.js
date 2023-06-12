let eHarmon;
let hand;
let players;
let shake1;
let shake2;
let trophy;
let img1;
let img2;
let img3;
let sp1_x;
let sp1_y;
let sp2_x;
let sp2_y;
let sp3_x;
let sp3_y;
let sp4_x;
let sp4_y;
let sp5_x;
let sp5_y;
let sp6_x;
let sp6_y;
let spriteArray;
let SPEED = 25;
let scene = 0;
let scale = 1.5;


function preload(){
  img1 = loadImage('images/eHarmon.png');
  img2 = loadImage('images/moving.png');
  img3 = loadImage('images/draw position.png');
  img4 = loadImage('images/hand1.png');
  img5 = loadImage('images/hand2.png');
  img6 = loadImage('images/trophy.png');

}

function setup() {
  // setup code
  createCanvas(665 * scale, 615 * scale);

  // create a sprite from a single image
  eHarmon = createSprite(500 * scale, 250 * scale);
  eHarmon.scale = 0.6 * scale;
  eHarmon.addImage(img1);
  hand = createSprite(1000 * scale, 300 * scale);
  hand.scale = 0.6 * scale;
  hand.addImage(img2);
  players = createSprite(300 * scale, 800 * scale);
  players.scale = 0.6 * scale;
  players.addImage(img3);
  shake2 = createSprite(1000 * scale, 300 * scale);
  shake2.scale = 0.6 * scale;
  shake2.addImage(img5);
  shake1 = createSprite(-1000 * scale, 300 * scale);
  shake1.scale = 0.6 * scale;
  shake1.addImage(img4);
  trophy = createSprite(350 * scale, 1500 * scale);
  trophy.scale = 0.6 * scale;
  trophy.addImage(img6);
  const spriteArray = [eHarmon, hand, players, shake1, shake2, trophy];
}

function draw() {
  // drawing code
  background(0);
  
  drawSprites();
  
  if (eHarmon.overlap(hand)) {
    eHarmon.collide(hand, null);
  }
  if (eHarmon.overlap(players)) {
    eHarmon.collide(players, null);
  }
  if (eHarmon.overlap(shake1)) {
    eHarmon.collide(shake1, null);
  }
  if (eHarmon.overlap(shake2)) {
    eHarmon.collide(shake2, null);
  }
  if (players.overlap(hand)) {
    players.collide(hand, null);
  }
  if (trophy.overlap(hand)) {
    players.collide(hand, null);
  }
  if (players.overlap(shake1)) {
    players.collide(shake1, null);
  }
  if (players.overlap(shake2)) {
    players.collide(shake2, null);
  }
  if (shake1.overlap(shake2)) {
    shake1.collide(shake2, null);
  }
  if (trophy.overlap(shake2)) {
    trophy.collide(shake2, null);
  }
  if (trophy.overlap(shake1)) {
    trophy.collide(shake1, null);
  }
  if (trophy.overlap(players)) {
    trophy.collide(players, null);
  }
  if(eHarmon.position.x < sp1_x) {
    eHarmon.position.x += abs(sp1_x - eHarmon.position.x) / SPEED * scale;
  }
  if(eHarmon.position.x > sp1_x) {
    eHarmon.position.x -= abs(sp1_x - eHarmon.position.x) / SPEED * scale;
  }
  if(eHarmon.position.y < sp1_y) {
    eHarmon.position.y += abs(sp1_y - eHarmon.position.y) / SPEED * scale;
  }
  if(eHarmon.position.y > sp1_y) {
    eHarmon.position.y -= abs(sp1_y - eHarmon.position.y) / SPEED * scale;
  }
  if (hand.position.x < sp2_x) {
    hand.position.x += abs(sp2_x - hand.position.x) / SPEED * scale;
  }
  if (hand.position.x > sp2_x) {
    hand.position.x -= abs(sp2_x - hand.position.x) / SPEED * scale;
  }
  if (hand.position.y < sp2_y) {
    hand.position.y += abs(sp2_y - hand.position.y) / SPEED * scale;
  }
  if (hand.position.y > sp2_y) {
    hand.position.y -= abs(sp2_y - hand.position.y) / SPEED * scale;
  }

  if (players.position.x < sp3_x) {
    players.position.x += abs(sp3_x - players.position.x) / SPEED * scale;
  }
  if (players.position.x > sp3_x) {
    players.position.x -= abs(sp3_x - players.position.x) / SPEED * scale;
  }
  if (players.position.y < sp3_y) {
    players.position.y += abs(sp3_y - players.position.y) / SPEED * scale;
  }
  if (players.position.y > sp3_y) {
    players.position.y -= abs(sp3_y - players.position.y) / SPEED * scale;
  }

  if (shake1.position.x < sp4_x) {
    shake1.position.x += abs(sp4_x - shake1.position.x) / SPEED * scale;
  }
  if (shake1.position.x > sp4_x) {
    shake1.position.x -= abs(sp4_x - shake1.position.x) / SPEED * scale;
  }
  if (shake1.position.y < sp4_y) {
    shake1.position.y += abs(sp4_y - shake1.position.y) / SPEED * scale;
  }
  if (shake1.position.y > sp4_y) {
    shake1.position.y -= abs(sp4_y - shake1.position.y) / SPEED * scale;
  }

  if (shake2.position.x < sp5_x) {
    shake2.position.x += abs(sp5_x - shake2.position.x) / SPEED * scale;
  }
  if (shake2.position.x > sp5_x) {
    shake2.position.x -= abs(sp5_x - shake2.position.x) / SPEED * scale;
  }
  if (shake2.position.y < sp5_y) {
    shake2.position.y += abs(sp5_y - shake2.position.y) / SPEED * scale;
  }
  if (shake2.position.y > sp5_y) {
    shake2.position.y -= abs(sp5_y - shake2.position.y) / SPEED * scale;
  }

  if (trophy.position.x < sp6_x) {
    trophy.position.x += abs(sp6_x - trophy.position.x) / SPEED * scale;
  }
  if (trophy.position.x > sp6_x) {
    trophy.position.x -= abs(sp6_x - trophy.position.x) / SPEED * scale;
  }
  if (trophy.position.y < sp6_y) {
    trophy.position.y += abs(sp6_y - trophy.position.y) / SPEED * scale;
  }
  if (trophy.position.y > sp6_y) {
    trophy.position.y -= abs(sp6_y - trophy.position.y) / SPEED * scale;
  }
}

function mousePressed() {
  if(scene == 0) {
    sp1_x = 115 * scale;
    sp1_y = 325 * scale;
    scene++;
  }  else if(scene == 1) {
    sp1_x = -350 * scale;
    hand.position.x = -105 * scale;
    sp2_x = 300 * scale;
    scene++;
  } else if (scene == 2) {
    sp2_y = -200 * scale;
    sp3_y = 300 * scale;
    scene++;
  } else if(scene == 3) {
    sp4_x = 325 * scale;
    sp5_x = 375 * scale;
    sp3_y = -250 * scale;
    scene++;
  } else if(scene == 4) {
    sp4_x = 0;
    sp4_y = 850 * scale;
    sp5_x = 650 * scale;
    sp5_y = 850 * scale;
    sp6_y = 300 * scale;
  }

}