// Run timer when DOM Loads
document.addEventListener("DOMContentLoaded", () => {
  runTimer();
});
// Define Counter...
const counter = document.getElementById("counter");
// Increase the number

function incrementCounter() {
  counter.textContent++;
}

//  Define IntervalId variable
let interval;

// Set Interval funtion
function runTimer() {
  interval = setInterval(incrementCounter, 1000);
}

// countup timer Eventlistener
const increase = document.getElementById("plus");
increase.addEventListener("click", () => {
  counter.textContent++;
});

// Countdown timer EvenListener
const decrease = document.getElementById("minus");
decrease.addEventListener("click", () => {
  counter.textContent--;
});

//Pause the counter
const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", () => {
  if (pauseBtn.textContent === "pause") {
    clearInterval(interval);
    pauseBtn.textContent = "resume";
    increase.disabled = true;
    decrease.disabled = true;
    heart.disabled = true;
  } else {
    runTimer();
    pauseBtn.textContent = "pause";
    increase.disabled = false;
    decrease.disabled = false;
    heart.disabled = false;
  }
});
// Render counter-time
const hrtBtn = document.getElementById("heart");
hrtBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = counter.textContent;

  document.querySelector(".likes").appendChild(li);
});

// Form submit comment-input

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let comment = document.getElementById("comment-input").value;
  let list = document.getElementById("list");
  let li = document.createElement("li");
  li.textContent = comment;
  list.appendChild(li);
  form.reset();
});
