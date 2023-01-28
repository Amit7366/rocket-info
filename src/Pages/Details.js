import { Avatar, Card } from "antd";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { rocket } = useLoaderData();
  const fullData = rocket.second_stage.payloads[0];
//   console.log(fullData);
  return (
    <div>
      <Card title={fullData.payload_id} bordered={false}>
      {fullData.orbit_params.reference_system}
      </Card>
    </div>
  );
};

export default Details;
