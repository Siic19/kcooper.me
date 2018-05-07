import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon } from 'antd'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

const { TextArea } = Input

class FooterComponent extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      firstName: '',
      lastName: '',
      emailAddress: '',
      subject: '',
      text: '',
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
      response = await this.props.mutate({
        variables: { firstName, lastName, emailAddress, subject, text },
      })
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
        <Row gutter={10} type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={9} xl={7}>
            <Input
              style={{ color: '#fff' }}
              name="firstName"
              onChange={this.onChange}
              value={firstName}
              placeholder="First name"
            />
          </Col>
          <Col xs={23} sm={23} md={20} lg={9} xl={7}>
            <Input
              name="lastName"
              onChange={this.onChange}
              value={lastName}
              placeholder="Last name"
            />
          </Col>
        </Row>
        <Row gutter={10} type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={9} xl={7}>
            <Input
              name="emailAddress"
              onChange={this.onChange}
              type="email"
              value={emailAddress}
              placeholder="Email address"
            />
          </Col>
          <Col xs={23} sm={23} md={20} lg={9} xl={7}>
            <Input
              name="subject"
              onChange={this.onChange}
              value={subject}
              placeholder="Subject"
            />
          </Col>
        </Row>
        <Row gutter={10} type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={18} xl={14}>
            <TextArea
              rows={5}
              name="text"
              onChange={this.onChange}
              value={text}
              placeholder="Type your message here..."
            />
          </Col>
        </Row>
        <Row gutter={10} type="flex" justify="center">
          <Col xs={23} sm={23} md={5} lg={4} xl={3}>
            <Button onClick={this.onSubmit}>Send</Button>
          </Col>
        </Row>
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

export default observer(FooterComponent)
