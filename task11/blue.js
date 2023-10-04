const paragraphs = document.querySelectorAll('p'); 

function addBlueClass(event) {
    event.target.classList.add('blue'); 
}; 

function highlight(event) {
    event.target.classList.toggle('highlighted')
}; 

paragraphs.forEach(paragraph => {
    paragraph.addEventListener("mouseover", addBlueClass); 
    paragraph.addEventListener('click', highlight); 
}); 