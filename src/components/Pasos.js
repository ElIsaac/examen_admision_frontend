import React from 'react'
import { Steps } from 'antd';

export default function Pasos(props) {
    const { Step } = Steps;
    return (
        <div>
            <Steps current={props.paso}>
                <Step title="Ingresa tu curp" description="Ingresa tu curp correctamente" />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
            </Steps>
        </div>
    )
}
