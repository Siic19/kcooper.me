import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import NewPost from './NewPost'
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

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/new-post" exact component={NewPost} />
    </Switch>
  </main>
)

export default Main
