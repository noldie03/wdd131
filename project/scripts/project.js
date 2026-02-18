const year = document.getElementById('currentyear');
year.textContent = new Date().getFullYear();

const modified = document.getElementById('lastModified');
modified.textContent = document.lastModified;