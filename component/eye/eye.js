import { Eye } from "./Eye-Obj.js";

export function eye(){
     const d = document,
          semicircleDivTop = d.createElement('div'),
          semicircleDivBottom = d.createElement('div'),
          bigEye = d.createElement('div'),
          mainSection = d.querySelector('.main-content'),
          line1 = d.createElement('nav'),
          line2 = d.createElement('nav'),
          line3 = d.createElement('nav'),
          line4 = d.createElement('nav'),
          line5 = d.createElement('nav')

     line3.classList.add('nav-center')
     semicircleDivTop.classList.add('semicircle')
     semicircleDivBottom.classList.add('semicircle')
     bigEye.classList.add('big-eye')

     
     for (let i = 0; i < 4; i++) {
          const Ojo = new Eye(37, `${i+1}`)

          if(i < 1){
               line1.insertAdjacentElement('beforeend', Ojo.insertHTML());
               semicircleDivTop.insertAdjacentElement('beforeend', line1);
          } 
          if(i < 2){
               line2.insertAdjacentElement('beforeend', Ojo.insertHTML());
               semicircleDivTop.insertAdjacentElement('beforeend', line2);
          } 
          if(i < 3){
               line3.insertAdjacentElement('beforeend', Ojo.insertHTML());
               semicircleDivTop.insertAdjacentElement('beforeend', line3);              
          } 
          if(i < 2){
               line4.insertAdjacentElement('beforeend', Ojo.insertHTML());
               semicircleDivBottom.insertAdjacentElement('afterbegin', line4);              
          } 
          if(i < 1){
               line5.insertAdjacentElement('beforeend', Ojo.insertHTML());
               semicircleDivBottom.insertAdjacentElement('afterbegin', line5);
          } 
     } 

     bigEye.insertAdjacentHTML('beforeend', '<img src="../../assets/moon.png" id="moon">')
     bigEye.insertAdjacentElement('beforeend',semicircleDivTop)
     bigEye.insertAdjacentElement('beforeend',semicircleDivBottom)


     return bigEye;

}