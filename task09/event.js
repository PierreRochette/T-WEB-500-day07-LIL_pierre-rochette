function eventButton() {
    var button = document.querySelector("button:first-of-type"); 
    var paragraphs = document.querySelectorAll("p"); 
    button.addEventListener('click', () => {
        for (let i = 0; i<paragraphs.length; i++) {
            paragraphs[i].style.display = 'none'; 
        }
    }); 
}

eventButton()