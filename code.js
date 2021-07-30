var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dbec2d97-50a6-494e-9c46-1b89465a389f","93da3f90-b352-4834-8a35-87ad59c89473","c15e1826-ca09-45e0-b9b4-ae489f370859","a5a3ff51-5137-4843-ae8f-c3f02d8db07e","bf495ad3-1270-4cac-975d-50ef1f4716a8"],"propsByKey":{"dbec2d97-50a6-494e-9c46-1b89465a389f":{"name":"jerry","sourceUrl":null,"frameSize":{"x":322,"y":156},"frameCount":1,"looping":true,"frameDelay":12,"version":"x7wGBgt3uLgwhG4GvNs6VtQeqJCVmXvF","loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":156},"rootRelativePath":"assets/dbec2d97-50a6-494e-9c46-1b89465a389f.png"},"93da3f90-b352-4834-8a35-87ad59c89473":{"name":"tom","sourceUrl":null,"frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"3c1fIv1f_ofHORZGjKPQ_noBarbhy9Uj","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/93da3f90-b352-4834-8a35-87ad59c89473.png"},"c15e1826-ca09-45e0-b9b4-ae489f370859":{"name":"trap","sourceUrl":null,"frameSize":{"x":96,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"eYKJG5pBl00JemNjMV97jnHATAVNT3cp","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":48},"rootRelativePath":"assets/c15e1826-ca09-45e0-b9b4-ae489f370859.png"},"a5a3ff51-5137-4843-ae8f-c3f02d8db07e":{"name":"cheese","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"jv2r6.KwYR15ld5Wty8bST6vctlC05mH","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/a5a3ff51-5137-4843-ae8f-c3f02d8db07e.png"},"bf495ad3-1270-4cac-975d-50ef1f4716a8":{"name":"caught","sourceUrl":null,"frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"vxbQjwnhC28sAioHsKUG53fGFoZDCsTN","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/bf495ad3-1270-4cac-975d-50ef1f4716a8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var jerry = createSprite(70,260);
jerry.setAnimation("jerry");
jerry.scale = 0.3;

var tom = createSprite(10,200);
tom.setAnimation("tom");
tom.scale = 0.9;

var tomCaught;

var trap1 = createSprite(110,150);
trap1.setAnimation("trap");
trap1.scale = 0.5;
var trap2 = createSprite(110,200);
trap2.setAnimation("trap");
trap2.scale = 0.5;
var trap3 = createSprite(200,150);
trap3.setAnimation("trap");
trap3.scale = 0.5;
var trap4 = createSprite(200,240);
trap4.setAnimation("trap");
trap4.scale = 0.5;
var trap5 = createSprite(300,200);
trap5.setAnimation("trap");
trap5.scale = 0.5;
var trap6 = createSprite(300,240);
trap6.setAnimation("trap");
trap6.scale = 0.5;

var cheese1 = createSprite(110,240,20,20);
cheese1.setAnimation("cheese");
cheese1.scale = 0.2;
var cheese2 = createSprite(200,200,20,20);
cheese2.setAnimation("cheese");
cheese2.scale = 0.2;
var cheese3 = createSprite(300,150,20,20);
cheese3.setAnimation("cheese");
cheese3.scale = 0.2;


var boundary1 = createSprite(190,120,420,3);
boundary1.shapeColor = "red";
var boundary2 = createSprite(190,260,420,3);
boundary2.shapeColor = "red";

var Escape = createSprite(345,190,3,140);
Escape.shapeColor = "green";

var score = 0;

var gameState = "serve";

function draw() {
  background("white");
  
  textSize(15);
  fill("black");
  text("Score ="+score,20,110);
  
  
  
  createEdgeSprites();
  
  tom.bounceOff(boundary1);
  tom.bounceOff(boundary2);
  
  
  jerry.bounceOff(boundary1);
  jerry.bounceOff(boundary2);
  jerry.bounceOff(edges);
  
  if(keyDown("up")){
    jerry.y = jerry.y-3;
  }
  if(keyDown("down")){
    jerry.y = jerry.y+3;
  }
  if(keyDown("left")){
    jerry.x = jerry.x-3;
  }
  if(keyDown("right")){
    jerry.x = jerry.x+3;
  }
  
  if(gameState == "serve"){
    fill("red");
    textSize(20);
    text("Tom and Jerry just got into a fight,",50,20);
    fill("red");
    textSize(20);
    text("help Jerry to escape without",50,50);
    fill("red");
    textSize(20);
    text("getting caught by Tom's traps!!!",50,80);
    fill("blue");
    textSize(20);
    text("Press Space to Start",50,300);
    fill("blue");
    textSize(20);
    text("(collect cheese slices and avoid the",50,325);
    fill("blue");
    textSize(20);
    text("traps!!)",50,355);
    
  if(keyDown("space")){
    gameState = "play";
  }}
  
  if(gameState == "play"){
    tom.velocityX = 0;
  if(jerry.isTouching(cheese1)){
    cheese1.destroy();
    score=score+10;
   }
  if(jerry.isTouching(cheese2)){
    cheese2.destroy();
    score=score+10;
   }
  if(jerry.isTouching(cheese3)){
    cheese3.destroy();
    score=score+10;
   }
  if(jerry.isTouching(trap1)||
     jerry.isTouching(trap2)||
     jerry.isTouching(trap3)||
     jerry.isTouching(trap4)||
     jerry.isTouching(trap5)||
     jerry.isTouching(trap6)){
    trap1.destroy();
    trap2.destroy();
    trap3.destroy();
    trap4.destroy();
    trap5.destroy();
    trap6.destroy();
    tom.destroy();
    cheese1.destroy();
    cheese2.destroy();
    cheese3.destroy();
    jerry.destroy();
    gameState = "end";
    }}
  
  if(gameState == "end"){
    fill("black");
    textSize(20);
    text("Tom caught you 😔",150,200);
    tomCaught = createSprite(60,200);
    tomCaught.setAnimation("caught");
    tomCaught.scale = 0.7;
    
    fill("blue");
    textSize(20);
    text("Press Space to start again",50,300);
    }
  
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
