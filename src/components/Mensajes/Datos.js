import React from 'react'
import { Descriptions } from 'antd';

export default function Datos(props) {
    return (
        <div>
            <Descriptions title="User Info">
                <Descriptions.Item label="Nombre">props.nombre</Descriptions.Item>
                <Descriptions.Item label="Apellidos">props.apellidos</Descriptions.Item>
                <Descriptions.Item label="Curp">props.curp</Descriptions.Item>
                <Descriptions.Item label="Aceptado">{props.aceptado ? "si" : "no"}</Descriptions.Item>
                <Descriptions.Item label="Grupo">props.grupo</Descriptions.Item>
                <Descriptions.Item label="Turno">props.turno</Descriptions.Item>
            </Descriptions>
        </div>
    )
}
