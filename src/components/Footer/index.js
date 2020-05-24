import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const { Footer } = Layout

class FooterElem extends React.Component {
  render () {
    return (
      <Footer style={{ textAlign: 'center' }}>
          Your contacts ©2020 Created by Palashchenko Vera
      </Footer>
    )
  }
}
export default FooterElem
