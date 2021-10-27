var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'The good news is that the moment you decide that what you know is more important than what you have been taught to believe, you will have shifted gears in your quest for abundance. Success comes from within, not from without. - Ralph Waldo Emerson';
var words = message.split(' ');

function countdown() {
  var timeLeft = 4;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " second(s) remaining.";

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = " ";

      displayMessage();
    }

  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

countdown();
