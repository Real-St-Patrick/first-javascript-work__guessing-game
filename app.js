let input = document.forms["input"];
let field = document.querySelector(".number");
let button = document.querySelector(".submit__btn");
let guesses = document.querySelector(".guess-values");
let error = document.querySelector('.error')
let counter = 0;
let restart = document.querySelector(".restart__btn");
let popUp = document.querySelector(".pop-up");
let gameOver = document.querySelector(".pop-up__button");
let win = document.querySelector(".win__pop-up");
let youWon = document.querySelector(".win-pop-up__button");

//input a number//


input.addEventListener("submit", e => {
    e.preventDefault();
    let random = Math.floor(Math.random() * 101);
    counter++
    guesses.innerHTML += field.value + ' ';

    counter == 7 ? resetGame() :null
  
      if(field.value === ''){
        validateInput("Please  Feel in the Field");
        
    }else if(field.value < random){
        limit( "your guess is too  low")
        
    }
    else if(field.value > random){       
        limit("your guess is too high")

    }
    else if(field.value == random){
        RandomIsEqualToField()
    }
})

// restarting the game//
restart.addEventListener("click", e =>{
    resetGame()
})

//gameover pop-up//
gameOver.addEventListener("click", e =>{
    popUp.style.display = "none";
})
//you won pop-up//
youWon.addEventListener("click", e =>{
    win.style.display = "none";
})


const resetGame = ()=>{
    let p = document.querySelector('#emypt_value')
    error.innerHTML = "";
    guesses.innerHTML = "";
    input.reset();
    counter = 0;
    p.innerHTML = "";
    popUp.style.display = "block";

}

const limit =  (test)=>{
    let p = document.querySelector('#emypt_value')
    error.innerHTML = test;;
    error.style.color = "red";
    p.innerHTML = ''
}

const validateInput = (test)=>{
    let p = document.querySelector('#emypt_value')
     p.innerHTML =  test;
}

const RandomIsEqualToField = ()=>{
    win.style.display = "block";
    popUp.style.display = "none";
    input.reset();
    guesses.innerHTML = "";
    random = Math.floor(Math.random() * 101)
    limit('you got it right!!!')
}