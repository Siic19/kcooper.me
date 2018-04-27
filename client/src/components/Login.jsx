import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Button, Input, Container, Header } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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
      <Container text>
        <Header as="h2">Login</Header>
        <Input
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    )
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
export default graphql(loginMutation)(observer(Login))
