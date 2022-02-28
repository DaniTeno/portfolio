import { HeaderBand } from "./component/Header-Obj.js";
import { mainSection } from "./component/main-section.js";
import { pageLogics } from "./page-logics.js";

export function app(){
     const d = document,
          main = d.querySelector('main'),
          Header = new HeaderBand()

     main.insertAdjacentElement('beforeend', Header.DOMinsert());

     main.insertAdjacentElement('beforeend', mainSection());

     pageLogics();
}