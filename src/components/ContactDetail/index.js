import React from "react";
import { Row, Col, Card } from "antd";
import {
  IdcardOutlined,
  UserOutlined,
  MobileOutlined,
  MailOutlined,
  BankOutlined,
  HomeOutlined
} from "@ant-design/icons";

const ContactDetail = ({ item }) => {
  return (
    <Row gutter={16}>
      <Col span={24} style={{ textAlign: "left" }}>
        <Card title="Contact Info" bordered={false}>
          <Col>
            <p label="Full Name">
              <IdcardOutlined /> {item.name ? item.name : null}
            </p>
          </Col>
          <Col>
            <p label="UserName">
              <UserOutlined />
              {item.username ? item.username : null}
            </p>
          </Col>
          <Col>
            <p label="Telephone">
              <MobileOutlined />
              {item.phone ? item.phone : null}
            </p>
          </Col>
          <Col>
            <p label="Email">
              <MailOutlined />
              {item.email ? item.email : null}
            </p>
          </Col>
          <Col>
            <p label="Company">
              <BankOutlined /> 
              {item.company ? item.company.name : null}
            </p>
          </Col>
          <Col>
            <p label="Address">
              <HomeOutlined /> 
              {item.address
                ? item.address.city +
                  " . " +
                  item.address.street +
                  ", " +
                  item.address.suite
                : null}
            </p>
          </Col>
        </Card>
      </Col>
    </Row>
  );
};

export default ContactDetail;
