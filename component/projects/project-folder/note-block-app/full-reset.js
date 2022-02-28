import { displaySaved } from "./display-saved.js";

export function fullReset(){
     if(confirm('This will delete all saved notes forever') == true){
          localStorage.setItem('saved-notes', JSON.stringify([])) 
          document.querySelector('.notes-container').innerHTML = null;
     } 
}