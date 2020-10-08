import React from 'react'
import { Result, Button } from 'antd';


export default function CurpMalEscrita({alumno}) {
    const reload = () => {
        window.location.reload();
    }
    return (
        <div>
             <Result
    status="404"
    title={alumno.curp+": No ha sido encontrada."}
    subTitle={alumno.mensaje}
    extra={<Button onClick={reload} type="primary">Buscar de nuevo</Button>}
  />
  
        </div>
    )
}
