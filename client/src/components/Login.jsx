import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Input, Button } from 'antd'

class Login extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      email: '',
      password: '',
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { email, password } = this

    const response = await this.props.mutate({
      variables: { email, password },
    })

    const { login } = response.data
    localStorage.setItem('token', login)
  }

  render() {
    const { email, password } = this
    return (
      <div className="container">
        <div className="page-header">
          <h1>Login</h1>
        </div>
        <div className="input">
          <Input
            name="email"
            onChange={this.onChange}
            value={email}
            placeholder="Email"
            fluid
          />
        </div>
        <div className="input">
          <Input
            name="password"
            onChange={this.onChange}
            value={password}
            type="password"
            placeholder="Password"
            fluid
          />
        </div>
        <Button onClick={this.onSubmit}>Submit</Button>
      </div>
    )
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
export default graphql(loginMutation)(observer(Login))
