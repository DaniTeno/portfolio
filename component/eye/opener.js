export function opener(){
     const d = document,
          gate = d.createElement('div'),
          doorL = d.createElement('div'),
          doorR = d.createElement('div'),
          openBtn = d.createElement('div')

     openBtn.classList.add('btn-eye-sight')
     doorL.classList.add('top-door')
     doorR.classList.add('bottom-door')
     gate.classList.add('gate')
     gate.insertAdjacentElement('beforeend', doorL)
     gate.insertAdjacentElement('beforeend', doorR)

     openBtn.innerHTML = ` 
                    <nav class="btn-eye">
                         <div class="btn-eye-ball">
                         </div>
                    </nav>       
     `;

     doorR.innerHTML = `
          <div class="arrow-ini-r arrow-right">
               <img class="r" src="../../assets/arrow3.png"/>
          </div>
     `;

     doorL.innerHTML = `
          <div class="arrow-ini-l arrow-left">
               <img class="l" src="../../assets/arrow3.png"/>
          </div>
     `;

     gate.insertAdjacentElement('beforeend', openBtn)

     return gate
}