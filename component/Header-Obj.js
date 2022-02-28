export class HeaderBand {
     constructor(miscLTitle, title, miscRTitle, titleClass, headerClass)
     {
          this.title = 'Daniel = Tenorio',
          this.miscLTitle = '{',
          this.miscRTitle = '}',
          this.titleClass = 'header-title',
          this.headerClass = 'locker'
     }

     DOMinsert(){
          const headerBand = document.createElement('header'),
               head = document.querySelector('head')
               
          headerBand.classList.add('locker')

          headerBand.innerHTML = `
               <div class="${this.titleClass}">
               <p>${this.miscLTitle}</p><a href="http://daniteno.000webhostapp.com/"><h1>${this.title}</h1></a><p>${this.miscRTitle}</p>
               </div>
          `;
          
          return headerBand
     }

}