import React from 'react'
import { Steps } from 'antd';

export default function Pasos(props) {
    const { Step } = Steps;
    return (
        <div>
            <Steps current={props.paso}>
                <Step title="Ingresa tu curp" description="Ingresa tu curp correctamente" />
                <Step title="Listo" subTitle="¿Y ahora que?" description="Sigue las recomendaciones de abajo" />
            </Steps>
        </div>
    )
}
