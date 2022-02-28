import { ajax } from "./Ajax.js";
import api from "./api.js";
import MemoryCard from "../helpers/Memory-Card.js";


export async function cardGenerator(arr){
     const options = JSON.parse(localStorage.getItem('game-option'));
     let cards = parseInt(options.cards)
     for (let i = 1; i < cards+1; i++) { 
          await ajax({
               url: `${api.POKEMON}${i}`,
               success: (res)=>{
                    const poke = new MemoryCard(res.id, res.sprites.front_default, res.name);
                    const pokeTop = new MemoryCard(res.id, res.sprites.front_default, res.name);

                    arr.push(poke)
                    arr.push(pokeTop)             
               }
          });  
     }
     
     function randomize(array) {
          array.sort(() => Math.random() - 0.5);
     }

     return randomize(arr);
}