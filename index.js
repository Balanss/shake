var reload = document.querySelector("refresh");

var img2 = document.getElementById("m-pic");
var img = document.getElementById("e-pic");
var flo1 = document.getElementById("f-pic");

document.getElementById("erwin-js").style.display = "none";
document.getElementById("flock-js").style.display = "none"
document.getElementById("marlow-js").style.display = "none";


var final = document.getElementById("final").style.display = "none";






var erwin = 7 - Math.floor(Math.random() * 7);
var flock = 7 - Math.floor(Math.random() * 7);
var flock2 = flock;
var marlow = 7 - Math.floor(Math.random() * 7);



document.getElementById("test").style.display = "block";

function b() {
  var a = 4;
var volley = new Audio("sound/volley.mp3");
  var img = document.getElementById("e-pic");

  var erwinyell = new Audio("sound/erwin1.mp3");
  if (erwin < a) {

volley.play();
    document.getElementById("e-pic").style.display = "block";
    img.style.left = `${img.offsetLeft + 400}px`;
    document.getElementById("erwin-js").style.display = "none";


  } else {
    document.getElementById("erwin-js").style.display = "none";
    document.getElementById("e-pic").style.display = "none";
    //document.getElementById("flock-js").style.display = "block";
    erwinyell.play();
  }

  console.log(a);

};




function esound() {
  setTimeout(function() {

    document.getElementById("flock-js").style.display = "block";
  }, 2000);
};


function fsound() {
  setTimeout(function() {

    document.getElementById("marlow-js").style.display = "block";
  }, 2000);
};


function msound() {

  setTimeout(function() {

    document.getElementById("final").style.display = "block";
  }, 3000);

};






var fire = new Audio("sound/fire.mp3");
function d() {

  var a1 = 4

  var fcry = new Audio("sound/flock1.mp3");

  if (flock2 < a1) {

    flo1.style.left = `${flo1.offsetLeft + 399}px`;
    document.getElementById("flock-js").style.display = "none";
    //document.getElementById("marlow-js").style.display = "block";
    document.getElementById("f-pic").style.display = "block";
    fire.play();

  } else {
    document.getElementById("f-pic").style.display = "none";
    //document.getElementById("marlow-js").style.display = "block";
    document.getElementById("flock-js").style.display = "none";
    fcry.play();
  }
  console.log(a1);

};




function e() {

  var mcry = new Audio("sound/marlow1.mp3");
  var a2 = 4

  if (marlow < a2) {
fire.play();
    document.getElementById("marlow-js").style.display = "none";
    
    img2.style.left = `${img2.offsetLeft + 399}px`;

  } else {

    document.getElementById("final").style.display = "none";
    document.getElementById("marlow-js").style.display = "none";
    document.getElementById("m-pic").style.display = "none";
    mcry.play();
  }
  console.log(a2);
};






function y() {
  var deciding = 12
var arr = [ erwin + flock + marlow];
  var scoutsWin = new Audio("sound/scouts-win.mp3")
  var lose = new Audio("sound/gameover.mp3");

  if (arr <= 12 ) {

    document.getElementById("test").innerHTML = "The scouts have won!!!";
    img2.style.left = `${img2.offsetLeft + 650}px`;
    flo1.style.left = `${flo1.offsetLeft + 650}px`;
    img.style.left = `${img.offsetLeft + 650}px`;
    document.getElementById("final").style.display = "none";
    document.getElementById("beast").src = "images/win1.png";
    document.getElementById("test").style.display = "block";
    scoutsWin.play();
  } else {
    lose.play();
    document.getElementById("test").innerHTML = "The scouts have lost!!!";
    document.getElementById("final").style.display = "none";
    document.getElementById("beast").src = "images/beast2.png";
    document.getElementById("f-pic").style.display = "none";
    document.getElementById("m-pic").style.display = "none";
    document.getElementById("e-pic").style.display = "none";
    document.getElementById("test").style.display = "block";
  }
  console.log(deciding);
};









function c() {
  reload = location.reload();
};




function sound(){
  var audio= new Audio("sound/beast.mp3");
  audio.play();
};


function play() {

  setTimeout(function() {
    document.getElementById("erwin-js").style.display = "block";

  }, 4000);
  //document.getElementById("erwin-js").style.display="block";
  document.getElementById("erwin-js").innerHTML = "ATTACK";

  document.getElementById("playsound").style.display = "none";

};


console.log(erwin + " erwin");
console.log(flock + " flock");
console.log(marlow + " marlow");
