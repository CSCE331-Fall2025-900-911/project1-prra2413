const button = document.getElementById('theme-toggle');
const blueStyle = document.getElementById('blue-style');
const orangeStyle = document.getElementById('orange-style');

document.addEventListener('DOMContentLoaded', () => {
    const oldTheme = localStorage.getItem('theme');
    if (oldTheme === 'orange') {
        blueStyle.disabled = true;
        orangeStyle.disabled = false;
    }   else { 
        blueStyle.disabled = false;
        orangeStyle.disabled = true;
    }
});

button.addEventListener ('click', () => {
    if (blueStyle.disabled) {
        blueStyle.disabled = false;
        orangeStyle.disabled = true;
        localStorage.setItem('theme', 'blue');
    } else {
        blueStyle.disabled = true;
        orangeStyle.disabled = false;
        localStorage.setItem('theme', 'orange');
    } 
});