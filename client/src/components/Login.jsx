import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import decode from 'jwt-decode'

import { Helmet } from 'react-helmet'

import { Input, Button, Row, Col, Form, Icon } from 'antd'

const FormItem = Form.Item

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  try {
    decode(token)
  } catch (err) {
    return false
  }
  return true
}

class Login extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      isLoading: false,
      graphqlError: '',
      isLoggedIn: false,
    })
  }

  componentWillMount() {
    if (isAuthenticated()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  componentDidUpdate() {
    if (isAuthenticated()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { email, password } = this

    this.emailError = false
    this.passwordError = false
    this.graphqlError = ''

    let error = false

    if (!email) {
      this.emailError = true
      error = true
    }

    if (!password) {
      this.passwordError = true
      error = true
    }

    if (!error) {
      this.isLoading = true

      try {
        const response = await this.props.mutate({
          variables: { email, password },
        })
        const { login } = response.data
        localStorage.setItem('token', login)
        this.isLoading = false
      } catch (res) {
        const errors = res.graphQLErrors.map((error) => {
          return error.message
        })
        this.graphqlError = errors[0]
        this.isLoading = false
      }
    }
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  render() {
    const {
      email,
      password,
      emailError,
      passwordError,
      isLoading,
      graphqlError,
      isLoggedIn
    } = this
    return (
      <div className="post-container">
        <Helmet>
          <title>KCooper.me | Login</title>
        </Helmet>
        <Row gutter={10}>
          <Col className="post-col-left" xs={24} sm={24} md={17} lg={6} xl={5}>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className="vertical-text">login</div>
              </Col>
            </Row>
          </Col>
          <Col
            className="blog-col-right"
            xs={24}
            sm={24}
            md={17}
            lg={18}
            xl={19}
          >
            <div className="login-or-post-container">
              {isLoggedIn ? (
                <div className="input">
                  <div><Icon type="check" /> Successully signed in!</div>
                  <Button loading={isLoading} onClick={this.logOut}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="input">
                    <FormItem
                      hasFeedback
                      validateStatus={emailError ? 'warning' : null}
                    >
                      <Input
                        name="email"
                        onChange={this.onChange}
                        value={email}
                        placeholder="Email"
                      />
                    </FormItem>
                  </div>
                  <div className="input">
                    <FormItem
                      hasFeedback
                      validateStatus={passwordError ? 'warning' : null}
                    >
                      <Input
                        name="password"
                        onChange={this.onChange}
                        value={password}
                        type="password"
                        placeholder="Password"
                      />
                    </FormItem>
                    {graphqlError ? (
                      <div className="login-error">{graphqlError}</div>
                    ) : null}
                    <Button loading={isLoading} onClick={this.onSubmit}>
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
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
