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
    return (
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Skeleton
            style={{ width: "100%" }}
            avatar
            paragraph={{
              rows: 4,
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Skeleton
            style={{ width: "100%" }}
            avatar
            paragraph={{
              rows: 4,
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Skeleton
            style={{ width: "100%" }}
            avatar
            paragraph={{
              rows: 4,
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Skeleton
            style={{ width: "100%" }}
            avatar
            paragraph={{
              rows: 4,
            }}
          />
        </Col>
      </Row>
    );
  }

  return (
    <div className="">
      <Row>
        {
          rockets.map((rocket,idx) => <Col key={idx} xs={24} sm={24} md={12} lg={8} xl={6}>
          <Card
            style={{
              width: "100%",
            }}
            cover={
              <img
              style={{height:'350px'}}
                alt="example"
                src={rocket.links.mission_patch}
              />
            }
            actions={[]}
          >
            <Meta
              avatar={<Avatar src={rocket.links.mission_patch_small} />}
              title={rocket.mission_name}
              description={rocket.details}
            />
          </Card>
        </Col>)
        }
        
      </Row>
    </div>
  );
}

export default App;
