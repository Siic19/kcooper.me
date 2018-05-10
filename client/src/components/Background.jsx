import React, { Component } from 'react'

import BackgroundProjects from './BackgroundProjects'

import { Col, Row, Button, Modal } from 'antd'

import { Helmet } from 'react-helmet'

import heidi from '../images/heidi.jpg'
import rexi from '../images/rexi-tips-cooper.jpg'

class Background extends Component {
  state = {
    heidiVisible: false,
    rexiVisible: false,
  }

  showHeidi = () => {
    this.setState({
      heidiVisible: true,
    })
  }
  showRexi = () => {
    this.setState({
      rexiVisible: true,
    })
  }
  handleOk = (e) => {
    console.log(e)
    this.setState({
      heidiVisible: false,
      rexiVisible: false,
    })
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      heidiVisible: false,
      rexiVisible: false,
    })
  }

  render() {
    return (
      <div className="post-container">
        <Helmet>
          <title>KCooper.me | Background</title>
        </Helmet>
        <Row gutter={10}>
          <Col className="post-col-left" xs={24} sm={24} md={24} lg={6} xl={5}>
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
            md={24}
            lg={18}
            xl={19}
          >
            <div className="background-container">
              <div className="background-passion">
                <h1>My Passion</h1>
                <p>
                  I have a few things that push me in life beyond my love of
                  learning, design, and developement.
                </p>
                <p>
                  My wife to be Heidi, who is the hardest working person I know.
                  I have watched her push through 3 years of law school in 2
                  different provinces to accomplish her dream of becoming a
                  practicing lawyer.
                </p>
                <Button type="dashed" onClick={this.showHeidi}>
                  Picture of always studying Heidi
                </Button>
                <Modal
                  visible={this.state.heidiVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="modal-image">
                    <img src={heidi} alt="Heidi" />
                  </div>
                </Modal>
                <p>
                  My ever loving, ever hyper, ever watchful dog Rexi. The half
                  pitbut, half husky mix we brought back from Fredericton NB, to
                  Victoria under heavy sedation. She has kept me active and
                  taking needed breaks for 4 years.
                </p>
                <Button type="dashed" onClick={this.showRexi}>
                  Picture of the always loving Rexi
                </Button>
                <Modal
                  visible={this.state.rexiVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="modal-image">
                    <img src={rexi} alt="Rexi" />
                  </div>
                </Modal>
              </div>
              <div className="background-education">
                <h1>My Education</h1>
                <h2>Lighthouse Labs</h2>
                <i>2017-2018</i>
                <p>
                  Full-time immersive bootcamp focused on full-stack app
                  development.
                </p>
                <br />
                <h2>Pacific Design Academy</h2>
                <i>2011-2013</i>
                <p>Two year diploma in Graphic and Media Design.</p>
              </div>
              <div className="background-projects">
                <h1>My Projects</h1>
                <BackgroundProjects />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Background
