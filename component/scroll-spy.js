export function scrollSpy(){
     const sections = document.querySelectorAll('.scroll')
     
     const cb = (entries) =>{
          entries.forEach(entry => {
               
               if(entry.isIntersecting){
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translate(0px, 0px)';
               }
               else {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translate(-50px, 0px)';
               }
          });

     }
     
     const observer = new IntersectionObserver(cb, {
          threshold: 0.25
     });
     
     
     sections.forEach(entry => observer.observe(entry));    
     // console.log(sections)
}