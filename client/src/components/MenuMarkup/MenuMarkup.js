import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

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
      <Menu.Item key="/about">
        <Link to="/about">About Me</Link>
      </Menu.Item>
      <Menu.Item key="/blog">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link smooth to="#contact">Contact</Link>
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
