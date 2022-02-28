import { HeaderBand } from "../../../Header-Obj.js";
import { displaySaved } from "./display-saved.js";
import { noteApp } from "./note-app.js"

document.addEventListener('DOMContentLoaded', e=>{
     if(!localStorage.getItem('saved-notes')) localStorage.setItem('saved-notes', JSON.stringify([]))
     const Header = new HeaderBand()
     document.querySelector('body').insertAdjacentElement('afterbegin', Header.DOMinsert())
     
     noteApp();
     displaySaved(JSON.parse(localStorage.getItem('saved-notes')));
})