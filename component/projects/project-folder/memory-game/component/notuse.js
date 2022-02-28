import MemoryCard from "../helpers/Memory-Card.js";
import { ajax } from "../helpers/Ajax.js";
import api from "../helpers/api.js";

export async function game(){
     const d = document,
          table = d.createElement('div');
     
     table.setAttribute('id','table');

     const $table = d.querySelector('#table'),
          $topTable = d.querySelector('#table-top'),
          $main = d.querySelector('main'),
          $restartBtn = d.querySelector('.restart');

     

     const cards = [];


     for (let i = 1; i < 9; i++) { 
          await ajax({
               url: `${api.POKEMON}${i}`,
               success: (res)=>{
                    const poke = new MemoryCard(res.id, res.sprites.front_default, res.name);
                    const pokeTop = new MemoryCard(res.id, res.sprites.front_default, res.name);

                    cards.push(poke)
                    cards.push(pokeTop)             
               }
          });  
     }

     function randomize(array) {
          array.sort(() => Math.random() - 0.5);
     }

     randomize(cards);


     //imagenes
     cards.forEach(el =>{
          const $card = document.createElement("figure")
          $card.classList.add("memory-card")
          $card.innerHTML= `
               <img src="${el.img}" alt="?" class="card-${el.id}">
          `;
          $table.insertAdjacentElement("beforeend", $card);
     });
     //tapas
     setTimeout(()=>{
          cards.forEach(el =>{
          const $card = document.createElement("figure")
               $card.classList.add("memory-card-top")
               $card.setAttribute('data-top', `${el.id}`)
               $card.innerHTML= `
                    <img class="card-${el.id}">
               `;
               $topTable.insertAdjacentElement("beforeend", $card);
          });  
     }, 3000)


     let id, 
          idTop, 
          cc = 0,
          hp = 1,
          win = 1
     $topTable.addEventListener("click", e=>{
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
                         let selection = $topTable.querySelectorAll('.selected')
                         selection.forEach(fig => fig.classList.remove("selected"))
                    }, 200)
                    hp--;
               };

               setTimeout(()=>{
                    if(hp == 0){
                         $main.innerHTML = `
                         <p style="border-color: red;" class="end-msg">Peldite, Diaglo</p>
                         <button class="restart" onclick="location.reload()">Otra vez</button>
                         `;
                    } 
               }, 300);

               if(id == idTop){
                    let selection = $topTable.querySelectorAll('.selected')
                    selection.forEach(fig => fig.classList.add("blocked"))
                    win--
               };
               
               if(win == 0){
               $main.innerHTML = `
                    <p style="border-color: green;" class="end-msg">Ganate, toma awita tqm <3</p>
                    <button class="restart" onclick="location.reload()">Otra vez</button>
                    `; 
               };
               
               cc = 0;
               id = null;
               idTop = null;
          }
     });
     return table
}
