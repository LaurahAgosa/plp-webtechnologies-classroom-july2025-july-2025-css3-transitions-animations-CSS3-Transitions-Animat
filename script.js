// Global variable
let count = 0;

// Function to update counter text
function updateCounter(elementId, increment) {
    // Local variable inside function
    let newCount = count + increment;
    document.getElementById(elementId).textContent = newCount;
    return newCount; // return value
}

// Function to reset counter
function resetCounter(elementId) {
    count = 0;
    document.getElementById(elementId).textContent = count;
}

// Example usage
document.getElementById("incrementBtn").addEventListener("click", function() {
    count = updateCounter("counterDisplay", 1);
});

document.getElementById("resetBtn").addEventListener("click", function() {
    resetCounter("counterDisplay");
});

// PART 3

const box = document.getElementById("animatedBox");
document.getElementById("animateBtn").addEventListener("click", function() {
    box.classList.add("animate");

    // Remove class after animation ends to allow re-trigger
    setTimeout(() => box.classList.remove("animate"), 1000);
});
