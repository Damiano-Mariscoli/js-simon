

const countDown = document.getElementById('countdown')
const startButton = document.querySelector('.btn-success')
const randomList = document.querySelector('ul.list-unstyled')
const formNum = document.getElementById('answers-form')
const instructions = document.getElementById('instructions')
const min = 1;
const max = 50;


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is 
  }

startButton.addEventListener('click', () => {
    // Gestiamo i bottoni
    startButton.classList.add('d-none')
    startButton.disabled = true;
    for(i = 0;  i < 5; i++){
        const randomNum = document.createElement('li')
        randomNum.innerText = getRandomInt(min , max)
        randomList.appendChild(randomNum)
        
    }
    
  
    // Gestiamo il timer
    count = 0;
    countDown.innerText = count;
    // incremento il tempo
    timer =setInterval(() => {
      if (count === 0) {
        document.querySelectorAll('ul.list-unstyled li').forEach(i => i.remove());
        formNum.classList.remove('d-none')
        instructions.innerText = "Scrivi i numeri che ricordi!";
      } else {
        
        countDown.innerText = --count;
      }
    }, 1000);
    
  });
