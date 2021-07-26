var reload = document.querySelector("refresh");
var img1 = document.getElementById("f-pic");
var img2 = document.getElementById("m-pic");
var img = document.getElementById("e-pic");
 var all = ["erwin","flock","marlow" ];

console.log(all);

var erwin = document.getElementById("erwin-js").style.display="none";
var flock =  document.getElementById("flock-js").style.display = "none";
var marlow = document.getElementById("marlow-js").style.display="none";
var final =   document.getElementById("final").style.display = "none";

 document.getElementById("win").style.display="none";

function b() {
var soldier = new Audio ("sound/soldier.mp3");
  var a = Math.floor(Math.random() * 7);
  var erwinyell = new Audio("sound/erwin1.mp3");
  if (a <= 3) {

    img.style.left = `${img.offsetLeft + 600}px`;
    document.getElementById("erwin-js").style.display = "none";
    soldier.play();

  } else {
    document.getElementById("erwin-js").style.display = "none";
    document.getElementById("e-pic").style.display = "none";
    //document.getElementById("flock-js").style.display = "block";
    erwinyell.play();
  }

  console.log(a);

};

function esound(){
  setTimeout(function(){

document.getElementById("flock-js").style.display = "block";
},2000);
};


function fsound(){
  setTimeout(function(){

document.getElementById("marlow-js").style.display = "block";
},2000);
};



function msound(){

  setTimeout(function(){

document.getElementById("final").style.display = "block";
},3000);

};






function d() {


  var scream = new Audio("sound/scream.mp3");
  var fcry = new Audio("sound/flock1.mp3");
  var a1 = Math.floor(Math.random() * 7);
  if (a1 <= 3) {
    img1.style.left = `${img.offsetLeft + 1}px`;
    document.getElementById("flock-js").style.display = "none";
    //document.getElementById("marlow-js").style.display = "block";
    scream.play();

  } else {
    document.getElementById("f-pic").style.display = "none";
    //document.getElementById("marlow-js").style.display = "block";
    document.getElementById("flock-js").style.display = "none";
    fcry.play();
  }
console.log(a1);
};

function e(){
  var rage = new Audio("sound/rage.mp3");
  var mcry = new Audio("sound/marlow1.mp3");
var a2 = Math.floor(Math.random() * 7);
img2.style.left = `${img.offsetLeft + 1}px`;
if(a2 <= 3){
document.getElementById("marlow-js").style.display = "none";
// document.getElementById("final").style.display = "block";
rage.play();

}


else{
//document.getElementById("final").style.display = "block";
document.getElementById("marlow-js").style.display = "none";
document.getElementById("m-pic").style.display = "none";
mcry.play();
}

};



function z(){
  var scoutsWin= new Audio("sound/scouts-win.mp3")
var lose = new Audio("sound/gameover.mp3");
var a3 = Math.floor(Math.random() * 7);
count = count + 1;
var count = 0;
if (a3 <= 3){
  img2.style.left = `${img.offsetLeft + 650}px`;
  img1.style.left = `${img.offsetLeft + 650}px`;
  img.style.left = `${img.offsetLeft + 650}px`;
  document.getElementById("final").style.display = "none";
  document.getElementById("beast").src="images/win.png";
  document.getElementById("win").style.display="block";
  scoutsWin.play();

} else {
  document.getElementById("final").style.display = "none";
  document.getElementById("beast").src="images/titan.png";
  document.getElementById("f-pic").style.display = "none";
  document.getElementById("m-pic").style.display = "none";
  document.getElementById("e-pic").style.display = "none";
  document.getElementById("win").innerHTML="The scouts have lost!!!";
  document.getElementById("win").style.display="block";
  lose.play();
}
console.log(a3);
};










function c() {
  reload = location.reload();
};




function sound(){
  var audio= new Audio("sound/beast.mp3");
  audio.play();
};


function play() {

setTimeout(function(){
document.getElementById("erwin-js").style.display="block";

},4000);
//document.getElementById("erwin-js").style.display="block";
document.getElementById("erwin-js").innerHTML = "ATTACK";

document.getElementById("playsound").style.display = "none";

};
