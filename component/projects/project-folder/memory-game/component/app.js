import { HeaderBand } from "../../../../Header-Obj.js";
import { Options } from "./OPTIONS.js";
import { routerMemoryGame } from "./router.js";
import { title } from "./title.js";


export function appMemoryGame(){
     const d = document,
          body = d.querySelector('body'),
          gameScreen = d.createElement('section'),
          Header = new HeaderBand(),
          gameZone = d.createElement('article')
     
     body.innerHTML= null;
     
     gameScreen.classList.add('game-screen');
     gameZone.classList.add('game-zone');

     if(!localStorage.getItem('game-option')){
          const gameOptions = new Options ("3", "8");
          localStorage.setItem('game-option', JSON.stringify(gameOptions));
     }

     body.insertAdjacentElement('beforeend', Header.DOMinsert())      
     body.insertAdjacentElement('beforeend', gameScreen);
     gameScreen.insertAdjacentElement('beforeend', title());
     gameScreen.insertAdjacentElement('beforeend', gameZone);

     routerMemoryGame();
}