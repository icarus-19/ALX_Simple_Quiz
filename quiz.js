// Function to check the user's answer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if user selected an answer
    if (!selectedRadio) {
        feedbackElement.textContent = "Please select an answer before submitting!";
        return;
    }
    
    // Get the user's answer value
    const userAnswer = selectedRadio.value;
    
    // Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
