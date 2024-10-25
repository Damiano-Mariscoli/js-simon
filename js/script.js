const countDown = document.getElementById("countdown");
const startButton = document.querySelector(".btn-success");
const confirmButton = document.querySelector(".btn-primary");
const randomList = document.querySelector("ul.list-unstyled");
const formNum = document.getElementById("answers-form");
const instructions = document.getElementById("instructions");
const error = document.getElementById("error-popup")
const min = 1;
const max = 50;
let count = 5;
let livello = 5;
let arrayRandom = [];

function getRandomInt(min, max, array) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  if (array.includes(randomNumber)) {
    return getRandomInt(min, max, array);
  } else {
    array.push(randomNumber);
    return randomNumber;
  }
}

startButton.addEventListener("click", () => {
  startButton.classList.add("d-none");
  startButton.disabled = true;
  for (let i = 0; i < livello; i++) {
    const randomNum = document.createElement("li");
    randomNum.innerText = getRandomInt(min, max, arrayRandom);
    randomList.appendChild(randomNum);
  }
  countDown.innerText = count;
  
  let timer = setInterval(() => {
    if (count == 0) {
      countDown.classList.add("d-none")
      console.log(arrayRandom);
      
      for (let j = 0; j < arrayRandom.length; j++) {
        const li = randomList.children[j];
        if (li) {
          li.classList.add("d-none");
        }
      }
      formNum.classList.remove("d-none");
      instructions.innerText = "Scrivi i numeri che ricordi!";
      clearInterval(timer);
      confirmButton.classList.remove("d-none");

      formNum.addEventListener('submit', function (event) {
        event.preventDefault();
        let arrayNum = arrayRandom;
        console.log(arrayNum);

        let arrayInput = [];
        for (let i = 0; i < document.querySelectorAll("input").length; i++) {
          arrayInput.push(document.querySelectorAll("input")[i].value);
        }
        console.log(arrayInput);
        for (let i = 0; i < arrayInput.length; i++) {
          if (arrayInput[i] > 50 || arrayInput[i] === "" || arrayInput.indexOf(arrayInput[i]) !== i) {
            error.classList.remove("d-none");
            setTimeout(() => {
              error.classList.add("d-none");
            }, 3000);
            event.preventDefault();
            return;
          }
        }
        


        let correctNum = 0;
        let wichNum = [];
        let notCorrect = [];
        console.log(arrayNum);

        for (let i = 0; i < arrayNum.length; i++) {
          const num = arrayNum[i];
          if (arrayInput.includes(num)) {
            correctNum++;
            wichNum.push(num);
          } else {
            notCorrect.push(num);
          }

          console.log(`Hai azzeccato ${correctNum} numeri`);
          if (arrayInput.length === livello) {
            const result = `Hai azzeccato ${correctNum} numeri: ${wichNum} Numeri mancanti: ${notCorrect}`;
            instructions.innerText = result;
            formNum.classList.add("d-none");
            confirmButton.disabled = true;
          }
        }
      });
    } else {
      count--;
      countDown.innerText = count;
    }

  }, 1000)
})

