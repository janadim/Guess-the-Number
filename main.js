'use strict'

let counter = 0;
const button = document.querySelector(".js-button")
const textPar = document.querySelector('.js-hint');
const targetNumber = getRandomNumber(100)
const textCounter = document.querySelector('.js-counter');
const form = document.forms[0];


function handleClickButton(){
    counter = counter+1;
    textCounter.innerHTML = `Número de intentos: ${counter}`;
    let textInput = form.elements['form'].value;
    if (textInput >= 1 && textInput <= 100){
      if (textInput > targetNumber){
        textPar.innerHTML = 'Demasiado alto'
      }else if(textInput < targetNumber){
        textPar.innerHTML = 'Demasiado bajo'
      }else{
        textPar.innerHTML = 'Has ganado, campeona';
      }

    }else{
        textPar.innerHTML = 'El numero debe estar entre 1 y 100';
    }
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
} 

button.addEventListener( 'click' ,  handleClickButton);