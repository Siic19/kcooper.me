import React from 'react'

import { Col, Row } from 'antd'

import avatar from '../images/kelsey_avatar.svg'

const HomeMe = () => {
  return (
    <Row gutter={10}>
      <Col className="post-col-left" xs={24} sm={24} md={24} lg={7} xl={7}>
        <Row type="flex" justify="center" align="top">
          <Col span={24}>
            <div className="vertical-home-text">kelsey</div>
          </Col>
        </Row>
      </Col>
      <Col className="blog-col-right" xs={24} sm={24} md={24} lg={17} xl={17}>
        <div className="home-me-right-container">
          <div>
            <div className="avatar">
              <img src={avatar} alt="Kelsey Cooper" />
            </div>
            <div className="home-write-up">
              <p>
                Hey my name is Kelsey Cooper. I'm a Full Stack Developer in
                beautiful Victoria, BC Canada.
              </p>
              <p>
                I was introduced to the basics of development in 2011 when I
                attended the Pacific Design Academy for Graphic Design.
              </p>
              <p>
                In the fall of 2017 I joined Lighthouse Labs. There I was able
                to greatly increase my skills and knowledge of Aplication Design
                furthering me on my goal to becoming a full time developer.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default HomeMe
