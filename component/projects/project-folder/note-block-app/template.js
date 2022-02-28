export function noteTemplate(id, content, date, bg){
     const DOMnote = document.createElement('div')

     DOMnote.classList.add('note')
     DOMnote.setAttribute('id', id)

     DOMnote.innerHTML = `
          <textarea class="note-content ${bg}">${content}</textarea>
          <aside>
               <div class="note-date">${date}</div>
               <div class="save-note">Save</div>
               <div class="erase-note">X</div>
          </aside>
     `;
     return DOMnote
} 