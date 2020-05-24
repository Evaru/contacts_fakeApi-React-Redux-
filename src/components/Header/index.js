import React from 'react'
import 'antd/dist/antd.css'
import { withRouter } from 'react-router-dom'
import { Layout, Row, Col, Tooltip, Button } from 'antd'
import { LoginOutlined, PlusCircleOutlined } from '@ant-design/icons'

const { Header } = Layout

const HeaderElem = props => {
  const logout = function (e) {
    localStorage.clear()
    props.history.push('/login')
  }
  const add = function (e) {
    props.history.push('/add')
  }
  const auth = JSON.parse(localStorage.getItem('auth'))
  return (
    <Header className="site-layout-background " style={{ padding: 0 }}>
      <Row className="app__header">
        <Col order={1}>
          <Tooltip placement="bottom" title="Add contact">
            <Button
              type="dashed"
              ghost
              shape="circle"
              onClick={add}
              className="app__header__button-add"
              icon={<PlusCircleOutlined />}
            />
          </Tooltip>
        </Col>
        <Col order={2}>
          <h1>{document.title}, {auth.username}</h1>
        </Col>
        <Col order={3}>
          <Tooltip placement="bottom" title="Logout">
            <Button
              type="dashed"
              ghost
              onClick={logout}
              className="app__header__button-logout"
              icon={<LoginOutlined />}
            ></Button>
          </Tooltip>
        </Col>
      </Row>
    </Header>
  )
}
export default withRouter(HeaderElem)
