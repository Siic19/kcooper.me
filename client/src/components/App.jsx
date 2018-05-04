import React from 'react'
import Navigation from './Nav'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { spring, AnimatedSwitch } from 'react-router-transition'

import Login from './Login'
import Home from './Home'
import NewPost from './NewPost'
import Post from './Post'
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


// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

function bounceLeave(val) {
  return spring(val, {
    stiffness: 600,
    damping: 60
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounceLeave(0),
    scale: bounceLeave(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};


const App = (props) => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <div className="nav">
              <Navigation />
            </div>

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
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/new-post" component={NewPost} />
          </div>
        )}
      />
    </Router>
  )
}

export default App
