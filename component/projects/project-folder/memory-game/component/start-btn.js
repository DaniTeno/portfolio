export function start(){
     const d = document,
          $startBtn = d.createElement('a');

     $startBtn.setAttribute('id', 'game-start')
     $startBtn.innerHTML = `Play`;
     
     return $startBtn
}