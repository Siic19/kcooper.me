import React from 'react'
import Navigation from './Nav'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { spring, AnimatedSwitch } from 'react-router-transition'

import Login from './Login'
import Home from './Home'
import NewPost from './NewPost'
import Post from './Post'
import Blog from './Blog'
import Background from './Background'
import FooterComponent from './FooterComponent'
import EditPost from './EditPost'
import decode from 'jwt-decode'

import { Layout } from 'antd'
const { Header, Footer } = Layout

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  try {
    decode(token)
  } catch (err) {
    return false
  }

  return true
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
)

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  }
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  })
}

function bounceLeave(val) {
  return spring(val, {
    stiffness: 600,
    damping: 60,
  })
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounceLeave(0),
    scale: bounceLeave(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
}

const App = (props) => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <Header>
              <Navigation />
            </Header>

            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="switch-wrapper"
            >
              <Route exact path="/posts/:slug" component={Post} />
            </AnimatedSwitch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/background" component={Background} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/new-post" component={NewPost} />
            <PrivateRoute exact path="/edit-post/:slug" component={EditPost} />
            <Footer>
              <FooterComponent/>
              <div id="contact" title="contact"></div>
            </Footer>
          </div>
        )}
      />
    </Router>
  )
}

export default App
