import { eye } from "./eye.js";
import { opener } from "./opener.js";


export function miscEye(){
     const d = document,
          eyeSection = d.createElement('div')

     eyeSection.classList.add('eye-section');

     eyeSection.insertAdjacentHTML('beforeend', '<div id="space-bg-container"><img src="./assets/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg" alt="space-bg" id="space-bg"></div>')
     eyeSection.insertAdjacentElement('beforeend', opener());
     eyeSection.insertAdjacentElement('beforeend', eye());


     return eyeSection
}