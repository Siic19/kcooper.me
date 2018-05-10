import React, { Component } from 'react'

import { Col, Row } from 'antd'

import { Helmet } from 'react-helmet'

class Background extends Component {
  render() {
    return (
      <div className="post-container">
        <Helmet>
          <title>KCooper.me | Background</title>
        </Helmet>
        <Row gutter={10}>
          <Col className="post-col-left" xs={24} sm={24} md={17} lg={6} xl={5}>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className="vertical-text">background</div>
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
            <div className="background-container">
            <div className="background-education">
            education
            </div>
            <div className="background-projects">
            projects
            </div>
            
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Background
