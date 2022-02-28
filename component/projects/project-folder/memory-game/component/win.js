export function winScreen(){
     const d = document,
          $winDiv = d.createElement('div');  
     $winDiv.classList.add('end-msg')
     $winDiv.innerHTML = `
          <p style="border-color: red;" class="end-msg">You win, congratulations</p>
          <a class="restart" id="again">Try again</a>
          <a class="restart" id="back">< Back</a>
     `;
     $winDiv.addEventListener('click', e=>{
          if(e.target.matches('#again')){
               d.querySelector('.game-screen').innerHTML = null;
               d.querySelector('.game-screen').insertAdjacentElement('beforeend',gameM());
          } 
          if(e.target.matches('#back')) appMemoryGame();
     })

     return $winDiv;
}
