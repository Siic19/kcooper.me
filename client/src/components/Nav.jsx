import React from 'react'
import { Link } from 'react-router-dom'
// import { Menu, Segment } from 'semantic-ui-react'

import { Layout, Menu } from 'antd'

const { Header } = Layout

const Navigation = () => {
  return (
    <div>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">KCOOPER.ME</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/new-post">New Post</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  )
}

export default Navigation
