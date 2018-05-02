import React from 'react'
import Navigation from './Nav'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { AnimatedSwitch } from 'react-router-transition'

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

const App = (props) => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <div className='nav'>
              <Navigation />
            </div>

              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/new-post" component={NewPost} />
                <Route exact path="/posts/:slug" component={Post} />
              </AnimatedSwitch>
          </div>
        )}
      />
    </Router>
  )
}


export default App
