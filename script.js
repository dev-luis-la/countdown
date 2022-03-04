const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('count-title');
const coundwnBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//set date input min to current date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute("min", today);
//countdown function
function updateDom(){
    const now = new Date().getTime();
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor(( distance % day ) / hour);
    const minutes = Math.floor(( distance % hour ) / minute);
    const seconds = Math.floor(( distance % minute ) / second);
    console.log(days, hours, minutes, seconds)
    //show countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // hide inout
    inputContainer.hidden = true;
    //coutn down el
    countdownEl.hidden = false;

}


//funtion form value inputs
function updateCountdown(e){
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate, countdownTitle);

    //get time from current date
    countdownValue = new Date(countdownDate).getTime();
    updateDom();

}

//event listeners
countdownForm.addEventListener('submit', updateCountdown);