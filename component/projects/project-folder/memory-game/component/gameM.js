import { cardGenerator } from "../helpers/card-generator.js";
import { appMemoryGame } from "./app.js";
import { lose } from "./lose.js";
import { winScreen } from "./win.js";

export function gameM(){
     const d = document,
          table = d.createElement('div'),
          tableTop = d.createElement('div'),
          gameZone = d.querySelector('.game-zone'),
          gameLoader = d.createElement('div');

     gameLoader.classList.add('game-loader')
     gameLoader.innerHTML = `
          <img src="https://samherbert.net/svg-loaders/svg-loaders/grid.svg">
     `;
     
     table.setAttribute('id','table');
     tableTop.setAttribute('id', 'table-top');
     gameZone.insertAdjacentElement('beforeend', gameLoader)
     

     let options = JSON.parse(localStorage.getItem('game-option'));
     if(options.cards == '8'){
          table.style.gridTemplateColumns = 'repeat(4, 5rem)';
          table.style.gridTemplateRows = 'repeat(4, 5rem)';
          tableTop.style.gridTemplateColumns = 'repeat(4, 5rem)';
          tableTop.style.gridTemplateRows = 'repeat(4, 5rem)';
     }
     if(options.cards == '12'){
          table.style.gridTemplateColumns = 'repeat(6, 4.5rem)';
          table.style.gridTemplateRows = 'repeat(4, 4.5rem)';
          tableTop.style.gridTemplateColumns = 'repeat(6, 4.5rem)';
          tableTop.style.gridTemplateRows = 'repeat(4, 4.5rem)';
     }
     if(options.cards == '16'){
          table.style.gridTemplateColumns = 'repeat(8, 3.2rem)';
          table.style.gridTemplateRows = 'repeat(4, 3.2rem)';
          tableTop.style.gridTemplateColumns = 'repeat(8, 3.2rem)';
          tableTop.style.gridTemplateRows = 'repeat(4, 3.2rem)';
     }

     const cards = [];
     console.log(cards)

     cardGenerator(cards);

     setTimeout(() => {
          gameZone.removeChild(gameLoader)

          cards.forEach(el =>{
               const card = document.createElement("figure")
               card.classList.add("memory-card")
               card.innerHTML= `
                    <img src="${el.img}" alt="?" class="card-${el.id}">
               `;
               table.insertAdjacentElement("beforeend", card);
          });
          gameZone.insertAdjacentHTML('beforeend', '<a class="restart" id="back">Back</a>')
          
          setTimeout(()=>{
               cards.forEach(el =>{
               const card = document.createElement("figure")
          
               card.classList.add("memory-card-top")
               card.setAttribute('data-top', `${el.id}`)
               card.innerHTML= `
                    <img class="card-${el.id}">
               `;
               tableTop.insertAdjacentElement("beforeend", card);
               });  
          }, 3000);
     
          table.insertAdjacentElement('beforeend', tableTop);

          let id, 
               idTop, 
               cc = 0,
               hp = options.hp,
               win = options.cards
          tableTop.addEventListener("click", e=>{
               if(e.target.matches('.memory-card-top')){
                    if(!id){
                         id = parseInt(e.target.dataset.top)
                    }else{
                         idTop = parseInt(e.target.dataset.top)
                    }
                    e.target.classList.toggle('selected');
                    cc++;
               }
               
               if(cc == 2){
                    if(id!=idTop){
                         setTimeout(()=>{
                              let selection = tableTop.querySelectorAll('.selected')
                              selection.forEach(fig => fig.classList.remove("selected"))
                         }, 200)
                         hp--;
                    };
     
                    setTimeout(()=>{
                         if(hp == 0){
                              gameZone.innerHTML = '';
                              gameZone.insertAdjacentElement('beforeend', lose());
                         } 
                         if(win == 0){
                              gameZone.innerHTML = '';
                              gameZone.insertAdjacentElement('beforeend', winScreen());                        
                         };
                    }, 500);
                    
     
                    if(id == idTop){
                         let selection = tableTop.querySelectorAll('.selected')
                         selection.forEach(fig => fig.classList.add("blocked"))
                         win--
                    };
                    
                    cc = 0;
                    id = null;
                    idTop = null;
               }
          });
          console.log(cards)
     }, 2500); 
     
     d.addEventListener('click', e=>{
          if(e.target.matches('#back')) appMemoryGame();
     });

     return table
}