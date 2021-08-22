
// const canvas = document.getElementsByTagName("canvas")[0];
// canvas.width = 1350;
// canvas.height = 768;
// canvas.style.cursor = 'pointer';
// canvas.style.backgroundColor = 'sliver';
// document.body.prepend(canvas);
// const ctx = canvas.getContext('2d');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1350;
canvas.height = 768;
canvas.style.cursor = 'pointer';
document.body.prepend(canvas);


var canvas1 = document.getElementById('score');
var ctx1 = canvas1.getContext('2d');
canvas1.width = 1350;
canvas1.height = 50;
canvas.style.cursor = 'pointer';
// canvas.style.backgroundColor = 'sliver';
// div.append(canvas1);
document.body.prepend(canvas1);
let oldVol = undefined

let speed = {
  bpm:113
}

let mode = "No Diff"
let currentSong = false

let songBPM = 1000/(speed.bpm/60)

let diff = {
  trackpad:songBPM*8,
  easy:songBPM*4,
  med:songBPM*2,
  hard:songBPM*1
}
let endScore = 0;

const min = -25;
const max = 25;
const circle = {
  // circleCount: 3,
  speed: 1,
  circles: [],
  // direction: undefined,
  randomPoint: undefined,
  directions: [Math.random() * (max - min) + min, Math.random() * (max - min) + min],
  direction: undefined,
  score: 0,
  s1: undefined,
  s2: undefined,

  unravelSong:new Audio('Unravel.mp3'),
  // audio:new Audio('120 2.mp3'),
  audio:new Audio('113.mp3'),
  rollingStarSong:new Audio('81.mp3'),
  // audio:new Audio('Naruto 97.mp3'),
  boolStarted: false
};

let currentTrack = "No track"

function rollingStar() {
  currentTrack = "rollingStar"
  myStop3("rollingStar")
  circle.audio = new Audio('81.mp3')
  // oldVol = circle.audio.volume

  speed.bpm = 81*2
  songBPM = 1000/(speed.bpm/60)
  diff = {
    trackpad:songBPM*8,
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }
  currentSong = true
  // oldVol = circle.audio.volume
  // circle.audio.volume = oldVol
  
}


function neverGonnaGiveYouUp() {
  currentTrack = "neverGonnaGiveYouUp"
  myStop3("neverGonnaGiveYouUp")
  circle.audio = new Audio('113.mp3')
  speed.bpm = 113
  songBPM = 1000/(speed.bpm/60)
  diff = {
    trackpad:songBPM*8,
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }
  currentSong = true
  // oldVol = .60 || circle.audio.volume
  // circle.audio.volume = oldVol
  
}

function kamadoTanjironoUta() {
  currentTrack = "kamadoTanjironoUta"
  myStop3("kamadoTanjironoUta")
  circle.audio = new Audio('76.mp3')
  speed.bpm = 76
  songBPM = 1000/(speed.bpm/60)
  diff = {
    trackpad:songBPM*8,
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }  
  currentSong = true
  // oldVol = .60 || circle.audio.volume
  // circle.audio.volume = oldVol
}

function shapeOfYou() {
  currentTrack = "shapeOfYou"

  myStop3("shapeOfYou")
  circle.audio = new Audio('ed.mp3')
  speed.bpm = 96
  songBPM = 1000/(speed.bpm/60)
  diff = {
    trackpad:songBPM*8,
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }  
  currentSong = true
  // oldVol = .60 || circle.audio.volume
  // circle.audio.volume = oldVol
}


function unravel() {
  // debugger
  currentTrack = "unravel"

  myStop3("unravel")
  circle.audio = new Audio('Unravel.mp3')
  speed.bpm = 135
  songBPM = 1000/(speed.bpm/60)
  diff = {
    trackpad:songBPM*8,
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }
  // oldVol = .60 || circle.audio.volume
  // circle.audio.volume = oldVol

  currentSong = true

}
let mouseArray = []
var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;

}
let lastLoc = [-1,-1]

setInterval(pointerCheck, 10);
function pointerCheck() {
 
	// console.log('Cursor at: '+pointerX+', '+pointerY);
  // ctx.clearRect(pointerX-((window.innerWidth-canvas.width)/2)-40, pointerY-40, 80, 80)
  let radius = 20 
  if (circle.audio.currentTime > 0){
    ctx.beginPath();
    ctx.clearRect(pointerX - radius - 1- ((window.innerWidth-canvas.width)/2), pointerY - radius - 1 - 50 - 10, radius * Math.PI, radius * Math.PI)
    ctx.closePath();
  }

  // mouseArray.push([pointerX,pointerY])
  // let dup = circle.circles
  var rect1 = {x: pointerX, y: pointerY, width: radius, height: radius}  //whole page
 
  for (let x = 0; x < circle.circles.length;x++){
    var rect2 = {x: circle.circles[x][0]+(window.innerWidth-canvas.width)/2, y: circle.circles[x][1]+60, width: radius, height: radius}
    // this is clearing
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y){
        // console.log(tempx,rect2.y+60)
        if(lastLoc[0] !== rect1.x && lastLoc[1] !== rect1.y){
          circle.score += 1
          lastLoc[0] = rect1.x
          lastLoc[1] = rect1.y
        }else{
          lastLoc[0] = rect1.x
          lastLoc[1] = rect1.y
        }
  
   }
  }

}



function start() {
  
  let circleCount = Math.floor(Math.random() * (30 - 10) + 10);
  
  for (let x = 0; x < circleCount; x++) {
    let y = Math.random()
    if (x === circleCount / 4 && circle.direction !== undefined) {
      // console.log(circle.direction[0])  
      circle.direction[0] = circle.direction[0] * -1 
      // console.log(circle.direction[0])
      // console.log(circle.direction[1])
      circle.direction[1] = circle.direction[0] * -1 
      // console.log(circle.direction[1])

    }
    else if(x === circleCount / 2 && circle.direction !== undefined) {
      // console.log(circle.direction[0])  
      circle.direction[0] = circle.direction[1] * -1 
      // console.log(circle.direction[0])
      // console.log(circle.direction[1])
      circle.direction[1] = circle.direction[1] * -1
      // console.log(circle.direction[1])

    }
    else if (x === (circleCount * .75) && y < .33) {
      // console.log(circle.direction[0])  
      circle.direction[0] = circle.direction[1] * -1 
      // console.log(circle.direction[0])
      // console.log(circle.direction[1])
      circle.direction[1] = circle.direction[1] * 1 
      // console.log(circle.direction[1])

    }
    


      createcircle()
      // setTimeout(createcircle, 500);
      draw()
      // setTimeout(draw, 500);

      if (x === circleCount-1){
        circle.randomPoint = undefined
        circle.directions = [Math.random() * (max - min) + min, Math.random() * (max - min) + min]
        circle.direction = undefined
        // debugger
      }
      // window.requestAnimationFrame(draw)
      // setTimeout(draw,500)     
      // clearcircle();
    // } else {
    //   continue
    // }
  
 
  }

}


function createcircle() {
  let minWidth = canvas.width/4;
  let minHeight = canvas.height/4;
  let maxWidth = canvas.width*.75
  let maxHeight = canvas.height*.75
  let xPos = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
  let yPos = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
  // debugger
  // console.log(circle.direction)
  if (circle.randomPoint === undefined) {
    circle.randomPoint = [xPos, yPos]
    // console.log(circle.direction)
    circle.circles.push([xPos, yPos])
  } else if (circle.direction === undefined) {
    
    circle.direction = [circle.directions[0], circle.directions[1]]
    
    circle.circles.push([circle.direction[0]+circle.randomPoint[0], circle.direction[1]+circle.randomPoint[1]])
  } else {
    // console.log(circle.randomPoint)
    circle.randomPoint = [circle.randomPoint[0] + circle.direction[0], circle.randomPoint[1] + circle.direction[1]]
    circle.circles.push([circle.randomPoint[0] + circle.direction[0],circle.randomPoint[1] + circle.direction[1]])
  }
}

function draw() {
  let circleSize = 20;
  let stop = false
  // console.log(circle.circles)

  // for (let x = 0; x < circle.circles.length;x++){
    // debugger

    // if (x){
      // ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath();
      var gradient = ctx.createLinearGradient(20,0, 220,0);
      gradient.addColorStop(.5, 'white');
      gradient.addColorStop(1, 'white');
      ctx.fillStyle = gradient;
      ctx.strokeStyle = 'blue';
      // ctx.fillRect(20, 20, 200, 100);
      // if (circle.circles[x][0] < canvas.width && circle.circles[x][1] < canvas.height && circle.circles[x][0] >= 0 && circle.circles[x][1] >= 0) {
      ctx.arc(circle.randomPoint[0],circle.randomPoint[1], circleSize, 0, Math.PI * 2);
      // console.log(circle.circles[x][0],circle.circles[x][1])
      // ctx.arc(circle.circles[x][0],circle.circles[x][1], circleSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
     
      
      // } else {
      //   stop = true
      // }
    
      // debugger
    //  
    // }
   

  // }
  
}

function drawScore (){
  ctx1.clearRect(0,0,canvas1.width,40)
  ctx1.fillStyle = 'rgba(0,0,0,0)';
  ctx1.fillRect(0,0,canvas1.width,40);
  ctx1.beginPath();
  ctx1.textAlign = 'center';
  ctx1.fillStyle = 'white';
  ctx1.font = '36px roboto';
  
  let tempOutput = `SCORE : ${circle.score*100}`;
  ctx1.fillText(tempOutput,canvas1.width/2,38);
  requestAnimationFrame(drawScore)
}




function realStart(mode2){ 
  mode2 = mode
  if (circle.boolStarted === false){
    circle.boolStarted = true
    var start1 = setInterval(start, diff[mode2]);
    // debugger
    var start2 = setInterval(clear, diff[mode2]*2.99);
    
    circle.audio.play();
    // var  = setInterval(start, 500);
    circle.s1 = start1
    circle.s2 = start2
    circle.score = 0
    // start1()
    // start2() 
    
  }
  
}

// for (let y = 0; y < 5; y ++){
  // setTimeout(,100)
  
// }

function myStop() {
  clearInterval(circle.s1);
  clearInterval(circle.s2 );
  setTimeout(clear, 10);
  // circle.score = 0
  // circle.score = 0  
  circle.audio.pause()
  circle.audio.currentTime = 0;
  circle.boolStarted = false
  setTimeout(writeLastScore, 40);

}

function myStop2() {
  clear2()
  clearInterval(circle.s1);
  clearInterval(circle.s2 );
  // setTimeout(clear, 5);
  // circle.score = 0
  // circle.score = 0  
  circle.audio.pause()
  circle.audio.currentTime = 0;
  circle.boolStarted = false
  // setTimeout(writeLastScore(item), 400);
  chosed()

}

function myStop3(item) {
  clear2()
  clearInterval(circle.s1);
  clearInterval(circle.s2 );
  // setTimeout(clear, 5);
  // circle.score = 0
  // circle.score = 0  
  circle.audio.pause()
  circle.audio.currentTime = 0;
  circle.boolStarted = false
  // setTimeout(writeLastScore(item), 400);
  setTimeout(chosed2, 100);

}
function chosed(){
  ctx.beginPath();
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.font = '36px roboto';
  let endScoreOutput = `${mode} is selected`;  
  let endScoreOutput2 = `${currentTrack} is selected`;  
  ctx.fillText(endScoreOutput,canvas.width/2,canvas.height/2+50);
  ctx.fillText(endScoreOutput2,canvas.width/2,canvas.height/2+100);
}

function chosed2(){
  ctx.beginPath();
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.font = '36px roboto';
  let endScoreOutput = `${mode} is selected`;  
  let endScoreOutput2 = `${currentTrack} is selected`;  
  ctx.fillText(endScoreOutput,canvas.width/2,canvas.height/2+50);
  ctx.fillText(endScoreOutput2,canvas.width/2,canvas.height/2+100);
}
// 
function writeLastScore(item){
  ctx.beginPath();
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.font = '36px roboto';
  let endScoreOutput = `SCORE : ${circle.score*100}`;  
  ctx.fillText(endScoreOutput,canvas.width/2,canvas.height/2);
  // chosed(item);
}
// 
function myStart() {
  if (mode === "No Diff" || currentSong === false){
    return alert("Please Select a Song and Diff");
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  realStart()
  circle.audio.play();
}


function clear(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // ctx.clearRect(canvas.width/2, 0, 50, canvas.height)
  circle.circles = []
  ctx1.clearRect(0, 0, canvas.width, canvas.height)
  drawScore ()
  hasMusicStopped() 
}

function clear2(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // ctx.clearRect(canvas.width/2, 0, 50, canvas.height)
}

function hasMusicStopped(){
  // ctx1.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.clearRect(canvas.width/2, 0, 50, canvas.height)


  if (circle.audio.ended === true){
    endScore = circle.score
    clear2
    myStop2()    
    
  }
}

function easy() {
  mode = "easy"
  myStop2("Easy")
  mode = "easy"
  

}
function med() {
  mode = "med"
  myStop2()
  mode = "med"

}
function hard() {
  mode = "hard"
  myStop2("Hard")
  mode = "hard"
  

}
function trackPadUsers() {
  mode = "trackpad"
  myStop2("Trackpad")
  mode = "trackpad"
  

}


function toggleMute() {
  if (circle.audio.volume > 0){
    oldVol = circle.audio.volume
    circle.audio.volume = 0
  }
  else{
    circle.audio.volume = oldVol
  } 

}

function volDown() {
  if (circle.audio.volume > .001){
    if (circle.audio.volume <.20)
        circle.audio.volume = 0
    else{
      circle.audio.volume -= .20
    }
}
}

function volUp() {
  if (circle.audio.volume < 1){
    circle.audio.volume += .20
}
}


function drawInstruction(){

  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.fillStyle = 'rgba(0,0,0,0.5)';
  // ctx.fillRect(0,0,canvas.width,40);
  ctx.beginPath();
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.font = '36px roboto';
  
  let inst2 = `Please zoom out so you can see the whole rectangle`;
  let inst = `Use your mouse to erase the circles appearing the screen`;
  ctx.fillText(inst,canvas.width/2,canvas.height/2);
  ctx.fillText(inst2,canvas.width/2,canvas.height/2+50);
}


function disclaimer(){
  clearInterval(circle.s1);
  clearInterval(circle.s2);
  circle.score = 0
  // circle.score = 0  
  circle.audio.pause()
  circle.audio.currentTime = 0;
  circle.boolStarted = false
  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.fillStyle = 'rgba(0,0,0,0.5)';
  // ctx.fillRect(0,0,canvas.width,40);
  ctx.beginPath();
  ctx.textAlign = 'center';
 
  ctx.font = '34px roboto';
  ctx.fillStyle = 'sliver';
  let edu = `Disclaimer:`;
  let edu1 = `This project is only for educational purpose only(Non-commercial)`;
  let edu5 = `Shape of You by Ed Sheeran: https://www.youtube.com/watch?v=VJ2rlci9PE0`;
  let edu2 = `Kamado Tanjirou no Uta by Nami: https://www.youtube.com/watch?v=Y7YwcHbvysM`;
  let edu3 = `Rolling Star by Yui: https://www.youtube.com/watch?v=WiowHc4uc0A`;
  let edu4 = `Unravel by TK: https://www.youtube.com/watch?v=H2oWviWV9r4`;
  let edu6 = `Rick Roll https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
  let edu7 = `Please zoom out so you can see the whole rectangle`;
  let edu8 = `Use your mouse to ERASE ME`;
  let edu9 = `Choose a difficulty and song at the bottom of the page, then start`;
  
  ctx.fillText(edu,canvas.width/2,50);
  ctx.fillText(edu1,canvas.width/2,100);
  ctx.fillText(edu2,canvas.width/2,150);
  ctx.fillText(edu3,canvas.width/2,200);
  ctx.fillText(edu4,canvas.width/2,250);
  ctx.fillText(edu5,canvas.width/2,300);
  ctx.fillText(edu6,canvas.width/2,350);
  ctx.fillText(edu7,canvas.width/2,450);
  ctx.fillText(edu8,canvas.width/2,500);
  // ctx.fillText(edu8,canvas.width/2,550);
  ctx.fillText(edu9,canvas.width/2,600);
}

drawScore ()
drawInstruction()
circle.audio.volume = .60
