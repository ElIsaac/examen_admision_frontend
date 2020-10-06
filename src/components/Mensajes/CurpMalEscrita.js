import React from 'react'
import { Result, Button } from 'antd';

import Datos from './Datos'
export default function CurpMalEscrita({curp}) {
    return (
        <div>
             <Result
    status="404"
    title="Error, su curp no ha sido encontrada"
    subTitle={curp}
    extra={<Button type="primary">Back Home</Button>}
  />
  
        </div>
    )
}
