document.addEventListener("DOMContentLoaded", function () {
  const submitQuizButton = document.getElementById("submitQuiz");
  let ringtone;

  // Play the alarm sound continuously from the start
  ringtone = new Audio("Alarm Clock Old.mp3");
  ringtone.loop = true;
  ringtone.play();

  submitQuizButton.addEventListener("click", function () {
    // Check answers
    const answer1 = document.querySelector('input[name="q1"]:checked').value;
    const answer2 = document.querySelector('input[name="q2"]:checked').value;
    const answer3 = document.querySelector('input[name="q3"]:checked').value;

    if (answer1 === "Paris" && answer2 === "Jupiter" && answer3 === "7") {
      // Correct answers, set off the alarm
      // Stop the continuous ringing
      ringtone.pause();
    } else {
      // Incorrect answers, provide feedback
      alert("Sorry, quiz not passed. Try again!");
    }
  });
});
