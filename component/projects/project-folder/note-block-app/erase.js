import { displaySaved } from "./display-saved.js"

export function erase(id){
     const d = document,
          localSave = JSON.parse(localStorage.getItem('saved-notes'))

     localSave.splice(id, 1);

     for (let i = 0; i < localSave.length; i++) {
          localSave[i].id = i
     }
     localStorage.setItem('saved-notes', JSON.stringify(localSave));
     d.querySelector('.notes-container').innerHTML = null;
     displaySaved(localSave);
}