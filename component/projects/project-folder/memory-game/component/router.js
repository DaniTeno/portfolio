import { backBtn } from "./backBtn.js";
import { gameM } from "./gameM.js";
import { menu } from "./menu.js";
import { optionsPage } from "./option-page.js";
import { title } from "./title.js";

export function routerMemoryGame(){
     const d = document,
          gameZone = d.querySelector('.game-zone')

     gameZone.insertAdjacentElement('beforeend', menu());

     gameZone.addEventListener('click', e=>{
          
          if(e.target.matches('#game-options')){
               gameZone.innerHTML= null;
               gameZone.insertAdjacentElement('beforeend',optionsPage())
          } 
          if(e.target.matches('#game-start')){
               gameZone.innerHTML= null;
               gameZone.insertAdjacentElement('beforeend',gameM())
          }
     })
}