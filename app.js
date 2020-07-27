let input = document.forms["input"];
let field = document.querySelector(".number");
let button = document.querySelector(".submit__btn");
let guesses = document.querySelector(".guess-values");
let error = document.querySelector('.error')
let random = Math.floor(Math.random() * 101);
let counter = 0;
let restart = document.querySelector(".restart__btn");
let popUp = document.querySelector(".pop-up");
let gameOver = document.querySelector(".pop-up__button");
let win = document.querySelector(".win__pop-up");
let youWon = document.querySelector(".win-pop-up__button");

//input a number//
input.addEventListener("submit", e => {
    e.preventDefault();
    counter++
    guesses.innerHTML += field.value + ' ';

    if(field.value > random){
        error.innerHTML = "your guess is too high"
        error.style.color = "red";
    }
    else if(field.value < random){
        error.innerHTML = "your guess is too  low"
        error.style.color = "red";
    }
    else if(field.value == random){
        error.innerHTML ="you got it right!!!" 
        win.style.display = "block";
        popUp.style.display = "none";
    }
   
    if(counter == 7){
        error.innerHTML = "";
        guesses.innerHTML = "";
        input.reset();
        counter = 0
        popUp.style.display = "block";
     }

})
// restarting the game//
restart.addEventListener("click", e =>{
    error.innerHTML = "";
    guesses.innerHTML = "";
    input.reset();
})

//gameover pop-up//
gameOver.addEventListener("click", e =>{
    popUp.style.display = "none";
})
//you won pop-up//
youWon.addEventListener("click", e =>{
    win.style.display = "none";
})



