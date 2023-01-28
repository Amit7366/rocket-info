import { Avatar, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";

const RocketCard = ({ rocket }) => {
  const { flight_number,mission_name, details, links } = rocket;
  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Link to={`/${flight_number}`}>
        <Card
          style={{
            width: "100%",
          }}
          cover={
            <img
              style={{ height: "350px" }}
              alt="example"
              src={links?.mission_patch}
            />
          }
          actions={[]}
        >
          <Meta
            avatar={<Avatar src={links?.mission_patch_small} />}
            title={mission_name}
            description={details?.slice(0, 30)}
          />
        </Card>
      </Link>
    </Col>
  );
};

export default RocketCard;
