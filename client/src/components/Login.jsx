import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Input, Button, Row, Col } from 'antd'

import { Helmet } from 'react-helmet'

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
              <div className="input">
                <Input
                  name="email"
                  onChange={this.onChange}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div className="input">
                <Input
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button onClick={this.onSubmit}>Submit</Button>
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
