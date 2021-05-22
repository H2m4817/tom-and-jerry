var bg, bgImg, mouse, nmouse1Img, tmouse3Img, cmouse4Img;
var cat, cat1Img, cat2Img, cat3Img;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    cat1Img=loadAnimation("images/cat1.png")
    cat2Img=loadAnimation("images/cat2.png", "images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");
    nmouse1Img=loadAnimation("images/mouse1.png");
    tmouse2Img=loadAnimation("images/mouse3.png", "images/mouse2.png");
    cmouse3Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    var mouse = createSprite(200, 630);
    mouse.addAnimtion("vertical", nmouse1Img);
    mouse.scale=0.15;

    var cat = createSprite(870, 630);
    cat.addAnimation("sleeping", cat1Img);
    cat.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < cat.width/2-mouse.width/2){
      cat.velocityX= 0;
      cat.addAnimation("ending image of cat", cat3Img);
      cat.scale=0.2;
      cat.changeAnimation("ending image of cat");
      mouse.changeAnimation("ending image of mouse", tmouse3Img);
      mouse.scale=0.15;
      mouse.changeAnimation("ending image of mouse");
    } 
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimtion("tom walking", cat2Img);
    cat.changeAnimation("tom walking");
    mouse.addAnimation("teasing mode mouse", tmouse2Img);
    mouse.frameDelay=25;
    mouse.changeAnimation("teasing mode mouse");
   
  }

}
//end