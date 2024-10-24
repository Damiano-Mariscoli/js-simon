

const countDown = document.getElementById('countdown')
const startButton = document.querySelector('.btn-success')
const confirmButton = document.querySelector('.btn-primary')
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
let listAfter = document.querySelectorAll('ul.list-unstyled li')
startButton.addEventListener('click', () => {
    // Gestiamo i bottoni
    startButton.classList.add('d-none')
    startButton.disabled = true;
    for(i = 0;  i < 5; i++){
        const randomNum = document.createElement('li')
        randomNum.innerText = getRandomInt(min , max)
        randomList.appendChild(randomNum)
        
    }const listAfter = document.querySelectorAll('ul.list-unstyled li')
    
  
    // Gestiamo il timer
    count = 0;
    countDown.innerText = count;
    // incremento il tempo
    timer =setInterval(() => {
   
      if (count === 0) {
        console.log(listAfter)
        listAfter.forEach(i => i.classList.add('d-none'));
        formNum.classList.remove('d-none')
        instructions.innerText = "Scrivi i numeri che ricordi!"; 
        clearInterval(timer);


        confirmButton.addEventListener('click', () => {
            let arrayNum = Array.from(listAfter).map(i => i.textContent)
            console.log(arrayNum)

            let arrayInput = Array.from(document.querySelectorAll('input')).map(i => i.value)
            console.log(arrayInput)

            let correctNum = 0;
            arrayNum.forEach(num => {
                if (arrayInput.includes(num)) {
                    correctNum++;
                }
            });
            console.log(`Hai azzeccato ${correctNum} numeri`);
            if(arrayInput.length === arrayInput.length){
                const result = `Hai azzeccato ${correctNum} numeri`;
                instructions.innerText = result;
                formNum.classList.add('d-none');
                confirmButton.disabled = true;
            }
            
            
            
                
        })
      } else {
        
        countDown.innerText = --count;
      }
    }, 1000);
    
  });

  


