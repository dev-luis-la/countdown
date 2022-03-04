const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');


//set date input min to current date

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute("min", today);

//funtion 
function updateCountdown(e){
    e.preventDefault();
    console.log(e);
}

//event listeners
countdownForm.addEventListener('submit', updateCountdown);