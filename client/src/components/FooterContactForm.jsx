import React from 'react'
import { Row, Col, Input, Button, Form } from 'antd'

const { TextArea } = Input
const FormItem = Form.Item

const FooterContactForm = (props) => {
  const {
    onChange,
    onSubmit,
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
  } = props
  return (
    <div>
      <Row gutter={10} type="flex" justify="center">
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <FormItem
            hasFeedback
            validateStatus={firstNameError ? 'warning' : null}
          >
            <Input
              style={{ color: '#fff' }}
              name="firstName"
              onChange={onChange}
              value={firstName}
              placeholder="First name"
            />
          </FormItem>
        </Col>
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <FormItem
            hasFeedback
            validateStatus={lastNameError ? 'warning' : null}
          >
            <Input
              name="lastName"
              onChange={onChange}
              value={lastName}
              placeholder="Last name"
            />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={10} type="flex" justify="center">
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <FormItem
            hasFeedback
            validateStatus={emailAddressError ? 'warning' : null}
          >
            <Input
              name="emailAddress"
              onChange={onChange}
              type="email"
              value={emailAddress}
              placeholder="Email address"
            />
          </FormItem>
        </Col>
        <Col xs={23} sm={23} md={20} lg={9} xl={7}>
          <FormItem
            hasFeedback
            validateStatus={subjectError ? 'warning' : null}
          >
            <Input
              name="subject"
              onChange={onChange}
              value={subject}
              placeholder="Subject"
            />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={10} type="flex" justify="center">
        <Col xs={23} sm={23} md={20} lg={18} xl={14}>
          <FormItem hasFeedback validateStatus={textError ? 'warning' : null}>
            <TextArea
              rows={5}
              name="text"
              onChange={onChange}
              value={text}
              placeholder="Type your message here..."
            />
          </FormItem>
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
