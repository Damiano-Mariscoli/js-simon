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

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}
let listAfter = document.querySelectorAll("ul.list-unstyled li");
startButton.addEventListener("click", () => {
  
  startButton.classList.add("d-none");
  startButton.disabled = true;
  for (i = 0; i < livello; i++) {
    const randomNum = document.createElement("li");
    randomNum.innerText = getRandomInt(min, max);
    randomList.appendChild(randomNum);
  }
  const listAfter = document.querySelectorAll("ul.list-unstyled li");

  

  countDown.innerText = count;
  
  let timer = setInterval(() => {
    if (count === 0) {
        countDown.classList.add("d-none")
      console.log(listAfter);
      
      for (let i = 0; i < listAfter.length; i++) {
        listAfter[i].classList.add("d-none");
      }
      formNum.classList.remove("d-none");
      instructions.innerText = "Scrivi i numeri che ricordi!";
      clearInterval(timer);

      confirmButton.addEventListener("click", () => {
        let arrayNum = Array.from(listAfter).map((i) => i.textContent);
        console.log(arrayNum);

        let arrayInput = Array.from(document.querySelectorAll("input")).map(
          (i) => i.value);
        console.log(arrayInput);
        for (let i = 0; i < arrayInput.length; i++) {
          if (arrayInput[i] > 50 ||arrayInput[i] === ""){
            error.classList.remove("d-none");
            setTimeout(() => {
              error.classList.add("d-none");
            }, 3000);
            event.preventDefault(true);
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
          if (arrayInput.length === 5) {
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
  }, 1000);
});

