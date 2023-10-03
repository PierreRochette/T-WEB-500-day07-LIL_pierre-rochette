var canvas = document.querySelector("canvas"); 
var context = canvas.getContext("2d"); 
var coordinates = [{x:6, y:6}, {x:14, y:10}, {x:6, y:14}]; 
var audio = new Audio('./ressources/timemachine.mp3'); 
var pauseButton = document.querySelector("button:first-of-type"); 
var stopButton = document.querySelector("button:nth-of-type(2)"); 
var muteButton = document.querySelector("button:last-of-type"); 

context.beginPath(); 
context.moveTo(coordinates[0].x, coordinates[0].y); 
context.lineTo(coordinates[1].x, coordinates[1].y); 
context.lineTo(coordinates[2].x, coordinates[2].y); 
context.closePath(); 

context.lineWidth = 1; 
context.strokeStyle = 'black'; 
context.stroke(); 

context.fillStyle = "white"; 
context.fill(); 



canvas.addEventListener('click', function() {
    audio.play(); 
}); 

pauseButton.addEventListener('click', function() {
    audio.pause(); 
}); 

muteButton.addEventListener('click', function() {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true; 
    }
}); 

stopButton.addEventListener('click',  function () {
    audio.pause(); 
    audio.currentTime = 0; 
})
