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

day = (day < 10) ? "0" + day : day;
month = (month < 10) ? "0" + month : month;

let dayEl = document.querySelector(".day-el");
let monthEl = document.querySelector(".month-el");
let yearEl = document.querySelector(".year-el");

dayEl.textContent = day;
monthEl.textContent = month;
yearEl.textContent = year;


//////Set counter//////
let count = 0;
const countEl = document.getElementById("count-el");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");

minusBtn.addEventListener("click", decrease);
plusBtn.addEventListener("click", increase);

function decrease() {
  count -= 1;
  countEl.textContent = count;
}

function increase() {
  count += 1;
  countEl.textContent = count;
}


////////Modify date///////
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");

startBtn.addEventListener("click", startTravel);
resetBtn.addEventListener("click", toPresent);

function startTravel() {
  count = Number(count);
  year = Number(year);
  yearEl.textContent = year + count;

  if (count != 0) {
    minusBtn.removeEventListener("click", decrease);
    plusBtn.removeEventListener("click", increase);
  }
}

function toPresent() {
  count = 0;
  countEl.textContent = 0;

  year = now.getFullYear();
  yearEl.textContent = year;

  minusBtn.addEventListener("click", decrease);
  plusBtn.addEventListener("click", increase);
}