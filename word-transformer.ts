//function parameter and return type, both need type annotations
const reverseWord: (word: string) => string = (word) =>
  word.split("").reverse().join("");

const capitalizeWord: (word: string) => string = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord: (word: string, times: number) => string = (word, times) =>
  word.repeat(times);

// catered for swedish - feel free to change 😊
const countVowels: (word: string) => number = (word) =>
  (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord: (
  operation: string,
  word: string,
  param: number
) => string | number = (operation, word, param) => {
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

const runTransformation = () => {
  const wordInput = document.getElementById("word") as HTMLInputElement | null;
  const word: string = wordInput ? wordInput.value : "";

  const operationInput = document.getElementById(
    "operation"
  ) as HTMLInputElement | null;
  const operation: string = operationInput ? operationInput.value : "";

  const paramStr = document.getElementById("param") as HTMLInputElement | null;
  const param: number = paramStr ? parseInt(paramStr.value) : 0;

  const result = transformWord(operation, word, param);
  const resultContainer = document.getElementById(
    "result"
  ) as HTMLInputElement | null;

  if (resultContainer) {
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle("active", result !== "");
  }
};

// Show/hide param input based on selected operation
const operationSel = document.getElementById(
  "operation"
) as HTMLInputElement | null;
const paramContainer = document.getElementById(
  "paramContainer"
) as HTMLInputElement | null;
if (operationSel && paramContainer)
  operationSel.addEventListener("change", function () {
    paramContainer.classList.toggle("active", this.value === "repeat");
  });

// Event listener for transform button
const button = document.getElementById("transformButton") as HTMLInputElement | null
button && button.addEventListener("click", runTransformation);

  
