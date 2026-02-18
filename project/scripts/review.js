// Only run on review.html
const countDisplay = document.getElementById("countDisplay");
if (countDisplay) {
    const reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    countDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
}
