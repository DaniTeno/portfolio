import { ProjectCard } from "./Project-Card-Obj.js";

export function projectsMenu(){
     const d = document,
          projectsMenu = d.createElement('section')

     projectsMenu.classList.add('projects-menu')

     const projectsArray = [];

     function insertCardDOM(projectCard){
          const card = d.createElement('div')

          card.setAttribute('id', projectCard.id);
          card.classList.add('project-card');
          card.classList.add('scroll');

          card.innerHTML = `
               <div class="card-img"><img src="${projectCard.img}"></div>
               <p class="card-title">${projectCard.title}</p>
               <p class="card-desc">${projectCard.description}</p>
               <menu class="card-links">
               <a href="${projectCard.url}">Test</a>
               <a href="">Git</a>
               </menu>
          `;

          return card
     }

     projectsMenu.innerHTML = `
          <p class="projects-title">PROJECTS</p>
     `;


     const MemoryGame = new ProjectCard(
          'memory-game', 
          'Memory Game', 
          'a memory game made using the API REST from the site pokeapi.co',
          '../../assets/pokeapi_256.3fa72200.png',
          'component/projects/project-folder/memory-game/game.html'
     );
     projectsArray.push(MemoryGame);

     const NoteApp = new ProjectCard(
          'block-app',
          'Block App',
          'a simple note-block app using the local storage to save the notes',
          '../../assets/block-note-png-6-Transparent-Images.png',
          'component/projects/project-folder/note-block-app/note-app.html'
     )
     projectsArray.push(NoteApp);

     for (let i = 0; i < projectsArray.length; i++) {
          projectsMenu.insertAdjacentElement('beforeend', insertCardDOM(projectsArray[i]))
     }

     return projectsMenu
}