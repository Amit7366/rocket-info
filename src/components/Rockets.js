import { Row } from "antd";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import RocketCard from "./RocketCard";

const Rockets = () => {
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
    if(loader){
        return <Loader></Loader>;
    }
  return (
    <Row gutter={[16, 16]}>
      {rockets.map((rocket, idx) => (
        <RocketCard key={idx} rocket={rocket}></RocketCard>
      ))}
    </Row>
  );
};

export default Rockets;
