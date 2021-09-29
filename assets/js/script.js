//////Set digital clock//////
function currentTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second;

  document.querySelector(".time").textContent = time;
}
setInterval(currentTime, 1000);


////////Set date////////////
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let dayEl = document.querySelector(".day-el");
let monthEl = document.querySelector(".month-el");
let yearEl = document.querySelector(".year-el");

day = (day < 10) ? "0" + day : day;
month = (month < 10) ? "0" + month : month;

dayEl.textContent = day;
monthEl.textContent = month;
yearEl.textContent = year;


//////Display counter//////
let dateTimeDiv = document.querySelector(".date-time");

let timerDiv = document.createElement("div");
timerDiv.className = "timer";
dateTimeDiv.after(timerDiv);

let minusBtn = document.createElement("button");
minusBtn.className = "minus-btn";
minusBtn.innerHTML = "-";
timerDiv.prepend(minusBtn);

let h2CountEl = document.createElement("h2");
h2CountEl.className = "count-el";
h2CountEl.innerHTML = "0";
minusBtn.after(h2CountEl);

let plusBtn = document.createElement("button");
plusBtn.className = "plus-btn";
plusBtn.innerHTML = "+";
timerDiv.append(plusBtn);


//////Set counter//////
let count = 0;

minusBtn.addEventListener("click", decrease);
plusBtn.addEventListener("click", increase);

function decrease() {
  count -= 1;
  h2CountEl.textContent = count;
}

function increase() {
  count += 1;
  h2CountEl.textContent = count;
}


////////Modify date///////
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");

startBtn.addEventListener("click", startTravel);
resetBtn.addEventListener("click", toPresent);

function startTravel() {
  yearEl.textContent = year + count;

  if (count != 0) {
    minusBtn.removeEventListener("click", decrease);
    plusBtn.removeEventListener("click", increase);
  }
}

function toPresent() {
  count = 0;
  h2CountEl.textContent = 0;

  year = now.getFullYear();
  yearEl.textContent = year;

  minusBtn.addEventListener("click", decrease);
  plusBtn.addEventListener("click", increase);
}