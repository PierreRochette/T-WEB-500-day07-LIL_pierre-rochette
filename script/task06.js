const canvas = document.querySelector('canvas');
const boxs = document.querySelectorAll('footer div');
const box = boxs[0];
const coordinates = boxs[1];

window.addEventListener('load', function () {

  box.style.position = 'relative'

  canvas.style.position = 'absolute'

});

 

let isDragging = false
let offsetX, offsetY


canvas.addEventListener('mousedown', (event) => {

  isDragging = true

  const rect = canvas.getBoundingClientRect()

  offsetX = event.clientX - rect.left

  offsetY = event.clientY - rect.top

});

document.addEventListener('mousemove', (event) => {

  if (!isDragging) return;

 

  const boxRect = box.getBoundingClientRect()

  const maxX = boxRect.width - canvas.offsetWidth

  const maxY = boxRect.height - canvas.offsetHeight

 

  let left = event.clientX - offsetX - boxRect.left

  let top = event.clientY - offsetY - boxRect.top

 

  left = Math.max(0, Math.min(maxX, left))

  top = Math.max(0, Math.min(maxY, top))

 

  canvas.style.left = `${left-5}px`

  canvas.style.top = `${top}px`

 

  coordinates.textContent = `New coordinates => {x:${left}, y:${top}}`

 

});


document.addEventListener('mouseup', () => {

  isDragging = false;

});