function checkAnswer(answer) {
  let result = document.getElementById("result");
  if(answer === 'b') {
    result.innerHTML = "✅ Correct! Never click on suspicious links!";
    result.style.color = "lightgreen";
  } else {
    result.innerHTML = "❌ Wrong! The right answer is: Delete the email";
    result.style.color = "red";
  }
}
