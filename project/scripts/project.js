// Your existing code
const year = document.getElementById('currentyear');
year.textContent = new Date().getFullYear();

const modified = document.getElementById('lastModified');
modified.textContent = document.lastModified;

const specs = [
    { name: "Engine Type", value: "4‑stroke, single‑cylinder, liquid‑cooled" },
    { name: "Displacement", value: "160 cc" },
    { name: "Max Power", value: "15.0 HP @ 8,000 rpm" },
    { name: "Max Torque", value: "14.7 Nm @ 6,500 rpm" },
    { name: "Transmission", value: "CVT (Automatic)" },
    { name: "Fuel Capacity", value: "8.0 L" },
    { name: "Seat Height", value: "795 mm" },
    { name: "Front Suspension", value: "Telescopic fork" },
    { name: "Rear Suspension", value: "Dual shock absorbers" },
    { name: "Front Brake", value: "Disc" },
    { name: "Rear Brake", value: "Disc" },
    { name: "Weight", value: "132 kg" }
];

function generateSpecsTable(specsArray, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    if (!tableBody) return; // stop if element not found
    tableBody.innerHTML = ""; // clear old rows if there’s any

    specsArray.forEach(spec => {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = `${spec.name}`;
        const td = document.createElement("td");
        td.textContent = `${spec.value}`;
        row.appendChild(th);
        row.appendChild(td);
        tableBody.appendChild(row);
    });
}

// Calls table function
generateSpecsTable(specs, "specsTableBody");


// New function: mobile accordion
function generateSpecsAccordion(specsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // stop if element is not found
    container.innerHTML = ""; // clear previous content

    specsArray.forEach(spec => {
        const item = document.createElement("div");
        item.classList.add("spec-item");

        // Header with toggle using template literal
        const header = document.createElement("div");
        header.classList.add("spec-header");
        header.innerHTML = `${spec.name} <span class="toggle-icon">+</span>`;

        // Content div
        const content = document.createElement("div");
        content.classList.add("spec-content");
        content.textContent = `${spec.value}`; // template literal

        content.style.display = "none"; // hidden by default

        // Click to toggle
        header.addEventListener("click", () => {
            const isOpen = content.style.display === "block";
            content.style.display = isOpen ? "none" : "block";
            // Update toggle using template literal
            header.innerHTML = isOpen
                ? `${spec.name} <span class="toggle-icon">+</span>`
                : `${spec.name} <span class="toggle-icon">–</span>`;
        });

        item.appendChild(header);
        item.appendChild(content);
        container.appendChild(item);
    });
}

// Initialize accordion
generateSpecsAccordion(specs, "specsAccordion");




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

