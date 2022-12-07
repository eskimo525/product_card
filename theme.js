const zmien = document.getElementById('toggleSun');
const card = document.getElementById('zmianaKoloru');
const overprice = document.getElementById('jeb');
const button = document.getElementById('button1')

const h4 = document.querySelector('h4'); 
const p = document.querySelector('p'); 
const body = document.querySelector('body'); 

var moon = 'icon-moon';
var sun = 'icon-sun'; 
zmien.addEventListener('click', function(){
    if(this.classList == moon)
    {
        zmien.classList.replace(moon, sun);
    }
    else
    {
        zmien.classList.replace(sun, moon);
    }
    
    if(this.classList.contains(sun)){
        body.style.background = '#303841';
        body.style.color = "white"
        card.style.backgroundColor = '#3A4750';
        overprice.style.color = 'rgb(238, 238, 238)';
        h4.style.color = 'rgb(238, 238, 238)';
        p.style.color = 'rgb(238, 238, 238)';
        button.style.background = '#00ADB5';
        body.style.transition = '1s';
    }
    else
    {
        body.style.background = 'hsl(30, 38%, 92%)';
        body.style.color = 'black';
        card.style.backgroundColor = 'hsl(0, 0%, 100%)';
        overprice.style.color = 'hsl(228, 12%, 48%)';
        h4.style.color = 'hsl(228, 12%, 48%)';
        p.style.color = 'hsl(228, 12%, 48%)';
        button.style.background = 'hsl(158, 36%, 37%)';
        body.style.transition = '1s';
    } 
}) 
