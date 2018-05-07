import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
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
      companyName: '',
      text: '',
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  render() {
    const { firstName, lastName, emailAddress, companyName, text } = this
    return (
      <div className="footer-form">
      <h1>GET IN TOUCH</h1>
        <Row gutter={10} type="flex" justify="center">
          <Col xs={24} sm={24} md={20} lg={9} xl={7}>
            <Input
             style={{'color': '#fff'}}
              name="firstName"
              onChange={this.onChange}
              value={firstName}
              placeholder="First name"
            />
          </Col>
          <Col xs={24} sm={24} md={20} lg={9} xl={7}>
            <Input
              name="lastName"
              onChange={this.onChange}
              value={lastName}
              placeholder="Last name"
            />
          </Col>
        </Row>
        <Row gutter={10} type="flex" justify="center">
          <Col xs={24} sm={24} md={20} lg={9} xl={7}>
            <Input
              name="emailAddress"
              onChange={this.onChange}
              value={emailAddress}
              placeholder="Email address"
            />
          </Col>
          <Col xs={24} sm={24} md={20} lg={9} xl={7}>
            <Input
              name="companyName"
              onChange={this.onChange}
              value={companyName}
              placeholder="Company name"
            />
          </Col>
        </Row>
        <Row gutter={10} type="flex" justify="center">
          <Col xs={24} sm={24} md={20} lg={18} xl={14}>
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
          <Col xs={24} sm={24} md={5} lg={4} xl={3}>
            <Button onClick={this.onSubmit}>Send</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default observer(FooterComponent)