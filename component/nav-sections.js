export function navSections(){
     const d = document,
          sectionButtons = d.createElement('nav'),
          me = d.createElement('a'),
          prs = d.createElement('a'),
          msg = d.createElement('a'),
          cv = d.createElement('a')
          
     me.setAttribute('id', 'me')
     prs.setAttribute('id', 'prs')
     msg.setAttribute('id', 'snd-msg')
     

     me.setAttribute('href', '#me')
     prs.setAttribute('href', '#projects')
     msg.setAttribute('href', '#contact-pic')

     me.textContent = '</About me>';
     prs.textContent = '[Projects]';
     msg.textContent = 'Send message()';
     

     sectionButtons.classList.add('nav-buttons-container');
     
     sectionButtons.insertAdjacentElement('beforeend', me);
     sectionButtons.insertAdjacentElement('beforeend', msg);
     sectionButtons.insertAdjacentElement('beforeend', prs);

     return sectionButtons
}