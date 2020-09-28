import React, {useState} from 'react'
import { Descriptions } from 'antd';
import traerUsuario from '../api/traerUsuario';
import Aceptado from './Mensajes/Aceptado';
import CurpMalEscrita from './Mensajes/CurpMalEscrita';
import ErrorDeServidor from './Mensajes/ErrorDeServidor';
import Rechazado from './Mensajes/Rechazado';


export default function Resultado(curp) {

    const [alumno, setAlumno] = useState({})


    traerUsuario(curp).then(data =>{
        console.log(data)
        const data2 = {...data}
         setAlumno(data2)
        })
        console.log(alumno)
    if(!alumno){
        return (
            <>
                <ErrorDeServidor/>
            </>
         )
    }
    if(alumno.resultado.aceptado){
        return (
            <>
                <Aceptado/>
                <Datos/>
            </>
         )
    }
    if(!alumno.resultado.aceptado){
        return (
            <>
                <Rechazado/>
                <Datos/>
            </>
         )
    }
    if(alumno.mensaje === "La curp que ha introducido esta mal escrita o esa curp no esta registrada, favor de verificarla"){
        return (
            <>
                <CurpMalEscrita/>
            </>
         )
    }
}
function Datos(){
    return(
        <div>
        <Descriptions title="User Info">
            <Descriptions.Item label="Nombre">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Apellidos">1810000000</Descriptions.Item>
            <Descriptions.Item label="Curp">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Aceptado">empty</Descriptions.Item>
            <Descriptions.Item label="Grupo">empty</Descriptions.Item>
            <Descriptions.Item label="Turno">empty</Descriptions.Item>
        </Descriptions>
    </div>
    )
}