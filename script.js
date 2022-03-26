
// this returns an array of each button
var listItems = document.querySelectorAll("section button");
var displayText = "";

// add action listener to each button
listItems.forEach(function(item) {
    item.onclick = function(e) {
    // get content of clicked button
    input = this.innerText;
    // process
    processUserActions(input);
    }
});