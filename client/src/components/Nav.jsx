import React from 'react'
import { Link } from 'react-router-dom'
// import { Menu, Segment } from 'semantic-ui-react'

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

export default class Navigation extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Link to={'/'}>KCOOPER.ME</Link>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/about-me">
                <NavItem eventKey={1}>About Me</NavItem>
              </LinkContainer>
              <LinkContainer to="/posts">
                <NavItem eventKey={2}>Posts</NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem eventKey={3}>Contact</NavItem>
              </LinkContainer>
              <LinkContainer to="/new-post">
                <NavItem eventKey={4}>New Post</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem eventKey={5}>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/logout">
                <NavItem eventKey={6}>Logout</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
