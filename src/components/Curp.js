import React from 'react'
import { Card } from 'antd';
import "./Curp.css"
import { Input } from 'antd';

export default function Curp({setCurp, setPaso}) {
    const { Search } = Input;
    const { Meta } = Card;

    const buscar = (value, setPaso) => {
        setCurp(value)
        setPaso(1)
    }


    return (
        <div>
            <Card className="form"
    hoverable
    
    cover={<img alt="" src="./logo.png" />}
  >
    <Meta title="Ingrese su curp" description=" " />
    <Search
      placeholder="CURP"
      onSearch={value => buscar(value, setPaso)}
      className="form"
    />
  </Card>
        </div>
    )
}
