import { aboutArticle } from "./about-article.js";
import { miscEye } from "./eye/misc-eye.js";
import { navSections } from "./nav-sections.js";


export function mainSection(){
     const d = document,
          mainContent = d.createElement('section')

     mainContent.classList.add('main-content');

     mainContent.insertAdjacentElement('beforeend', miscEye());
     mainContent.insertAdjacentElement('beforeend', navSections());
     mainContent.insertAdjacentElement('beforeend', aboutArticle());
     
     return mainContent
}