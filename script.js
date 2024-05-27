let input = document.getElementById('numberEnter')
let btn =document.getElementById('btn')
let wrng = document.getElementById('wrng')
let guesses =document.getElementById('guesses')

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numguesses = 0
btn.addEventListener("click",() => {
    guessesNumb();
})
input.addEventListener("keydown",(event) =>{
    if(event.key =="Entre"){
        event.preventDefault();
        guessesNumb();
    }
})
function guessesNumb(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrng.innerHTML ="Entre Number between 1 to 100"

    }else{
        numguesses++
        guesses.innerHTML="no of guesses : "+numguesses;
        if(input.value > answer){
            wrng.innerHTML="You guess too high"
            input.value=""
        }
        else if(input.value < answer){
            wrng.innerHTML="you guess too low"
            input.value=""
        }
        else{
            wrng.innerHTML="congratulation! You Guess Correct Answer"
            setTimeout(()=>{
                resetGame();
            },5000)
        }
    }
}
function resetGame(){
    answer = Math.floor(Math.random()*100)+1;
    input.value=""
    guesses.innerHTML="no of guesses : 0"

}