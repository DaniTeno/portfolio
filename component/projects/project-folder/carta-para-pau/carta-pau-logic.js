export function cartaPauLogic(password){
     const $screen = document.querySelector('.project-on-display')
     let passInput = password.toLowerCase();

     if(passInput.includes('bebe') || passInput.includes('ñiña')|| passInput.includes('princesa')|| passInput.includes('princesita')|| passInput.includes('niña')|| passInput.includes('piciosa')|| passInput.includes('amur')){
          $screen.innerHTML= `
               <div id="escrito-de-la-carta">
                    <p>Hola, amur, feliz día del amor para nosotros 2, aunque me gustaría haberla pasado hoy contigo no se ha podido dar :(.</p>  
                    <p>Quiero que sepas que te amo muchísimo y que siempre pienso en ti, eres mi motivación y gracias a ti he avanzado mucho como persona. Y que gran parte de mis ganas de avanzar es para poder hacerte feliz y desmostrarte lo mucho que significas para mí.</p>
                    <p>He llegado a sentir varias veces que no podía con las circunstacias pero el hecho de saber que siempre me estás apoyando me hace seguir dando un poco más de mí y gracias a eso siento que estoy llegando cada vez más lejos, y como ya sabes la mi programación me ha frustrado bastante en este corto tiempo que me he dedicado a aprender, pero aún así sigo adelante en gran parte gracias a ti.</p>
                    <p>Se que hasta ahora no he logrado mucho y que todavía me falta mucho trayecto por delante pero ten por seguro que siempre pensaré en ti estés donde estés y siempre te voy a llevar en mi corazón. Te amo muchísimo, y te prometo que pronto todo mejorará, solo debemos seguir avanzando :3.</p>
                    <p id="firma">-Con muchísimo amor, Daniel <3</p>
               </div>
          `;

     }
}