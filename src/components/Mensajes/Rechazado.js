import React from 'react'
import { Result, Typography } from 'antd';

import Datos from './Datos'
const { Paragraph, Text } = Typography;

export default function Rechazado() {
    return (
        <div>
            <Result
    status="Lo sentimos "
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
   
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph> <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph><a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
  <Datos/>
        </div>
    )
}
