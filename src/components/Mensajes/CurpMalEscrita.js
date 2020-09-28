import React from 'react'
import { Result, Button } from 'antd';

export default function CurpMalEscrita() {
    return (
        <div>
             <Result
    status="404"
    title="Error, su curp no ha sido encontrada"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
        </div>
    )
}
