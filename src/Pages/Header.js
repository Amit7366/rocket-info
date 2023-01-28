import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        const name = values.rocketname;

        fetch(`https://api.spacexdata.com/v3/launches`)
        .then((res) => res.json())
        .then((data) => {
           const result = data.filter(rocket => rocket.mission_name === name);
            navigate('/search', { state: result });
           console.log(result);
        });

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div style={{margin:'auto'}}>
            <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Rocket Name"
      name="rocketname"
      rules={[
        {
          required: true,
          message: 'Please input your Rocket Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>




    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    );
};

export default Header;