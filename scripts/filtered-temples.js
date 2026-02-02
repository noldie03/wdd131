const year = document.getElementById('currentyear');
year.textContent = new Date().getFullYear();

const modified = document.getElementById('lastModified');
modified.textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bacolod Philippines",
        location: "Bacolod, Philippines",
        dedicated: "2021, December, 11",
        area: 26700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-66523.jpg"
    },
    {
        templeName: "Cebu Philippines",
        location: "Cebu, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-2257.jpg"
    },
    {
        templeName: "Urdaneta Philippines",
        location: "Urdaneta, Philippines",
        dedicated: "2024, April, 28",
        area: 32604,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874.jpg"
    },
    // Add more temple objects here...
];

// Render temple cards into the page
const gallery = document.querySelector('.gallery');
const pageTitle = document.querySelector('h1');

function createTempleCard(temple) {
    const card = document.createElement('article');
    card.className = 'temple-card';

    const img = document.createElement('img');
    img.src = temple.imageUrl; // absolute URL provided in data
    img.alt = temple.templeName; // accessible alt text
    img.loading = 'lazy'; // native lazy loading

    const title = document.createElement('h2');
    title.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    return card;
}

// Filter functions
function filterOld(temple) {
    const year = parseInt(temple.dedicated.split(', ')[0]);
    return year < 1900;
}

function filterNew(temple) {
    const year = parseInt(temple.dedicated.split(', ')[0]);
    return year > 2000;
}

function filterLarge(temple) {
    return temple.area > 90000;
}

function filterSmall(temple) {
    return temple.area < 10000;
}

function filterHome() {
    return true; // Show all temples
}

// Display temples based on filter
function displayTemples(filterFunction = filterHome, pageLabel = 'Home') {
    if (!gallery) return;
    gallery.innerHTML = ''; // Clear gallery
    const filteredTemples = temples.filter(filterFunction);
    filteredTemples.forEach((t) => {
        gallery.appendChild(createTempleCard(t));
    });
    // Update h1 to show current page
    if (pageTitle) {
        pageTitle.textContent = pageLabel;
    }
}

// Add event listeners to navigation items
document.addEventListener('DOMContentLoaded', () => {
    displayTemples(filterHome, 'Home'); // Show all temples on load

    const navItems = document.querySelectorAll('.navigation a');
    navItems.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const text = link.textContent.trim();

            switch (text) {
                case 'Home':
                    displayTemples(filterHome, 'Home');
                    break;
                case 'Old':
                    displayTemples(filterOld, 'Old');
                    break;
                case 'New':
                    displayTemples(filterNew, 'New');
                    break;
                case 'Large':
                    displayTemples(filterLarge, 'Large');
                    break;
                case 'Small':
                    displayTemples(filterSmall, 'Small');
                    break;
            }

            // Close mobile menu after selection
            hamButton.classList.remove('open');
            navigation.classList.remove('open');
        });
    });
});
