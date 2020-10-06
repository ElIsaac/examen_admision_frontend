import React, { useState, useEffect } from 'react'
import traerUsuario from '../api/traerUsuario';
import Aceptado from './Mensajes/Aceptado';
import CurpMalEscrita from './Mensajes/CurpMalEscrita';
import ErrorDeServidor from './Mensajes/ErrorDeServidor';
import Rechazado from './Mensajes/Rechazado';


export default function Resultado(curp) {

    const [alumno, setAlumno] = useState({});

    useEffect(() => {
        if(alumno ==={}){
            traerUsuario(curp).then(response => {
            setAlumno(response);
          });
        }
    }, [alumno])
    console.log(alumno)

    const alumnoMarkup = ()=>(
        (alumno==={})
        ?
        (<div> Cargando alumno, por favor espere...</div>)
        :
    (<div>{alumno.aceptado ? <Aceptado alumno={alumno} /> : <Rechazado alumno={alumno}/> }</div>)
      );
      
      return(
        
        {alumnoMarkup()}

      )  
    
}
