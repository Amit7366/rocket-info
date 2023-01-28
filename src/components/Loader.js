import { Col, Row, Skeleton } from 'antd';
import React from 'react';

const Loader = () => {
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
};

export default Loader;