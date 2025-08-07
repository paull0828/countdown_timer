const startCountDown = () => {
  const timeInput = document.getElementById("timeInput").value;
  const timerDisplay = document.getElementById("timer");
  const timeRemaining = parseInt(timeInput);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timerDisplay.textContent = "Please enter a valid number";
  }

  timerDisplay.textContent = `Time Left ${timeRemaining} seconds`;

  for (let i = timeRemaining; i >= 0; i--) {
    (function (count) {
      setTimeout(() => {
        if (count > 0) {
          timerDisplay.textContent = `Time Left: ${count} seconds`;
        } else {
          timerDisplay.textContent = `Time's Up`;
        }
      }, (timeRemaining - count) * 1000);
    })(i);
  }
};
document.getElementById("startBtn").addEventListener("click", startCountDown);
