
export default function traerUsuario(curp){
    return fetch("https://examenchido.herokuapp.com/resultados/"+curp.curp, {
        
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }).then(result => {
        return result.json();
    }).then(data =>{
        return data
    }).catch((err)=>{
        return err.mensaje
        
    });
    
    

} 