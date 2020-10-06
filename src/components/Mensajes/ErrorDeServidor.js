import React from 'react'
import { Result, Button } from 'antd';

export default function ErrorDeServidor() {
  const reload = () => {
    window.location.reload();
}
    return (
        <Result
    status="500"
    title="500"
    subTitle="Ha ocurrido un error en el servidor. Intente mas tarde"
    extra={<Button onClick={reload} type="primary">Volver al inicio</Button>}
  />
    )
}
