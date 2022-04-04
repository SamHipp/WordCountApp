//define variables
let inputField = document.getElementById('input-field');
let output = document.getElementById('output');

//word count output
function wordCheck() {
let inputText = inputField.textContent;
if (inputText == '') {
    output.textContent = 0;
} else {
let checkRegex = /\w+/g;
let wordCount = inputText.match(checkRegex).length;
output.textContent = wordCount;
}
}

setInterval(wordCheck, 500);