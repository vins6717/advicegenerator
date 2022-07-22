const adviceEl = document.getElementById('advice');
const adviceBtn = document.getElementById('advice-button');

generateAdvice()

function generateAdvice(){
    

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceEl.innerHTML = data.slip.advice;
    })
}

adviceBtn.addEventListener('click', generateAdvice);

