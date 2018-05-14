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
                Hey! My name is Kelsey Cooper. I'm a Full Stack Developer in
                beautiful Victoria, BC, Canada.
              </p>
              <p>
                I began my coding journey in 2011 when I attended the Pacific
                Design Academy for Graphic Design.
              </p>
              <p>
                In the fall of 2017, I joined Lighthouse Labs. Lighthouse Labs
                provided me with the opportunity to build on my self taught
                fundamental knowledge and bring me closer to my goal of being a
                full time developer. Since Lighthouse Labs, I have continued to
                build and grow my confidence in coding.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default HomeMe
