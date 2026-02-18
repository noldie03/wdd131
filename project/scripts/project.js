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
    tableBody.innerHTML = ""; // clear old rows if theres any

    specsArray.forEach(spec => {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = spec.name;
        const td = document.createElement("td");
        td.textContent = spec.value;
        row.appendChild(th);
        row.appendChild(td);
        tableBody.appendChild(row);
    });
}

// Calls it
generateSpecsTable(specs, "specsTableBody");
