

const countDown = document.getElementById('countdown')





startButton.addEventListener('click', () => {
    // Gestiamo i bottoni
    startButton.disabled = true;
    stopButton.disabled = false;
  
    // Gestiamo il timer
    count = 0;
    countDown.innerText = count;
  
    // incremento il tempo
    timer = setInterval(() => {
      countDown.innerText = ++count;
    }, 1000);
  });