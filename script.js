const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('count-title');
const coundwnBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');


let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//set date input min to current date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute("min", today);
//countdown function
function updateDom(){
 countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor(( distance % day ) / hour);
    const minutes = Math.floor(( distance % hour ) / minute);
    const seconds = Math.floor(( distance % minute ) / second);
    // hide inout
    inputContainer.hidden = true;
    //done show complte 
    if (distance < 0) {
        countdownEl.hidden = true;
        clearInterval(countdownActive);
        completeInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
        completeEl.hidden = false;
    } else {
        //else show countdown
 //show countdown
        countdownElTitle.textContent = `${countdownTitle}`;
        timeElements[0].textContent = `${days}`;
        timeElements[1].textContent = `${hours}`;
        timeElements[2].textContent = `${minutes}`;
        timeElements[3].textContent = `${seconds}`;
        completeEl.hidden = true;
        countdownEl.hidden = false;
    }
 }, second);
}


//funtion form value inputs
function updateCountdown(e){
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    //check for valid date
    if (countdownDate === '') {
        alert('please pick a date');
    } else {
    //get time from current date
        countdownValue = new Date(countdownDate).getTime();
        updateDom();
    }
}
// reselt all values
function reset(){
    //hide countdown
    countdownEl.hidden = true;
    completeEl.hidden = true;
    inputContainer.hidden = false;
    //stop count
    clearInterval(countdownActive);
    //reset values
    countdownTitle = '';
    countdownDate = '';
}

//event listeners
countdownForm.addEventListener('submit', updateCountdown);
coundwnBtn.addEventListener('click', reset)
completeBtn.addEventListener('click', reset)