var karma = 0;
var txt = "I";
var i = 200;
let mySound;





function preload() {

 soundFormats('mp3');
mySound = loadSound('addons/theshepherd_audio');

  titleFont = loadFont('addons/Daubenton.otf');
  corpusFont = loadFont('addons/Ortica-Light.otf');
  first = loadImage("addons/EXPORT/1.png");
  first2 = loadImage("addons/EXPORT/2.png");
  first3 = loadImage("addons/EXPORT/3.png");
  first4 = loadImage("addons/EXPORT/4.png");
  first5 = loadImage("addons/EXPORT/5.png");
  first6 = loadImage("addons/EXPORT/6.png");
  first7 = loadImage("addons/EXPORT/7.png");
  first8 = loadImage("addons/EXPORT/8.png");
  first9 = loadImage("addons/EXPORT/9.png");
  first10 = loadImage("addons/EXPORT/10.png");
  first11 = loadImage("addons/EXPORT/11.png");
  first12 = loadImage("addons/EXPORT/12.png");
  first13 = loadImage("addons/EXPORT/13.png");
  first14 = loadImage("addons/EXPORT/14.png");
  first15 = loadImage("addons/EXPORT/15.png");




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  //Button To Reset
  button = createButton('HOME');
  button.position(width-200, 70);
  button.mouseClicked(resizety);
  button.addClass('button');

  button = createButton('CURSOR');
  button.position(width-320, 70);
  button.mouseClicked(resizety);
  button.addClass('button');

  button = createButton('SCREEN');
  button.position(width-440, 70);
  button.mouseClicked(savability);
  button.addClass('button');

  button = createButton('PLAY');
  button.position(width-530, 70);
  button.mouseClicked(musicplease);
  button.addClass('button');

  button = createButton('PAUSE');
  button.position(width-630, 70);
  button.mouseClicked(pleasemusic);
  button.addClass('button');

  //first choice left
  buttonL = createButton('←');
  buttonL.position(100, height-80);
  buttonL.mouseClicked(lefty);
  buttonL.addClass('button');

  //first choice right
  buttonR = createButton('→');
  buttonR.position(width - 190, height-80);
  buttonR.mouseClicked(lefty);
  buttonR.addClass('button');

/*
  link = createA("https://www.behance.net/Federico_cordelli?isa0=1","behance", "_blank");
  link.position(108, height-96);
  link.addClass('a');

  var myUrl = new URL (window.location.href);
 karmaPoints = myUrl.searchParams.get("karma")*1;
*/

 buttonL = createButton('shepherd');
 buttonL.position(450, 254);
 buttonL.mouseClicked(lefty);
 buttonL.addClass('button23');

 buttonL = createButton('sheep');
 buttonL.position(483, 367);
 buttonL.mouseClicked(lefty1);
 buttonL.addClass('button23');

 buttonL = createButton('ewes');
 buttonL.position(463, 592);
 buttonL.mouseClicked(lefty1);
 buttonL.addClass('button23');

 buttonL = createButton('lambs');
 buttonL.position(450, 535);
 buttonL.mouseClicked(lefty1);
 buttonL.addClass('button23');

 buttonL = createButton('follow');
 buttonL.position(280, 367);
 buttonL.mouseClicked(lefty2);
 buttonL.addClass('button23');




}

function draw() {
  background('#F8F1DB');
  // background('white');
  imageMode(CENTER);
  image(first15, width/2+400,height/2, (690/2)+(mouseX/100), (1124/2)+(mouseX/100));
  image(first14, width/2+400,height/2, (690/2)+(mouseX/500), (1124/2)+(mouseX/500));
  image(first13, width/2+400,height/2, (690/2)-(mouseX/150), (1124/2)-(mouseX/150));
  image(first12, width/2+400,height/2, (690/2)+(mouseX/150)+(mouseY/150), (1124/2)+(mouseX/150)+(mouseY/150));
  image(first11, width/2+400,height/2, (690/2)+(mouseX/350)+(mouseY/350), (1124/2)+(mouseX/350)+(mouseY/350));
  image(first10, width/2+400,height/2, (690/2)+(mouseX/300)+(mouseY/300), (1124/2)+(mouseX/300)+(mouseY/300));
  image(first9, width/2+400,height/2, (690/2)+(mouseX/200)+(mouseY/200), (1124/2)+(mouseX/200)+(mouseY/200));
  image(first8, width/2+400,height/2, (690/2)+(mouseX/100)+(mouseY/100), (1124/2)+(mouseX/100)+(mouseY/100));
  image(first7, width/2+400,height/2, (690/2)+(mouseX/400)+(mouseY/400), (1124/2)+(mouseX/400)+(mouseY/400));
  image(first6, (width/2+400)-(-mouseX/100)+(-mouseY/120),height/2, 690/2, 1124/2);
  image(first5, (width/2+400)-(-mouseX/100)+(mouseY/100),(height/2)+(-mouseX/20)+(-mouseY/75), 690/2, 1124/2);
  image(first4, (width/2+400)+(-mouseX/80)+(mouseY/80),(height/2)-(-mouseX/60)+(-mouseY/75), 690/2, 1124/2);
  image(first3, (width/2+400)+(-mouseX/60)+(-mouseY/80),(height/2)+(-mouseX/40)+(-mouseY/45), 690/2, 1124/2);
  image(first2, (width/2+400)+(mouseX/12)+(mouseY/20),(height/2)+(-mouseX/35)+(-mouseY/40), 690/2, 1124/2);
  image(first, (width/2+400)+(-mouseX/60)+(-mouseY/70),height/2, 690/2, 1124/2);





if (i===200) {

  // every 10th time, the condition is true
  if (frameCount % 60 < 30){
    // fill with 50
  	fill("#F8F1DB");

      textSize(80);
      textFont(corpusFont);
      textAlign(CENTER);
      text(txt, mouseX, mouseY);

  } else {
    // all the otehr times, fill with 255
    fill("#92a8d1");

      textSize(80);
      textFont(corpusFont);
      textAlign(CENTER);
      text(txt, mouseX, mouseY);

  }
} else {
  fill("#92a8d1");

    textSize(80);
    textFont(corpusFont);
    textAlign(CENTER);
    text(txt, mouseX, mouseY);
}
push();
  fill('black');
  textAlign(LEFT);
  textFont(corpusFont);
  textSize(45);
  //text(karma, width/2, height/2);
  text("How sweet is the shepherd’s sweet lot!\nFrom the morn to the evening he strays;\nHe shall follow his sheep all the day,\nAnd his tongue shall be fillèd with praise.\n\nFor he hears the lambs’ innocent call,\nAnd he hears the ewes’ tender reply;\nHe is watchful while they are in peace,\nFor they know when their shepherd is nigh.", 100, 300);
pop();

push();
  fill('black');
  textAlign(CENTER);
  textFont(corpusFont);
  textSize(10);
  //text(karma, width/2, height/2);
  text("DIGGERS COLLECTIVE", width/2, height-50);
pop();

push();
  fill('black');
  textAlign(LEFT);
  textFont(titleFont);
  textSize(15);
  //text(karma, width/2, height/2);
  text("WILLIAM BLAKE", 100, 65);
pop();


/*
push();
  textSize(80);
  textAlign(CENTER);
  fill("#92a8d1");
  text(txt, mouseX, mouseY);
pop();
*/
push();
  textFont(titleFont);
  textAlign(LEFT);
  fill('black');
  textSize(130);
  text("THE SHEPHERD", 100, 170);
pop();


  noCursor();


image(first2, (width-580)+(mouseX/60),(150)+(-mouseX/85)+(-mouseY/100), 690/2, 1124/2);
image(first8, (200)+(mouseX/60)+(mouseY/80),(-75), 690/2, 1124/2);

}

//Resize Button Function
function resizety() {
  document.location.reload();
  return false;
}



function lefty() {
  i = i-1
  karma = (karma *0) + 1;
  if (karma === 1) {
    txt = "Jesus";
  }
}

function lefty1() {
  i = i-1
  karma = (karma *0) + 2;
  if (karma === 2) {
    txt = "People";
  }
}

function lefty2() {
  i = i-1
  karma = (karma *0) + 3;
  if (karma === 3) {
    txt = "not lead";
  }
}

function musicplease() {
  mySound.play();
}

function pleasemusic() {
  mySound.pause();
}


function openy() {

  //fake
window.open("index0.html?karmaPoints=" +(karma), "_self");

}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}

function savability() {
  saveCanvas('Blake_Shephard', 'png');
  return false;
}
