import { eyeLogic } from "./eye-logic.js";

export class Eye{
     constructor(size, id){
          this.eyeWidth = size;
          this.eyeHeigth = size/1.1;
          this.id = id;
     }

     insertHTML(){
          const d = document,
               eye = d.createElement('div')
               eye.classList.add('eye-container')

          eye.innerHTML = `
               <div class="eye-sight" id="eye-${this.id}">
                    <span class="eyelash"></span>
                    <nav class="eye-move-area">
                         <div class="eye-ball">
                         </div>
                    </nav>
                    <span class="eyelash bottom"></span>
               </div>
          `;

          eye.style.width = `${this.eyeWidth}px`;
          eye.style.height = `${this.eyeHeigth}px`;

          return eye
     }
}