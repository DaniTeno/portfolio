import { cartaPauLogic } from "./carta-pau-logic.js";

export function cartaPau(){
     const d = document,
          $accessForm = d.createElement('form');

     $accessForm.setAttribute('id', 'pau-access-form')
     $accessForm.innerHTML= `
     <input type="text" name="password" placeholder="Eres mi..." autocomplete="off">
     <input type="submit" name="submit" value="Entrar">
     `;
     $accessForm.addEventListener('submit', e=>{
          e.preventDefault()
          cartaPauLogic(e.target.password.value);
          e.target.password.value = "";
     })

     return $accessForm
}