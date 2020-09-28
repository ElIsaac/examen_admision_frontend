import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
import "./LayoutAntd.css"
import Pasos from './Pasos'
import Curp from './Curp'
import Resultado from './Resultado'


export default function LayoutAntd() {

    const [paso, setPaso] = useState(0)
    const [curp, setCurp] = useState("")

    const { Header, Content, Footer } = Layout;
    return (
        
            <Layout>
    <Header style={{ position: 'fixed', width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
      <Menu.Item>Examen de admision CBTIS no. 128</Menu.Item>
        
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Pasos paso={paso}/>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {
            paso === 0 && <Curp setCurp={setCurp} setPaso={setPaso}/>
        }
        {
            paso === 1 && <Resultado curp={curp}/>
        }
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
}
