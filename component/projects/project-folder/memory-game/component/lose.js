import { appMemoryGame } from "./app.js";
import { gameM } from "./gameM.js";

export function lose(){
     const d = document,
          $loseDiv = d.createElement('div');
     $loseDiv.classList.add('end-msg')
     $loseDiv.innerHTML = `
          <p style="border-color: red;" class="end-msg">Out of moves, sorry :(</p>
          <a class="restart" id="again">Try again</a>
          <a class="restart" id="back">< Back</a>
     `;
     $loseDiv.addEventListener('click', e=>{
          if(e.target.matches('#again')){
               d.querySelector('.game-screen').innerHTML = null;
               d.querySelector('.game-screen').insertAdjacentElement('beforeend',gameM());
          } 
          if(e.target.matches('#back')) appMemoryGame();
     })

     return $loseDiv
}