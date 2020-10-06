import React from 'react'
import { Result, Typography } from 'antd';

import Datos from './Datos'
const { Paragraph, Text } = Typography;

export default function Rechazado({alumno}) {
  return (
    <div>
      <Result
        status="error"
        title="No haz sido aceptado"
        subTitle="No te preocupes esto ocurre mas de lo comun. ¡Animo!"

      >
        <div className="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              Oferta educativa
        </Text>
          </Paragraph>
          <Paragraph> <a href="https://alaescuela.com.mx/escuelas/bachillerato/chihuahua/juarez/juarez.php">Checa estas opciones &gt;</a>
          </Paragraph>
        </div>
      </Result>
      <Datos alumno={alumno} />
    </div>
  )
}
