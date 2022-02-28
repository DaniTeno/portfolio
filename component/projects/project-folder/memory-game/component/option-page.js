import { appMemoryGame } from "./app.js";
import { Options } from "./OPTIONS.js";

export function optionsPage(){
     const d = document,
          $options = d.createElement('form'),
          error = d.createElement('span')

     $options.classList.add('option-form')


     function showErrorMsg(){ 
          error.style.visibility ='visible';
          setTimeout(()=>{
               error.style.visibility ='hidden';
          }, 3000)
     }

     if(!localStorage.getItem('game-option')){
          const gameOptions = new Options ("3", "8")

          localStorage.setItem('game-option', JSON.stringify(gameOptions))
     }

     let options = JSON.parse(localStorage.getItem('game-option'));
     $options.innerHTML = `
          <a class="a1"><p>Attempts</p> <input type="number" name="hp" value=${options.hp}></a>
          <a class="a1">  
               <p>Cards</p>
                    <select name="cards">
                         <option>8</option>
                         <option>12</option>
                         <option>16</option>
                    </select>        
          </a>
          <a id="save">Save</a>
          <a id="cancel">Cancel</a>
     `;
     
     $options.insertAdjacentElement('afterbegin',error)
     error.innerHTML = 'You need at least 1 attempt to play';
     error.classList.add('option-error');

     $options.addEventListener('click', e=>{
          if(e.target.matches('#save')){
               if($options.hp.value < 1) return showErrorMsg()
               const gameOptions = new Options ($options.hp.value, $options.cards.value)

               localStorage.setItem('game-option', JSON.stringify(gameOptions));
               appMemoryGame();
          }
          if(e.target.matches('#cancel')) appMemoryGame();
     })
     
     return $options
}