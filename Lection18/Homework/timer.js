// Реалізувати таймер відліку:
// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25

let timerDurationInSeconds = 85;

function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}`;
}

function startTimer(duration) {
  const timerEl = document.getElementById("timer");
  let timer = duration;
  let minutes, seconds;

  const interval = setInterval(function () {
    if (timer == 0) {
      clearInterval(interval);
    }

    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    timerEl.textContent = formatTime(minutes, seconds);

    timer--;
  }, 1000);
}

startTimer(timerDurationInSeconds);
