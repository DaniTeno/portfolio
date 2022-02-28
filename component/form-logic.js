export function formLogic(){
     const d = document,
          form = d.querySelector('form'),
          modalLoading = d.querySelector('.loading-modal')
     
     d.addEventListener("submit", e=>{
          e.preventDefault();

          modalLoading.classList.remove("hidden");
          modalLoading.innerHTML = '<img src="../assets/oval.svg" alt="loading-img" id="loader-svg">'
          
          fetch("https://ormsubmit.co/ajax/564ea8fced75a99de24c55ebd6d78043", {
               method: "POST",
               body: new FormData(e.target)
          })
          .then(res => res.ok ? res.json() : Promise.reject())
          .then(json => {
               console.log(json);
               modalLoading.innerHTML = `<p id="sended-msg">Delivered</p>`;                                      
               setTimeout(()=>{
                    modalLoading.classList.add("hidden");
               }, 2000)
          })
          .catch(err =>{
               console.log(err);
               modalLoading.innerHTML = `<p id="sended-msg">Something went wrong :(</p>`;
               setTimeout(()=>{
                    modalLoading.classList.add("hidden");
               }, 2000);  
          });
          form.reset();
     });
     
}