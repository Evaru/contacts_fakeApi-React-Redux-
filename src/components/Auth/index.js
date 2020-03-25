import React from "react";
import { Form, Input, Button, message } from "antd";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8
  }
};

const Auth = ({ items, history }) => {
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = values => {
     
    if (items) {
      items.map(item => {
        if (values.username == item.username) {
          localStorage.setItem("auth", JSON.stringify(values));
          history.push("/");
        }
      });
      let auth = JSON.parse(localStorage.getItem("auth"));
      if(!auth ){
        message.error(values.username+' - no such user') 
      }
      
    }
    
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      style={{ margin: "50px" }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
