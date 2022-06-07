const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice");
const dice = document.getElementById("dice");

function generateAdvice(){
    const fetchAdvice = fetch("https://api.adviceslip.com/advice");

    fetchAdvice
        .then(response => {
            return response.json();
        })
        .then(advice => {
            const numberOfAdvice = advice.slip.id;
            adviceNumber.innerHTML = `ADVICE #${numberOfAdvice}`
            const advices = advice.slip.advice;
             adviceText.innerHTML = `“${advices}”`;
        })
        .catch(error => {
            console.error(`This is the error: ${error}`)
        })  
}
generateAdvice();

function generate(){
    dice.disabled = true;
    dice.classList.add("spin");
    setTimeout(function() {
        dice.classList.remove("spin");
        dice.disabled = false;
    },2000)
}

dice.addEventListener("click", generateAdvice);
dice.addEventListener("click",generate);