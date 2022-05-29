// Darktheme
const toggle = document.querySelector('#toggle');
const body = document.querySelector('body');
const number = document.querySelectorAll('.number')

toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    
}


//Digital
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');



const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
};
   
const setClock = () => {

       const currentDate = new Date();
       
       const secondsPercentage = currentDate.getSeconds() / 60;
       const minutesPercentage = (secondsPercentage + currentDate.getMinutes())/ 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(seconds, secondsPercentage);
    setRotation(minutes, minutesPercentage);
    setRotation(hours, hoursPercentage);
    
};
   
   setClock();
   
   setInterval(setClock, 1000);


