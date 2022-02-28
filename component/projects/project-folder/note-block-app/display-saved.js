import { noteTemplate } from "./template.js";

export function displaySaved(localNotes){
     const notesContainer = document.querySelector('.notes-container');

     localNotes.forEach(note => {
          notesContainer.insertAdjacentElement('afterbegin', noteTemplate(note.id, note.content, note.date, note.bg))
     });
}