document.addEventListener("DOMContentLoaded", function () {
    function addItem() {
        var inputContent = document.getElementById("listItem").value;
        var newDiv = document.createElement("div");
        newDiv.textContent = inputContent;
        document.body.appendChild(newDiv);
        document.getElementById("listItem").value = "";
    }
    var addButton = document.querySelector("button");
    addButton.addEventListener("click", addItem);
});
