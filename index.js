const tarDate = new Date("March 14, 2024");
const day = document.querySelector(`[data-value="days"]`);
const hour = document.querySelector(`[data-value="hours"]`);
const min = document.querySelector(`[data-value="mins"]`);
const sec = document.querySelector(`[data-value="secs"]`);
function startTimer(refs, tarDate) {
  console.log(refs, tarDate)
  const time = tarDate - new Date();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.day.textContent = days < 10 ? "0" + days : days;
  refs.hour.textContent = hours < 10 ? "0" + hours : hours;
  refs.min.textContent = mins < 10 ? "0" + mins : mins;
  refs.sec.textContent = secs < 10 ? "0" + secs : secs;
}
class CountdownTimer{
  constructor({ elems, targetDate }) {
    this.elems = elems;
    this.targetDate = targetDate;
  }
  startInterval() {
    const timerInterval = setInterval(startTimer, 1000, this.elems, this.targetDate);
}
};
 
new CountdownTimer({
  elems: {day:  document.querySelector(`[data-value="days"]`),
 hour:  document.querySelector(`[data-value="hours"]`),
 min: document.querySelector(`[data-value="mins"]`),
 sec:  document.querySelector(`[data-value="secs"]`)},
  targetDate: new Date("Jul 17, 2024"),
}).startInterval()


