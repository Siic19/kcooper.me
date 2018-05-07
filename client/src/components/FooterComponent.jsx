import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import FooterContactForm from './FooterContactForm'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class FooterComponent extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      firstName: '',
      lastName: '',
      emailAddress: '',
      subject: '',
      text: '',
      callInProgress: false,
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { firstName, lastName, emailAddress, subject, text } = this
    let response = null

    try {
      this.callInProgress = true
      response = await this.props.mutate({
        variables: { firstName, lastName, emailAddress, subject, text },
      })
      console.log(response.data)
    } catch (err) {
      console.log(response)

      return
    }
  }

  render() {
    const { firstName, lastName, emailAddress, subject, text } = this
    return (
      <div className="footer-form">
        <h1>GET IN TOUCH</h1>
        <FooterContactForm
          onChange={this.onChange}
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          subject={subject}
          text={text}
          onSubmit={this.onSubmit}
        />
        <div className="footer-social">
          <Row gutter={90} type="flex" justify="center">
            <Col xs={24} sm={24} md={9} lg={7} xl={6}>
              <span>FOLLOW ME</span>
            </Col>
            <Col xs={7} sm={7} md={4} lg={4} xl={3}>
              <a href="https://github.com/Siic19">
                <Icon type="github" />
              </a>
            </Col>
            <Col xs={7} sm={7} md={4} lg={4} xl={3}>
              <a href="https://www.linkedin.com/in/kcoop19/">
                <Icon type="linkedin" />
              </a>
            </Col>
            <Col xs={7} sm={7} md={4} lg={4} xl={3}>
              <a href="https://www.facebook.com/SourDinosaur">
                <Icon type="facebook" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const sendEmailMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $subject: String!
    $text: String!
  ) {
    sendEmail(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      subject: $subject
      text: $text
    )
  }
`

export default graphql(sendEmailMutation)(observer(FooterComponent))
