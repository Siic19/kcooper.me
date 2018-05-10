import React, { Component } from 'react'

import { Col, Row, Button, Modal } from 'antd'
import { Link } from 'react-router-dom'

import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import antd from '../images/antd.svg'
import apollo from '../images/apollo.svg'
import bootstrap from '../images/bootstrap.svg'
import css from '../images/css.svg'
import digitalocean from '../images/digitalocean.svg'
import express from '../images/express.svg'
import heroku from '../images/heroku.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import jquery from '../images/jquery.svg'
import node from '../images/node.svg'
import psql from '../images/psql.svg'
import rails from '../images/rails.svg'
import react from '../images/react.svg'
import redux from '../images/redux.svg'
import ruby from '../images/ruby.svg'
import sass from '../images/sass.svg'
import socketio from '../images/socketio.svg'
import stripe from '../images/stripe.svg'
import shopify from '../images/shopify.svg'

import shopifyappsnap from '../images/shopifyappsnap.gif'
import shopifyappsnap2 from '../images/shopifyappsnap2.gif'

class BackgroundProjects extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      Shopify1: false,
      Shopify2: false,
    })
  }

  setAllFalse = async () => {
    this.Shopify1 = false
    this.Shopify2 = false
  }

  showModal = (e) => {
    const name = e.target.name
    console.log(e.target.name)

    this[name] = true
  }
  handleOk = (e) => {
    this.setAllFalse()
  }
  handleCancel = (e) => {
    this.setAllFalse()
  }
  render() {
    const { Shopify1, Shopify2 } = this
    return (
      <div>
        <div className="background-project">
          <h2>kcooper.me</h2>
          <p>
            This wonderful site is a vast upgrade from my old site and let me
            learn GraphQL, Apollo, Ant Design, and React Motion.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <Col span={2}>
                <img src={css} alt="CSS3" />
              </Col>
              <Col span={2}>
                <img src={html} alt="HTML5" />
              </Col>
              <Col span={2}>
                <img src={javascript} alt="JavaScript" />
              </Col>
              <Col span={2}>
                <img src={react} alt="React" />
              </Col>
              <Col span={2}>
                <img src={apollo} alt="Apollo" />
              </Col>
              <Col span={2}>
                <img src={antd} alt="Ant Design" />
              </Col>
              <Col span={2}>
                <img src={express} alt="Express" />
              </Col>
              <Col span={2}>
                <img src={psql} alt="Postgesql" />
              </Col>
              <Col span={2}>
                <img src={digitalocean} alt="Digital Ocean" />
              </Col>
            </Row>
            <Row type="flex" justify="start">
              <Col span={2}>
                <span>CSS3</span>
              </Col>
              <Col span={2}>
                <span>HTML5</span>
              </Col>
              <Col span={2}>
                <span>JavaScript</span>
              </Col>
              <Col span={2}>
                <span>React</span>
              </Col>
              <Col span={2}>
                <span>Apollo</span>
              </Col>
              <Col span={2}>
                <span>Ant Design</span>
              </Col>
              <Col span={2}>
                <span>Express</span>
              </Col>
              <Col span={2}>
                <span>PostgreSQL</span>
              </Col>
              <Col span={2}>
                <span>D-Ocean</span>
              </Col>
            </Row>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div className="background-project">
          <h2>Shopify Custom Shipping App</h2>
          <p>
            An integrated Shopify application to offer custom shipping to
            customers, and configuration to the Shopify store owner.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <Col span={2}>
                <img src={css} alt="CSS3" />
              </Col>
              <Col span={2}>
                <img src={html} alt="HTML5" />
              </Col>
              <Col span={2}>
                <img src={javascript} alt="JavaScript" />
              </Col>
              <Col span={2}>
                <img src={react} alt="React" />
              </Col>
              <Col span={2}>
                <img src={apollo} alt="Apollo" />
              </Col>
              <Col span={2}>
                <img src={antd} alt="Ant Design" />
              </Col>
              <Col span={2}>
                <img src={express} alt="Express" />
              </Col>
              <Col span={2}>
                <img src={digitalocean} alt="Digital Ocean" />
              </Col>
            </Row>
            <Row type="flex" justify="start">
              <Col span={2}>
                <span>CSS3</span>
              </Col>
              <Col span={2}>
                <span>HTML5</span>
              </Col>
              <Col span={2}>
                <span>JavaScript</span>
              </Col>
              <Col span={2}>
                <span>React</span>
              </Col>
              <Col span={2}>
                <span>Apollo</span>
              </Col>
              <Col span={2}>
                <span>Ant Design</span>
              </Col>
              <Col span={2}>
                <span>Express</span>
              </Col>
              <Col span={2}>
                <span>D-Ocean</span>
              </Col>
            </Row>
          </div>
          <Button type="dashed" name="Shopify1" onClick={this.showModal}>
            App Snap 1
          </Button>
          <Modal
            visible={Shopify1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img src={shopifyappsnap} alt="Shopify App Snap" />
            </div>
          </Modal>
          <Button type="dashed" name="Shopify2" onClick={this.showModal}>
            App Snap 2
          </Button>
          <Modal
            visible={Shopify2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img src={shopifyappsnap2} alt="Shopify App Snap #2" />
            </div>
          </Modal>
          <a href="https://github.com/Siic19/Shopify-Cellardirect-App">
            <Button type="dashed">Github</Button>
          </a>
        </div>
      </div>
    )
  }
}

export default observer(BackgroundProjects)
