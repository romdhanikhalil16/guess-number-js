'use strict';

let number = Math.floor(Math.random() *10);
let btnCheck = document.querySelector('.btn-check');
let score = 20;
let highscore=0;

btnCheck.addEventListener('click',function(){
    let guesses = Number(document.querySelector('.number').value); 
    
    if(score < 1 ){
        document.body.style.backgroundColor = '#b30000';
        document.querySelector('.p').textContent ='You Loose try again';
        
    }else if(guesses === number){
        document.body.style.backgroundColor='#ff3300'
        document.querySelector('.start-guessing').textContent ='You win !!';
        document.querySelector('.p').textContent ='congratulations you win !!';
        document.querySelector('.p').style.color = 'orange';
        document.querySelector('.real-number').value=guesses;
        if(score > highscore){
            highscore = score
        }
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = highscore;

    }else if(guesses > number){
        document.querySelector('.start-guessing').textContent =  ' too hight';
        score --;
        document.querySelector('.score').textContent = score;
       
    }else {
        document.querySelector('.start-guessing').textContent ='too low';
        score --;
        document.querySelector('.score').textContent = score;
        
        
    }
})

const btnAgain = document.querySelector('.btn-again');
btnAgain.addEventListener('click',function(){
    number = Math.floor(Math.random() *21)+1 ;
    document.querySelector('.real-number').value='?';
    document.body.style.backgroundColor ="black";
    document.querySelector('.start-guessing').textContent ='start guessing :';
    document.querySelector('.p').textContent ='guess my number';
    document.querySelector('.p').style.color='white'
    document.querySelector('.highscore').textContent = highscore;

})


