const footerDiv = document.querySelector("footer div"); 

function askName() {
    let username=''; 
    while (!username) {
        username = prompt("What's your name ?"); 
    }
    return username; 
}

function confirmName(username) {
    return confirm(`Are you sure that ${username} is your name ?`); 
}

function showAlert(username) {
    alert(`Hello ${username}!`); 
}

footerDiv.addEventListener('click', () => {
    const username = askName(); 

    if (confirmName(username)) {
        showAlert(username); 
        footerDiv.textContent = `Hello ${username} !`
    }
}); 