document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById("theForm"); 
    const textInput = document.getElementById("theInput"); 
    const selectOption = document.getElementById("theSelector"); 
    const outputList = document.getElementById("theList"); 

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const textValue = textInput.value;
        const selectedOption = selectOption.value; 
        
        if (textValue.trim() !=='' && selectOption !== 'Select one') {
            const listItem = document.createElement('li'); 
            listItem.textContent = textValue; 

            switch (selectedOption) {
                case 'Note' :
                    listItem.classList.add('note'); 
                    break; 
                case 'Email' :
                    listItem.classList.add('email'); 
                    break; 
                case 'Todo' :
                    listItem.classList.add('todo'); 
                    break; 
            }

            outputList.appendChild(listItem); 
            textInput.value = ""; 
            selectOption.value = 'Select one'; 
        }
    }); 

}); 

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById("formTwo"); 
    const selectorTwo = document.getElementById("selectorTwo"); 

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const selectedOption = selectorTwo.value; 
        const listItems = document.querySelectorAll("#theList li"); 

        if (selectedOption !== 'Select one') {
            listItems.forEach(function (item) {
                if (item.classList.contains(selectedOption)) {
                    item.style.display = "list-item"; 
                } else {
                    item.style.display = "none"; 
                }
            });     
        }
    }); 

    const resetButton = document.getElementById("resetButton"); 
    resetButton.addEventListener('click', function () {
        const listItems = document.querySelectorAll("#theList li"); 
        listItems.forEach(function (item) {
            item.style.display = "list-item"; 
        }); 
    }); 
}); 