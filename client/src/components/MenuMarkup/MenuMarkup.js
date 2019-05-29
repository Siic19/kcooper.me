import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Menu } from 'antd'
import decode from 'jwt-decode'

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  try {
    decode(token)
  } catch (err) {
    return false
  }

  return true
}


const MenuMarkup = ({
  mobileVersion,
  activeLinkKey,
  onLinkClick,
  className,
}) => {
  let href = window.location.href.split('/')
  href = href[3]
  return (
    <Menu
      theme={mobileVersion ? 'light' : 'light'}
      mode={mobileVersion ? 'vertical' : 'horizontal'}
      defaultSelectedKeys={['/' + href]}
      selectedKeys={['/' + href]}
      className={className}
      style={{ lineHeight: '63px' }}
    >
      <Menu.Item key="/">
        <Link to="/" className="logo">
          KCOOPER.ME
        </Link>
      </Menu.Item>
      <Menu.Item key="/background">
        <Link to="/background">Background</Link>
      </Menu.Item>
      <Menu.Item key="/blog">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link smooth to="#contact">Contact</Link>
      </Menu.Item>
      {isAuthenticated() ? (
        <Menu.Item key="/new-post">
          <Link to="/new-post">New Post</Link>
        </Menu.Item>
      ) : (
      <Menu.Item key="login">
        <Link smooth to="/login">Login</Link>
      </Menu.Item>
      )}
    </Menu>
  )
}

MenuMarkup.defaultProps = {
  mobileVersion: false,
  className: 'mobile-navigation',
}

export default MenuMarkup
