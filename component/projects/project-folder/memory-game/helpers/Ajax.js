export async function ajax(props) {
     let {url, success} = props;

     await fetch(url)
          .then(res => (res.ok) ? res.json() : Promise.reject(res))
          .then(json => success(json))
          .catch(err => {
               let msg = err.statusText || `Ocurrió un error`,
                    errCode = err.status || `desconocido`;

               console.log(`Error ${errCode}: ${msg}`);
          })
}