export function backBtn(){
     const $backBtn = document.createElement('a');
     $backBtn.innerHTML = `Atras`;
     $backBtn.classList.add('back');
     $backBtn.setAttribute('href', '#/');
     
     return $backBtn
}