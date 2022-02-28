import { cartaPau } from "./project-folder/carta-para-pau/carta-pau.js";
import { appMemoryGame } from "./project-folder/memory-game/component/app.js";

export function projectsLogic(){
     const d = document,
          $projectsMain = d.querySelector('.main-projects'),
          $projectsSection = $projectsMain.querySelector('.projects-section'),
          $projectsTitle = d.createElement('span'),
          $projectsDisplay = d.createElement('div'),
          $projectsMenu = d.createElement('aside'),
          $projectOnDisplay = d.createElement('article')
          
         
     if(localStorage.getItem('lang').includes('es')) $projectsTitle.textContent= 'Proyectos'
     else $projectsTitle.textContent = 'Projects';
     $projectsSection.insertAdjacentElement('beforeend', $projectsTitle)
     $projectsTitle.classList.add('projects-title')


     $projectsDisplay.classList.add('projects-display')
     $projectsSection.insertAdjacentElement('beforeend', $projectsDisplay)
     
     $projectsMenu.classList.add('projects-menu')
     $projectsDisplay.insertAdjacentElement('beforeend', $projectsMenu)
     
     $projectOnDisplay.classList.add('project-on-display')
     $projectsDisplay.insertAdjacentElement('beforeend', $projectOnDisplay)

     
     $projectsMenu.addEventListener('click', e=>{
          $projectOnDisplay.innerHTML = null;
          if(e.target.matches('#carta-pau p')) $projectOnDisplay.appendChild(cartaPau());
          if(e.target.matches('#memory-game p')) appMemoryGame()
     })
}