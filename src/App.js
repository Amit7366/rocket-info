import logo from "./logo.svg";
import "./App.css";
import { Avatar, Card, Col, Row, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";

function App() {
  const [rockets, setRockets] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(`https://api.spacexdata.com/v3/launches`)
      .then((res) => res.json())
      .then((data) => {
        setRockets(data);
        setLoader(false);
      });
  }, []);
  if (loader) {
    return <Row>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Skeleton
      style={{width:'100%'}}
    avatar
    paragraph={{
      rows: 4,
    }}
  />
          </Col>
    </Row>;
  }

  return (
    <div className="">
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Card
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
