
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


let speed = {
  bpm:76
}

let mode = "easy"

let songBPM = 1000/(speed.bpm/60)

let diff = {
  easy:songBPM*4,
  med:songBPM*2,
  hard:songBPM*1
}


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
  // diff: diff.med,
  // audio:new Audio('92.mp3'),
  // audio:new Audio('Temp79.mp3'),
  unravelSong:new Audio('Unravel.mp3'),
  // audio:new Audio('120 2.mp3'),
  audio:new Audio('76.mp3'),
  rollingStarSong:new Audio('81.mp3'),
  // audio:new Audio('Naruto 97.mp3'),
  boolStarted: false
};
function rollingStar() {
  myStop()
  circle.audio = new Audio('81.mp3')
  speed.bpm = 81*2
  songBPM = 1000/(speed.bpm/60)
  diff = {
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }

  
}

function kamadoTanjironoUta() {
  myStop()
  circle.audio = new Audio('76.mp3')
  speed.bpm = 76
  songBPM = 1000/(speed.bpm/60)
  diff = {
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }  
 
}

function shapeOfYou() {
  myStop()
  circle.audio = new Audio('ed.mp3')
  speed.bpm = 96
  songBPM = 1000/(speed.bpm/60)
  diff = {
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }  
 
}


function unravel() {
  // debugger
  myStop()
  circle.audio = new Audio('Unravel.mp3')
  speed.bpm = 135
  songBPM = 1000/(speed.bpm/60)
  diff = {
    easy:songBPM*4,
    med:songBPM*2,
    hard:songBPM*1
  }
 


}
let mouseArray = []
var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;

}

setInterval(pointerCheck, 10);
function pointerCheck() {
  let tempx = -1;
  let tempy = -1
  let radius = 20
	// console.log('Cursor at: '+pointerX+', '+pointerY);
  // ctx.clearRect(pointerX-((window.innerWidth-canvas.width)/2)-40, pointerY-40, 80, 80)
  
  ctx.beginPath();
  ctx.clearRect(pointerX - radius - 1- ((window.innerWidth-canvas.width)/2), pointerY - radius - 1 - 50 - 10, radius * Math.PI, radius * Math.PI)
  ctx.closePath();
  // mouseArray.push([pointerX,pointerY])
  
  var rect1 = {x: pointerX, y: pointerY, width: radius, height: radius}  
  for (let x = 0; x < circle.circles.length;x++){
    var rect2 = {x: circle.circles[x][0]+(window.innerWidth-canvas.width)/2, y: circle.circles[x][1], width: radius, height: radius}
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y && (rect1.x != tempx && rect1.y != tempy) ){
        tempx = rect1.x
        // console.log(tempx,rect1.x)
        tempy = rect1.y
      //  console.log("collision detected!")
       circle.score += 1
      //  console.log(circle.score)
   }
  }
  // console.log(rect1)
  // console.log(rect2)
  // if (rect1.x < rect2.x + rect2.width &&
  //    rect1.x + rect1.width > rect2.x &&
  //    rect1.y < rect2.y + rect2.height &&
  //    rect1.y + rect1.height > rect2.y) {
  //     console.log("collision detected!")
  //     score += 1
  //     console.log(score)
  // }
  
  // filling in the values =>
  
  // if (5 < 30 &&
  //     55 > 20 &&
  //     5 < 20 &&
  //     55 > 10) {
  //     // collision detected!
  // }

}

// function check(){
//   while (circle.circles.length !== 0){
//     for (let x = 0; circle.circles.length;x++){
//       // console.log(circle.circles[x])
//     }
//   }
// }










// window.addEventListener('click', (e) => { //mouseover   
//   xpos = e.clientX
//   ypos = e.clientY
//   console.log(xpos,ypos)
// })


// canvas.addEventListener('click', (e) => { //mouseover 
//   const rect = canvas.getBoundingClientRect();
//   xpos = e.clientX - rect.left
//   ypos = e.clientY - rect.top
//   // console.log(e)

//   ctx.clearRect(xpos-10, ypos-10, 50, 40)

//   console.log(xpos,ypos)
 
//   const mouseOver = {
//     x: xpos,
//     y: ypos,
//     size: 50,
//   }
//   // console.log(xpos,ypos)
//   mouseArray.push(mouseOver)
// })


function start() {
  let circleCount = Math.floor(Math.random() * (30 - 10) + 10);
  
  for (let x = 0; x < circleCount; x++) {
    let y = Math.random()
    if (x === circleCount / 4 && circle.direction !== undefined) {
      // console.log(circle.direction[0])  
      circle.direction[0] = circle.direction[0] * -1 || 30
      // console.log(circle.direction[0])
      // console.log(circle.direction[1])
      circle.direction[1] = circle.direction[0] * -1 || 30
      // console.log(circle.direction[1])

    }
    else if(x === circleCount / 2 && circle.direction !== undefined) {
      // console.log(circle.direction[0])  
      circle.direction[0] = circle.direction[1] * -1 || 30
      // console.log(circle.direction[0])
      // console.log(circle.direction[1])
      circle.direction[1] = circle.direction[1] * -1 || 30
      // console.log(circle.direction[1])

    }
    else if (x === (circleCount * .75) && y < .33) {
      // console.log(circle.direction[0])  
      circle.direction[0] = circle.direction[1] * -1 || 30
      // console.log(circle.direction[0])
      // console.log(circle.direction[1])
      circle.direction[1] = circle.direction[1] * 1 || 30
      // console.log(circle.direction[1])

    }
    

    // if (x === 1){
    //   continue
    // }
    // if (stop === false) {
      // debugger
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
  // circle.randomPoint = undefined
  // circle.direction = [Math.random() * (max - min) + min, Math.random() * (max - min) + min]
  // 
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
  ctx1.fillStyle = 'rgba(0,0,0,0.5)';
  ctx1.fillRect(0,0,canvas1.width,40);
  ctx1.beginPath();
  ctx1.textAlign = 'center';
  ctx1.fillStyle = 'white';
  ctx1.font = '36px roboto';
  
  let tempOutput = `SCORE : ${circle.score*100}`;
  ctx1.fillText(tempOutput,canvas1.width/2,38);
  // requestAnimationFrame(drawScore)
}

// function delayDraw (){
//   setTimeout(draw, 1000);
// }

// function createcircle() {
  
// }

// function realStart(){
//   let x = 0;
//   while (x < 5){
//     start()
//     setTimeout(clear,1000)
//     x++
//   }
// } 
// var start1 = setInterval(start, 500);
// var start2 = setInterval(clear, 2000);


//size????????????????


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
  setTimeout(clear, 100);
  // circle.score = 0  
  circle.audio.pause()
  circle.audio.currentTime = 0;
  circle.boolStarted = false
}
// 
// 
function myStart() {
  realStart()
  circle.audio.play();
}

// start()
// setTimeout(clear,1000)
// start()
// setTimeout(clear,1000)
// start()
// setTimeout(clear,1000)
// start()
// setTimeout(clear,1000)
function clear(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // ctx.clearRect(canvas.width/2, 0, 50, canvas.height)
  circle.circles = []
  ctx1.clearRect(0, 0, canvas.width, canvas.height)
  drawScore ()
  hasMusicStopped() 
}

function hasMusicStopped(){
  // ctx1.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.clearRect(canvas.width/2, 0, 50, canvas.height)


  if (circle.audio.ended === true){
    myStop()    
  }
}

function easy() {
  myStop()
  mode = "easy"
  

}
function med() {
  myStop()
  mode = "med"
 

}
function hard() {
  myStop()
  mode = "hard"
  

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
  let inst = `Use your mouse to erase`;
  ctx.fillText(inst,canvas.width/2,canvas.height/2);
  ctx.fillText(inst2,canvas.width/2,canvas.height/2+50);
}


function disclaimer(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.fillStyle = 'rgba(0,0,0,0.5)';
  // ctx.fillRect(0,0,canvas.width,40);
  ctx.beginPath();
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.font = '34px roboto';
  
  let edu = `Disclaimer:`;
  let edu1 = `This project is only for educational purpose only(Non-commercial)`;
  let edu5 = `Shape of You by Ed Sheeran: https://www.youtube.com/watch?v=VJ2rlci9PE0`;
  let edu2 = `Kamado Tanjirou no Uta by Nami: https://www.youtube.com/watch?v=Y7YwcHbvysM`;
  let edu3 = `Rolling Star by Yui: https://www.youtube.com/watch?v=WiowHc4uc0A`;
  let edu4 = `Unravel by TK: https://www.youtube.com/watch?v=H2oWviWV9r4`;
  let edu6 = `Please zoom out so you can see the whole rectangle`;
  let edu7 = `Use your mouse to erase`;

  ctx.fillText(edu,canvas.width/2,50);
  ctx.fillText(edu1,canvas.width/2,100);
  ctx.fillText(edu2,canvas.width/2,150);
  ctx.fillText(edu3,canvas.width/2,200);
  ctx.fillText(edu4,canvas.width/2,250);
  ctx.fillText(edu5,canvas.width/2,300);
  ctx.fillText(edu6,canvas.width/2,400);
  ctx.fillText(edu7,canvas.width/2,450);
}
// draw()
// realStart()
// delayDraw()
// console.log(circle.circles)
drawScore ()
drawInstruction()
// hasMusicStopped()