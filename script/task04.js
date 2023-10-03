const increaseButton = document.querySelector("div button:first-of-type");
const decreaseButton = document.querySelector("div button:last-of-type"); 
const backgroundSelector = document.querySelector("div select"); 

backgroundSelector.addEventListener('change', (evenement) => {
    document.body.style.backgroundColor = evenement.target.value; 
}); 

increaseButton.addEventListener('click', (evenement) => {
    const size = parseInt(getComputedStyle(document.body).fontSize); 
    document.body.style.fontSize = `${size+1}px`; 
}); 

decreaseButton.addEventListener('click', (evenement) => {
    const size = parseInt(getComputedStyle(document.body).fontSize); 
    document.body.style.fontSize = `${size-1}px`; 
}); 