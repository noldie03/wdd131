const year = document.getElementById('currentyear');
year.textContent = new Date().getFullYear();

const modified = document.getElementById('lastModified');
modified.textContent = document.lastModified;

// Calculate and display windchill
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    let windChillDisplay;
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillDisplay = `${Math.round(windChill * 10) / 10} °C`;
    } else {
        windChillDisplay = "N/A";
    }

    // Update the windchill element
    const windChillElement = document.querySelector('.weather-card dd:last-of-type');
    windChillElement.textContent = windChillDisplay;
}

// Calculate windchill on page load
displayWindChill();
