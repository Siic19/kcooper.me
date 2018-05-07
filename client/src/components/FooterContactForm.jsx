import React from 'react'

import { Row, Col, Input, Button } from 'antd'

const { TextArea } = Input

const FooterContactForm = (props) => {
  const { onChange, onSubmit, firstName, lastName, emailAddress, subject, text } = props
  return (
    <div>
      <Row gutter={10} type="flex" justify="center">
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <Input
            style={{ color: '#fff' }}
            name="firstName"
            onChange={onChange}
            value={firstName}
            placeholder="First name"
          />
        </Col>
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <Input
            name="lastName"
            onChange={onChange}
            value={lastName}
            placeholder="Last name"
          />
        </Col>
      </Row>
      <Row gutter={10} type="flex" justify="center">
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <Input
            name="emailAddress"
            onChange={onChange}
            type="email"
            value={emailAddress}
            placeholder="Email address"
          />
        </Col>
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <Input
            name="subject"
            onChange={onChange}
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
            onChange={onChange}
            value={text}
            placeholder="Type your message here..."
          />
        </Col>
      </Row>
      <Row gutter={10} type="flex" justify="center">
        <Col xs={23} sm={23} md={5} lg={4} xl={3}>
          <Button onClick={onSubmit}>Send</Button>
        </Col>
      </Row>
    </div>
  )
}

export default FooterContactForm
