import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// use babel-import-plugin as specified in Ant Design Docs!
// https://ant.design/docs/react/getting-started#Import-on-Demand
import { Menu } from 'antd'

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
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/">
          <Link to="/" className="logo">
            KCOOPER.ME
          </Link>
        </Menu.Item>
        <Menu.Item key="/new-post">
          <Link to="/new-post">New Post</Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="/posts">
          <Link to="/posts">Posts</Link>
        </Menu.Item>
        <Menu.Item style={{"float": "right"}} key="/about">
          <Link to="/about">About Me</Link>
        </Menu.Item>
      </Menu>
  )
}

MenuMarkup.propTypes = {
  mobileVersion: PropTypes.bool,
  activeLinkKey: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func,
  className: PropTypes.string,
}

MenuMarkup.defaultProps = {
  mobileVersion: false,
  className: 'mobile-navigation',
}

export default MenuMarkup
