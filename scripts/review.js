// Only increment if this is the first load from the form submission
if (!sessionStorage.getItem("reviewed")) {

    // Get current review count from localStorage
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    // Increment
    reviewCount++;

    // Save back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Set flag so refresh won't increment again
    sessionStorage.setItem("reviewed", "true");
}

// Display current count
let reviewCountDisplay = Number(localStorage.getItem("reviewCount")) || 0;
document.getElementById("countDisplay").textContent =
    `Total Reviews Submitted: ${reviewCountDisplay}`;
