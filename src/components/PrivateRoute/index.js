import React from "react";
import { Route, Redirect } from "react-router-dom";
import { HeaderElem, FooterElem, SideBar } from "../";
import { Layout, BackTop } from "antd";
const { Content } = Layout;

const PrivateRoute = ({ component: Component,  ...rest }) => {

  const auth = JSON.parse(localStorage.getItem("auth"));

  return (
  <Route
    {...rest}
    render={props =>
      auth? (
        <Layout>
          <BackTop />
          <SideBar />
          <Layout className="site-layout">
            <HeaderElem />
            <Content>
              <Component {...props} />
            </Content>
            <FooterElem />
          </Layout>
        </Layout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
}

export default PrivateRoute;
