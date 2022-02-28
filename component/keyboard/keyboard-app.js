export function keyboardApp(){
     const d = document,
          keyboardContainer = d.createElement('menu')

     keyboardContainer.classList.add('keyboard-container')

     keyboardContainer.innerHTML = `
          <nav class="keyb-lane lane-0">
               <div>º</div>
               <div>1</div>
               <div>2</div>
               <div>3</div>
               <div>4</div>
               <div>5</div>
               <div>6</div>
               <div>7</div>
               <div>8</div>
               <div>9</div>
               <div>0</div>
               <div>?</div>
               <div>!</div>
               <div id="bck-space">Bck-Space</div>
          </nav>
          <nav class="keyb-lane lane-1">
               <div>q</div>
               <div>w</div>
               <div>e</div>
               <div>r</div>
               <div>t</div>
               <div>y</div>
               <div>u</div>
               <div>i</div>
               <div>o</div>
               <div>[</div>
               <div id="first-enter">]</div>
               <div id="enter-key">Enter</div>
          </nav>
          <nav class="keyb-lane lane-2">
               <div>a</div>
               <div>s</div>
               <div>d</div>
               <div>f</div>
               <div>g</div>
               <div>h</div>
               <div>j</div>
               <div>k</div>
               <div>l</div>
               <div>ñ</div>
               <div>{</div>
               <div id="last-enter">}</div>
          </nav>
          <nav class="keyb-lane lane-3">
               <div>z</div>
               <div>x</div>
               <div>c</div>
               <div>v</div>
               <div>b</div>
               <div>n</div>
               <div>m</div>
               <div>,</div>
               <div>.</div>
               <div>-</div>
               <div id="shift-key">Shift</div>
          </nav>
          <nav class="keyb-lane lane-5">
               <div>Ctrl</div>
               <div>Alt</div>
               <div id="space-key">Space</div>
               <div>Alt</div>
               <div>Ctrl</div>
          </nav>
     `;
                    
     return keyboardContainer
}