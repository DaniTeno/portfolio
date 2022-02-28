import { about } from "./about.js";
import { projects } from "./projects.js";


export function aboutArticle(){
     const d = document,
          aboutArt = d.createElement('article')

     aboutArt.classList.add('about-article')
     aboutArt.insertAdjacentHTML('beforeend', '<p id="me" class="about-title">ABOUT ME</p>');
     aboutArt.insertAdjacentElement('beforeend', about());
     aboutArt.insertAdjacentElement('beforeend', projects());

     return aboutArt
}