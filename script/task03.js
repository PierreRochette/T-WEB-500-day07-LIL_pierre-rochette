const footerDiv = document.querySelector("footer div"); 

function updateText(text) {
    footerDiv.textContent = text; 
}

document.addEventListener('keydown', (evenement) => {
    const currentText = footerDiv.textContent; 
    const pressedKey = evenement.key; 

    if (currentText.length >= 42) {
        const newText = currentText.substring(1) + pressedKey; 
        updateText(newText);
    } else {
        updateText(currentText + pressedKey); 
    }
}); 