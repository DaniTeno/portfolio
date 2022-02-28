import { displaySaved } from "./display-saved.js";
import { Note } from "./Note-Obj.js";


export function edit(id){
     const d = document,fullDate = new Date(),
          day = fullDate.getDate(),
          month = fullDate.getMonth(),
          year = fullDate.getFullYear(),
          currentDate = `${day}/${month+1}/${year}`,
          localSave = JSON.parse(localStorage.getItem('saved-notes')),
          thisNote = d.getElementById(`${id}`),
          newContent = thisNote.querySelector('.note-content').value,
          bg = `bg-${Math.floor(Math.random()*4+1)}`,
          editNote = new Note(id, newContent, currentDate, bg)

     localSave.splice(id, 1, editNote);

     localStorage.setItem('saved-notes', JSON.stringify(localSave));
     d.querySelector('.notes-container').innerHTML = null;
     displaySaved(localSave);
}
