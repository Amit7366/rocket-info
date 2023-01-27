import logo from './logo.svg';
import './App.css';
import { Avatar, Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useState } from 'react';

function App() {
  const [rockets,setRockets] = useState([]);
  return (
    <div className="">
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <Card
    style={{
      width: '100%'
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col-6</Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col-6</Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col-6</Col>

        
      </Row>
    </div>
  );
}

export default App;
