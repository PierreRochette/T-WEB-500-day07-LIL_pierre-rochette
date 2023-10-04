const acceptButton = document.querySelector("footer a"); 
const messageBox = document.querySelector("footer div"); 

function createCookie(name, value, hoursToExpire) {
    const expirationDate = new Date(); 
    expirationDate.setTime(expirationDate.getTime() + (hoursToExpire * 60 * 60 * 1000)); 
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}`; 
    hideMessage(); 
}; 

function hasAcceptedCookies() {
    const cookies = document.cookie; 
    return cookies.includes("acceptCookies=true"); 
}; 

function hideMessage() {
    if (hasAcceptedCookies()) {
        messageBox.innerHTML = ""; 
        const deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Delete the cookie"; 
        deleteButton.addEventListener("click", deleteCookie); 
        messageBox.appendChild(deleteButton); 
    } else {
        messageBox.innerHTML = 'This site uses cookies, click on OK if you accept their use. <a href="#">OK</a>';
    }
}; 

function deleteCookie() {
    document.cookie = "acceptCookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
    hideMessage(); 
}



window.addEventListener("load", hideMessage); 

acceptButton.addEventListener("click", function(evenement) {
    evenement.preventDefault(); 
    createCookie("acceptCookies", "true", 24); 
}); 