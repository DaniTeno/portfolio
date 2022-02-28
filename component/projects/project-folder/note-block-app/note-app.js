import { edit } from "./edit.js"
import { erase } from "./erase.js"
import { fullReset } from "./full-reset.js"
import { Note } from "./Note-Obj.js"
import { noteTemplate } from "./template.js"

export function noteApp(){
     const d = document,
          notesContainer = d.querySelector('.notes-container'),
          newNoteBtn = d.getElementById('new-note'),
          contentInput = d.querySelector('.new-content')

     function createNote(content){
          const fullDate = new Date(),
               day = fullDate.getDate(),
               month = fullDate.getMonth(),
               year = fullDate.getFullYear(),
               currentDate = `${day}/${month+1}/${year}`,
               bg = `bg-${Math.floor(Math.random()*4+1)}`,
               localSave = JSON.parse(localStorage.getItem('saved-notes')),
               ANote = new Note(localSave.length, content, currentDate, bg)
          
          localSave.push(ANote);

          localStorage.setItem('saved-notes', JSON.stringify(localSave));
          return  noteTemplate(ANote.id, ANote.content, ANote.date, bg);
     }

     d.addEventListener('click', e=>{
          if(e.target == newNoteBtn){
               if(!contentInput.value)return
               notesContainer.insertAdjacentElement('afterbegin',createNote(contentInput.value)) 
               contentInput.value = null;
          } 
          if(e.target.matches('#full-reset')) fullReset();
          if(e.target.matches('.erase-note')) erase(e.target.parentNode.parentNode.id)
          if(e.target.matches('.save-note')) edit(e.target.parentNode.parentNode.id)
     })
     contentInput.addEventListener('keyup', e=>{
          if(e.key == 'Enter' && e.shiftKey){
               if(!contentInput.value ||contentInput.value == '') return
               notesContainer.insertAdjacentElement('afterbegin',createNote(contentInput.value)) 
               contentInput.value = null;
          }
     })
}