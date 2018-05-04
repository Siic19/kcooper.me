import React from 'react'
import { Link } from 'react-router-dom'
// import { Menu, Segment } from 'semantic-ui-react'

import { Layout, Menu } from 'antd'

const { Header } = Layout

const Navigation = () => {
  let href = window.location.href.split('/')
  href = href[3]
  
  return (
    <div>
      <Header className="header">
      
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['/'+href]}
          selectedKeys={['/'+href]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to="/" className="logo">KCOOPER.ME</Link>
          </Menu.Item>
          <Menu.Item key="/new-post">
            <Link to="/new-post">New Post</Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  )
}

export default Navigation
