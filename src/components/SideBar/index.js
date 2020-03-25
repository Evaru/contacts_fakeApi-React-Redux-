import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

const { Sider } = Layout;

class SideBar extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
    setTimeout({}, 0);
  };

  render() {
    return (
      <div className="sidebar" style={{ minHeight: "100vh" }}>
        <Sider
          style={{ minHeight: "100vh" }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <NavLink to="/">
            <img
              className="logo"
              alt="logo"
              src={process.env.PUBLIC_URL + "/logo.png"}
            />
          </NavLink>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <NavLink to="/">
                <ContactsOutlined />
                <span>Contacts</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}
export default SideBar;
