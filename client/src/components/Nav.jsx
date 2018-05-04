import React from 'react'
// import { Menu, Segment } from 'semantic-ui-react'

import { Layout } from 'antd'

import { withRouter } from 'react-router'
import MenuMarkup from './MenuMarkup/MenuMarkup'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'

const { Header } = Layout

const Navigation = ({ location }) => {
  return (
    <Header>
      <ResponsiveNav
        activeLinkKey={location.pathname}
        menuMarkup={MenuMarkup}
        placement="bottomLeft"
      />
    </Header>
  )
}

export default withRouter(Navigation)
