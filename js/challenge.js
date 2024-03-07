const counter = document.getElementById("counter");

document.addEventListener("DOMContentLoaded", () => {
  runCounter();
});

// Increase the number
function incrementCounter() {
  counter.textContent++;
}

let intervalID;
// Set Interval
function runCounter() {
  intervalID = setInterval(incrementCounter, 1000);
}
// countup timer
const increase = document.getElementById("plus");
increase.addEventListener("click", () => counter.textContent++);

// Countdown timer
const decrease = document.getElementById("minus");
decrease.addEventListener("click", () => counter.textContent--);

//Pause the counter
const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", () => {
  if (pauseBtn.textContent === " pause ") {
    clearInterval(intervalID);
    pauseBtn.textContent = " resume ";
    increase.disabled = true;
    decrease.disabled = true;
    heart.disabled = true;
  } else {
    pauseBtn.textContent = " pause ";
    runCounter();
    increase.disabled = false;
    decrease.disabled = false;
    heart.disabled = false;
  }
});

// Render counter-tme
const heart = document.getElementById("heart");
heart.addEventListener("click", () => {
  let ul = document.querySelector(".likes");
  let li = document.createElement("li");
  li.className = "li1";
  li.textContent = counter.textContent;
  ul.appendChild(li);
});

// Form submit comment-input
const form = document.getElementById("comment-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let comment = document.getElementById("comment-input").value;
  let list = document.querySelector("#list");
  let p = document.createElement("li");
  p.textContent = comment;
  list.appendChild(p);
  form.reset();
});
