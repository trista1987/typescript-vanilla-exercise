//function parameter and return type, both need type annotations
var reverseWord = function (word) {
    return word.split("").reverse().join("");
};
var capitalizeWord = function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
var repeatWord = function (word, times) {
    return word.repeat(times);
};
// catered for swedish - feel free to change 😊
var countVowels = function (word) {
    return (word.match(/[aeiouyåäö]/gi) || []).length;
};
var transformWord = function (operation, word, param) {
    switch (operation) {
        case "reverse":
            return reverseWord(word);
        case "capitalize":
            return capitalizeWord(word);
        case "repeat":
            return repeatWord(word, param);
        case "countVowels":
            return countVowels(word);
        default:
            return "Invalid operation";
    }
};
var runTransformation = function () {
    var wordInput = document.getElementById("word");
    var word = wordInput ? wordInput.value : "";
    var operationInput = document.getElementById("operation");
    var operation = operationInput ? operationInput.value : "";
    var paramStr = document.getElementById("param");
    var param = paramStr ? parseInt(paramStr.value) : 0;
    var result = transformWord(operation, word, param);
    var resultContainer = document.getElementById("result");
    if (resultContainer) {
        resultContainer.textContent = "Result: ".concat(result);
        resultContainer.classList.toggle("active", result !== "");
    }
};
// Show/hide param input based on selected operation
var operationSel = document.getElementById("operation");
var paramContainer = document.getElementById("paramContainer");
if (operationSel && paramContainer)
    operationSel.addEventListener("change", function () {
        paramContainer.classList.toggle("active", this.value === "repeat");
    });
// Event listener for transform button
var button = document.getElementById("transformButton");
button && button.addEventListener("click", runTransformation);
