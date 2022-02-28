import { projectsMenu } from "./projects/projects-menu.js";

export function projects(){
     const d = document,
          projectsSection = d.createElement('div')

     projectsSection.classList.add('projects');
     projectsSection.setAttribute('id', 'projects')

     projectsSection.insertAdjacentElement('beforeend', projectsMenu());

     return projectsSection
}