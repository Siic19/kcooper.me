import React, { Component } from 'react'
import BackgroundProjects from './BackgroundProjects'
import { Col, Row, Button, Modal } from 'antd'
import { Helmet } from 'react-helmet'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import heidi from '../images/heidi.jpg'
import rexi from '../images/rexi-tips-cooper.jpg'

class Background extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      heidiVisible: false,
      rexiVisible: false,
    })
  }
  
  setAllFalse = async () => {
    this.heidiVisible = false
    this.rexiVisible = false
  }

  showModal = (e) => {
    const name = e.target.name
    this[name] = true
  }

  handleOk = (e) => {
    this.setAllFalse()
  }

  handleCancel = (e) => {
    this.setAllFalse()
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
                <h1>Motivation</h1>
                <p>
                  I have a few things beyond my love of learning, design, and
                  development that motivate me.
                </p>
                <p>
                  My wife-to-be Heidi is the hardest working person I know. I
                  have watched her push through 3 years of law school, in 2
                  different provinces to accomplish her dream of becoming a
                  practicing lawyer.
                </p>
                <Button type="dashed" name='heidiVisible' onClick={this.showModal}>
                  Picture of always studying Heidi
                </Button>
                <Modal
                  visible={this.heidiVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="modal-image">
                    <img src={heidi} alt="Heidi" />
                  </div>
                </Modal>
                <p>
                  My ever loving, ever hyper, ever watchful dog Rexi has kept me
                  active and taking needed breaks for 4 years. She is a half
                  pit-bull, half husky mix who flew from Fredericton NB, to
                  Victoria, BC with us under heavy sedation. She is full of
                  personality and makes me laugh every day.
                </p>
                <Button type="dashed" name='rexiVisible' onClick={this.showModal}>
                  Picture of the always loving Rexi
                </Button>
                <Modal
                  visible={this.rexiVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <div className="modal-image">
                    <img src={rexi} alt="Rexi" />
                  </div>
                </Modal>
              </div>
              <div className="background-education">
                <h1>Education</h1>
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
                <h1>Projects</h1>
                <BackgroundProjects />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default observer(Background)
