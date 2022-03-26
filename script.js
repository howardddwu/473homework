
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

function processUserActions(input) {
    // clear display
    if (input == "DEL") {
    displayText = displayText.slice(0, -1);
    } else if (input == "AC"){
    displayText = "";
    } else if (input == "="){
    displayText = evaluate(displayText).toString();
    } else {
    displayText += input;
    }
    document.getElementById("tb").value = displayText;
}