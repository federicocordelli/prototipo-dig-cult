 //var newKarma = karmaPoints;
function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  var myUrl = new URL (window.location.href);
 karmaPP = myUrl.searchParams.get("karmaPoints")*1;

 if(karmaPP>0) {
   button = createButton('//GOOD');
   button.position(width/2, height-200);
   button.mouseClicked(goody);
   button.addClass('button');;
 } else if(karmaPP<0) {
   button = createButton('//BAD');
   button.position(width/2, height-200);
   button.mouseClicked(bady);
   button.addClass('button');;
    }






}

function draw() {
  background(100+(karmaPP*20),200+(karmaPP*30),200+(karmaPP*30));

  textSize(32);
  text(karmaPP, width/2, height/2);
  text("karma:", width/2, (height/2)-32);
  fill('red');

}

function goody() {

}

function bady() {


}
