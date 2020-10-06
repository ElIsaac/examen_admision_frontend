import React from 'react'
import { Descriptions } from 'antd';

export default function Datos({alumno}) {
    return (
        <div>
            <Descriptions title="Informacion del alumno" bordered>
                <Descriptions.Item label="Nombre">{alumno.nombre}</Descriptions.Item>
                <Descriptions.Item label="Apellidos">{alumno.apellidos}</Descriptions.Item>
                <Descriptions.Item label="Curp">{alumno.curp}</Descriptions.Item>
                <Descriptions.Item label="Aceptado">{alumno.aceptado ? "si" : "no"}</Descriptions.Item>
                {
                    alumno.aceptado === true && <Descriptions.Item label="Grupo">{alumno.grupo}</Descriptions.Item>
                }
                
                {
                    alumno.aceptado === true && <Descriptions.Item label="Turno">{alumno.turno}</Descriptions.Item> 
                }
            </Descriptions>
        </div>
    )
}
