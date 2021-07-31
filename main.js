'use strict'

let counter = 0;
const button = document.querySelector(".js-button")
const textPar = document.querySelector('.js-hint');
const targetNumber = getRandomNumber(100)
const textCounter = document.querySelector('.js-counter');
const form = document.forms[0];


function handleClickButton(){
    counter = counter+1;
    textCounter.innerHTML = `Number of attemts: ${counter}`;
    let textInput = form.elements['form'].value;
    if (textInput >= 1 && textInput <= 100){
      if (textInput > targetNumber){
        textPar.innerHTML = 'Too large'
      }else if(textInput < targetNumber){
        textPar.innerHTML = 'Too small'
      }else{
        textPar.innerHTML = 'You won, my friend!!';
      }

    }else{
        textPar.innerHTML = 'The number should be between 1 and 100';
    }
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
} 

button.addEventListener( 'click' ,  handleClickButton);