export function option(){
     const d = document,
          $optionBtn = d.createElement('a');
          
     $optionBtn.setAttribute('id', 'game-options')
     $optionBtn.innerHTML = `Options`;
     
     return $optionBtn;
}