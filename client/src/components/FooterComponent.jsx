import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import FooterContactForm from './FooterContactForm'

import { BounceLoader } from 'react-spinners'

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
      firstNameError: false,
      lastNameError: false,
      emailAddressError: false,
      subjectError: false,
      textError: false,
      callInProgress: false,
      callMade: false,
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async (e) => {
    console.log(e)

    const { firstName, lastName, emailAddress, subject, text } = this

    this.firstNameError = false
    this.lastNameError = false
    this.emailAddressError = false
    this.subjectError = false
    this.textError = false

    let error = false

    let response = null

    if (!firstName) {
      this.firstNameError = true
      error = true
    }

    if (!lastName) {
      this.lastNameError = true
      error = true
    }

    if (!emailAddress) {
      this.emailAddressError = true
      error = true
    }

    if (!subject) {
      this.subjectError = true
      error = true
    }

    if (!text) {
      this.textError = true
      error = true
    }

    if (!error) {
      this.callInProgress = true
      this.callMade = true
      try {
        response = await this.props.mutate({
          variables: { firstName, lastName, emailAddress, subject, text },
        })

        this.callInProgress = false
      } catch (err) {
        console.log(err)

        return
      }
    }
  }

  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      subject,
      text,
      firstNameError,
      lastNameError,
      emailAddressError,
      subjectError,
      textError,
      callInProgress,
      callMade,
    } = this
    return (
      <div className="footer-form">
        <h1>GET IN TOUCH</h1>
        <div className="footer-form-container">
          {(() => {
            if (callMade) {
              if (callInProgress) {
                return (
                  <Row type="flex" justify="center">
                    <Col>
                      <div className="contact-form-message">
                        <BounceLoader color={'#fff;'} size={100} />
                      </div>
                    </Col>
                  </Row>
                )
              } else {
                return (
                  <div className="contact-form-message">
                    <Row type="flex" justify="center">
                      <Col>
                        <Icon type="smile-o" />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Col>Message successfully delivered to Kelsey!</Col>
                    </Row>
                  </div>
                )
              }
            } else {
              return (
                <FooterContactForm
                  onChange={this.onChange}
                  firstName={firstName}
                  lastName={lastName}
                  emailAddress={emailAddress}
                  subject={subject}
                  text={text}
                  firstNameError={firstNameError}
                  lastNameError={lastNameError}
                  emailAddressError={emailAddressError}
                  subjectError={subjectError}
                  textError={textError}
                  onSubmit={this.onSubmit}
                />
              )
            }
          })()}
        </div>

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
