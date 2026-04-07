// Get elements
const scoreDisplay = document.getElementById("score");
const buttons = document.querySelectorAll(".buttons button");
const reset = document.getElementById("reset-btn");

let score = 60;

// Function to update score
function game(entry) {
    const oldScore = score;

    // Update score according to rules
    if (score % entry === 0) {
        score = score / entry;
    } else {
        score = score * entry;
    }

    // Update display
    scoreDisplay.textContent = score;

    // Animate score change color
    if (score > oldScore) {
        scoreDisplay.style.color = "#27ae60"; // green if score increased
    } else if (score < oldScore) {
        scoreDisplay.style.color = "#c0392b"; // red if score decreased
    } else {
        scoreDisplay.style.color = "#2c3e50"; // neutral
    }

    // Reset color after short delay
    setTimeout(() => {
        scoreDisplay.style.color = "#2c3e50";
    }, 300);
}

// Add click events to all number buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const entry = parseInt(button.textContent);
        game(entry);
    });
});

// Reset button
reset.addEventListener("click", () => {
    score = 60;
    scoreDisplay.textContent = score;
    scoreDisplay.style.color = "#2c3e50";
});