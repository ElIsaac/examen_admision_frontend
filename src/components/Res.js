import React, { useState, useEffect } from 'react'
import traerUsuario from '../api/traerUsuario';
import Aceptado from './Mensajes/Aceptado';
import CurpMalEscrita from './Mensajes/CurpMalEscrita';
import ErrorDeServidor from './Mensajes/ErrorDeServidor';
import Rechazado from './Mensajes/Rechazado';

export default function Res({alumno}) {
    return (
        <div>
            <div>{alumno.aceptado ? <Aceptado alumno={...alumno} /> : <Rechazado alumno={...alumno} />}</div>
        </div>
    )
}
