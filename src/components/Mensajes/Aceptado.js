import React from 'react'
import { Result, Button } from 'antd';
import Datos from './Datos'
export default function Aceptado({alumno}) {
    const reload = () => {
        window.location.reload();
    }
    return (
        <div>
            <Result
                status="success"
                subTitle= {`Felicitaciones ${alumno.nombre} haz sido aceptado en el cbtis 128`}
                title="Bienvenido a la casa de los jaguares"
                extra={[
                    <Button type="primary" key="opcion">
                        <a href="https://www.cbtis128.edu.mx/">Que sigue</a>
      </Button>,
                    <Button onClick={reload} key="Inicio">Volver al inicio</Button>,
                ]}
            />
        <Datos alumno={alumno}/>
        </div>
    )
}
