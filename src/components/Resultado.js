import React, { useState, useEffect } from 'react'
import traerUsuario from '../api/traerUsuario';
import Aceptado from './Mensajes/Aceptado';
import CurpMalEscrita from './Mensajes/CurpMalEscrita';
import ErrorDeServidor from './Mensajes/ErrorDeServidor';
import Rechazado from './Mensajes/Rechazado';


export default function Resultado(curp) {

    const [alumno, setAlumno] = useState({});
    const [load, setLoad] = useState(true)

     useEffect(() => {
        
            traerUsuario(curp).then(response => {
            setAlumno(response);
            setLoad(false)
          });
        
    }, [])
    console.log(curp.curp)
    console.log(alumno)


    const alumnoMarkup = ()=>(
        (load===true)
        ?
        (<div> Cargando alumno, por favor espere...</div>)
        :
    (<Aceptado alumno={alumno} /> )
      ); 
      
      return(
        
        <>
        {
          (load===true)
          ?
          (<div> Cargando alumno, por favor espere...</div>)
          :
          (<div>
            
            {
            alumno.aceptado === true && <Aceptado alumno={alumno} /> 
            }
            {
              alumno.aceptado===false&& <Rechazado alumno={alumno}/> 
            }
            {
              alumno.titulo === "error-404" && <CurpMalEscrita alumno={alumno}/> 
            }
            {
              alumno.titulo === "error-500" && <ErrorDeServidor alumno={alumno}/> 
            }
            </div>)
        }
        </>
      )  
    
}
