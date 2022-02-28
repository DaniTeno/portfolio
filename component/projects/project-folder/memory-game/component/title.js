import { appMemoryGame } from "./app.js";

export function title(){
     const d = document,
          $title = d.createElement('span');
     
     $title.classList.add('memory-game-title')

     $title.innerHTML = `<img src="../../../../../assets/pokeapi_256.3fa72200.png">`;

     $title.addEventListener('click', e=>{
          appMemoryGame();
     })

     return $title
}