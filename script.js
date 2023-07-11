const inputWordsLabel = document.getElementById("input-words-label");
const insertBtn = document.getElementById("insert");
const inputWords = document.getElementById("input-words");
const alphabetizeBtn = document.getElementById("alphabetize-button");
let numOfWords = 0;

insertBtn.addEventListener("click", function () {
  insertBtn.classList.add("hidden");
  inputWords.classList.remove("hidden");
  inputWordsLabel.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !inputWords.classList.contains("hidden") && inputWords.value) {
    alphabetizeBtn.classList.remove("hidden");
    numOfWords++
    const word = document.createElement("li");
    word.id = `word${numOfWords}`
    word.textContent = inputWords.value;
    word.style.fontSize = "50px";
    document.querySelector(".word-list").appendChild(word);
    inputWords.value = "";
  }
});
alphabetizeBtn.addEventListener('click', function () {
  let arrOfWords = [];
  for (let i = 1; i <= numOfWords; i++) {
    arrOfWords.push(document.getElementById(`word${i}`).textContent)
  }
  console.log(arrOfWords.sort())
  for (let i = 1; i <= numOfWords; i++) {
    document.getElementById(`word${i}`).textContent = arrOfWords[(i - 1)];
  }
})
