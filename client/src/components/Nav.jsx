import React from 'react'
import { withRouter } from 'react-router'
import MenuMarkup from './MenuMarkup/MenuMarkup'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'

const Navigation = ({ location }) => {
  return (
    <ResponsiveNav
      activeLinkKey={location.pathname}
      menuMarkup={MenuMarkup}
      placement="bottomLeft"
    />
  )
}

export default withRouter(Navigation)
