import { option } from "./option-btn.js";
import { start } from "./start-btn.js";

export function menu(){
     const menu = document.createElement('div');
     menu.classList.add('game')

     setTimeout(()=>{
          menu.appendChild(start());
     }, 100);
     setTimeout(()=>{
          menu.appendChild(option());
     }, 300);
     
     return menu
}