export function aboutLogic(){
     const d = document,
          nav = d.getElementById('nav-contact'),
          basicInfo = d.getElementById('basic-info'),
          contactForm = d.getElementById('contact-form'),
          slideOne = d.getElementById('p1'),
          slideTwo = d.getElementById('p2')
     
     let ini;

     nav.addEventListener('touchstart', e => ini = e.touches[0].clientX)
     
     function slideIn(){
          contactForm.classList.remove('no-display')
          basicInfo.classList.add('no-display')
          slideOne.classList.remove('current-slide')
          slideTwo.classList.add('current-slide')
     }
     function slideOut(){
          basicInfo.classList.remove('no-display')
          contactForm.classList.add('no-display')
          slideOne.classList.add('current-slide')
          slideTwo.classList.remove('current-slide')
     }

     nav.addEventListener('touchmove', e=>{
          let slideRight = ini-70,
               slideLeft = ini+70;
          if(e.touches[0].clientX <= slideRight){
               slideIn();
          } 
          if(e.touches[0].clientX >= slideLeft){
               slideOut();
          }
     });

     d.addEventListener('click', e=>{
          if(e.target == slideTwo || e.target.matches('#snd-msg')) slideIn();
          if(e.target == slideOne || e.target.matches('#me')) slideOut();
          if(e.target.matches('#send-msg *') || e.target.matches('#snd-msg')) slideIn();
     });
     
}