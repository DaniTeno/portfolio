import { aboutLogic } from "./component/about-logic.js";
import { eyeLogic } from "./component/eye/eye-logic.js";
import { formLogic } from "./component/form-logic.js";
import { scrollSpy } from "./component/scroll-spy.js";

export function pageLogics(){
     const d = document,
          spaceBg = d.getElementById('space-bg'),
          gateBtn = d.querySelector('.btn-eye-ball'),
          gateEye = d.querySelector('.btn-eye-sight'),
          gateTopDoor = d.querySelector('.top-door'),
          gateBottomDoor = d.querySelector('.bottom-door'),
          bigEye = d.querySelector('.big-eye'),
          arrowR = d.querySelector('.arrow-ini-r'),
          arrowL = d.querySelector('.arrow-ini-l')

     formLogic()
     eyeLogic();
     aboutLogic();
     scrollSpy();

     d.addEventListener('click', e=>{
          if(e.target == gateBtn){
               gateEye.style.opacity = '0';
               gateTopDoor.style.borderColor = '#ecf59c';
               gateBottomDoor.style.borderColor = '#ecf59c';   
               gateTopDoor.style.left = '-25vw';
               gateBottomDoor.style.right = '-25vw';
               arrowL.classList.remove('arrow-left')
               arrowR.classList.remove('arrow-right')
               setTimeout(()=>{
                    bigEye.style.zIndex = '50'
                    setTimeout(()=>{
                         gateTopDoor.style.borderColor = 'transparent';
                         gateBottomDoor.style.borderColor = 'transparent';
                    },500)
               }, 500)
          }
     });


     if(innerWidth > 420){
          d.addEventListener('mousemove',e =>{
               const cursorX = (innerWidth-e.clientX)/innerWidth*100,
               cursorY = (innerHeight-e.clientY)/innerHeight*100
                    
               spaceBg.style.left= `calc(-10% + ${cursorX/50}%)`;
               spaceBg.style.top= `calc(-10% + ${cursorY/20}%)`;
          });
     }

}