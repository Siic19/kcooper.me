import React, { Component } from 'react'

import { Col, Row, Button, Modal } from 'antd'

import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import antd from '../images/antd.svg'
import apollo from '../images/apollo.svg'
import bootstrap from '../images/bootstrap.svg'
import css from '../images/css.svg'
import digitalocean from '../images/digitalocean.svg'
import express from '../images/express.svg'
import graphql from '../images/graphql.svg'
import heroku from '../images/heroku.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import jquery from '../images/jquery.svg'
import knex from '../images/knex.svg'
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

const StackIcon = (stack) => {
  return (
    <Col className="stack-icons" xs={4} sm={3} md={2} lg={2} xl={2}>
      <img src={stack.icon} alt={stack.name} />
      <br />
      <span>{stack.name}</span>
    </Col>
  )
}

class BackgroundProjects extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      Shopify1: false,
      Shopify2: false,
      Flight1: false,
      Flight2: false,
      Blitz1: false,
      Blitz2: false,
      Jungle1: false,
      Jungle2: false,
      Smappy1: false,
      Smappy2: false,
      Tweeter: false,
    })
  }

  setAllFalse = async () => {
    this.Shopify1 = false
    this.Shopify2 = false
    this.Flight1 = false
    this.Flight2 = false
    this.Blitz1 = false
    this.Blitz2 = false
    this.Jungle1 = false
    this.Jungle2 = false
    this.Smappy1 = false
    this.Smappy2 = false
    this.Tweeter = false
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
    const {
      Shopify1,
      Shopify2,
      Flight1,
      Flight2,
      Blitz1,
      Blitz2,
      Jungle1,
      Jungle2,
      Smappy1,
      Smappy2,
      Tweeter,
    } = this
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
              <StackIcon icon={javascript} name="JavaScript" />
              <StackIcon icon={react} name="React" />
              <StackIcon icon={graphql} name="GraphQl" />
              <StackIcon icon={apollo} name="Apollo" />
              <StackIcon icon={antd} name="Ant Design" />
              <StackIcon icon={express} name="Express" />
              <StackIcon icon={psql} name="PostgreSQL" />
              <StackIcon icon={digitalocean} name="D-Ocean" />
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
            Installation uses Shopify Express and the Shopify API. Front end
            React, Redux, and Shopify Polaris.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <StackIcon icon={javascript} name="JavaScript" />
              <StackIcon icon={react} name="React" />
              <StackIcon icon={redux} name="Redux" />
              <StackIcon icon={shopify} name="Polaris" />
              <StackIcon icon={express} name="Express" />
              <StackIcon icon={knex} name="Knex" />
              <StackIcon icon={psql} name="PostGresQL" />
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
          <br />
          <br />
          <hr />
          <br />
        </div>
        <div className="background-project">
          <h2>Flight App</h2>
          <p>
            Statistic keeping and tracking application. Designed to let a user
            log in and track their sales demographics and other specific sales
            data. Using ChartJS to display the stored data. Also my first dive
            into Redux.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <StackIcon icon={javascript} name="JavaScript" />
              <StackIcon icon={react} name="React" />
              <StackIcon icon={redux} name="Redux" />
              <StackIcon icon={bootstrap} name="Bootstrap" />
              <StackIcon icon={express} name="Express" />
              <StackIcon icon={knex} name="Knex" />
              <StackIcon icon={psql} name="PostGresQL" />
              <StackIcon icon={digitalocean} name="D-Ocean" />
            </Row>
          </div>
          <Button type="dashed" name="Flight1" onClick={this.showModal}>
            App Snap 1
          </Button>
          <Modal
            visible={Flight1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://camo.githubusercontent.com/d544e9e4e5bcff39aab47156300d88574daa0ef9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f54474b6d59653854374e47516c41574b334e2f67697068792e676966"
                alt="Flight App App Snap"
              />
            </div>
          </Modal>
          <Button type="dashed" name="Flight2" onClick={this.showModal}>
            App Snap 2
          </Button>
          <Modal
            visible={Flight2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/Siic19/Flight-App/raw/master/screenshots/Screen%20Shot%202018-02-25%20at%204.57.30%20PM.png?raw=true"
                alt="Flight App Snap #2"
              />
            </div>
          </Modal>
          <a href="https://github.com/Siic19/Flight-App">
            <Button type="dashed">Github</Button>
          </a>
          <a href="http://159.89.127.164/">
            <Button type="dashed">Live Site</Button>
          </a>
          <br />
          <br />
          <hr />
          <br />
        </div>
        <div className="background-project">
          <h2>Block Blitz</h2>
          <p>
            Final project at Lighthouse Labs. Competitive puzzle solving game,
            with lobby. The idea for the game was spawn from playing with
            <a href="https://packery.metafizzy.co/"> Packery</a> Library by
            <a href="https://metafizzy.co/"> Metafizzy</a>. A socket server was
            used to let players compete against each other in real time.
            Facebook login enabled using thier SDK.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <StackIcon icon={javascript} name="JavaScript" />
              <StackIcon icon={html} name="HTML5" />
              <StackIcon icon={css} name="CSS3" />
              <StackIcon icon={sass} name="Sass" />
              <StackIcon icon={jquery} name="jQuery" />
              <StackIcon icon={express} name="Express" />
              <StackIcon icon={socketio} name="SocketIo" />
              <StackIcon icon={knex} name="Knex" />
              <StackIcon icon={psql} name="PostGresQL" />
              <StackIcon icon={digitalocean} name="D-Ocean" />
            </Row>
          </div>
          <Button type="dashed" name="Blitz1" onClick={this.showModal}>
            App Snap 1
          </Button>
          <Modal
            visible={Blitz1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/Block-Blitz/take-2/raw/master/public/images/read%20me%20screenshots/homepage.png?raw=true"
                alt="Block Blitz App App Snap"
              />
            </div>
          </Modal>
          <Button type="dashed" name="Blitz2" onClick={this.showModal}>
            App Snap 2
          </Button>
          <Modal
            visible={Blitz2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/Siic19/Flight-App/raw/master/screenshots/Screen%20Shot%202018-02-25%20at%204.57.30%20PM.png?raw=true"
                alt="Block Blitz App Snap #2"
              />
            </div>
          </Modal>
          <a href="https://github.com/Block-Blitz/take-2">
            <Button type="dashed">Github</Button>
          </a>
          <a href="http://blockblitz.live/">
            <Button type="dashed">Live Site</Button>
          </a>
          <br />
          <br />
          <hr />
          <br />
        </div>
        <div className="background-project">
          <h2>Jungle App</h2>
          <p>
            My first dive into Rails and Active Record, one of the later
            projects in Lighthouse Labs. We were given an already made store and
            given tasks to add functionality. This functionality included adding
            an admin panel with connected routes to add/remove/edit items to
            specific categories in the store and place things on sale. Also add
            a star rating system for customers.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <StackIcon icon={ruby} name="Ruby" />
              <StackIcon icon={rails} name="Rails" />
              <StackIcon icon={stripe} name="StripeAPI" />
              <StackIcon icon={html} name="HTML5" />
              <StackIcon icon={css} name="CSS3" />
            </Row>
          </div>
          <Button type="dashed" name="Jungle1" onClick={this.showModal}>
            App Snap 1
          </Button>
          <Modal
            visible={Jungle1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/Siic19/jungle-rails/raw/master/docs/Jungle-Home-Page.jpg"
                alt="Jungle App App Snap"
              />
            </div>
          </Modal>
          <Button type="dashed" name="Jungle2" onClick={this.showModal}>
            App Snap 2
          </Button>
          <Modal
            visible={Jungle2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/Siic19/jungle-rails/raw/master/docs/Product-Ratings.jpg"
                alt="Jungle App Snap #2"
              />
            </div>
          </Modal>
          <a href="https://github.com/Siic19/jungle-rails">
            <Button type="dashed">Github</Button>
          </a>
          <br />
          <br />
          <hr />
          <br />
        </div>
        <div className="background-project">
          <h2>Smappy</h2>
          <p>
            This map app allows users to collaboratively create maps using the
            Google Maps API. Users are then able to create markers on the maps
            identifying certain locations like "Best Chinese Food in Victoria.
            This was a group project in week 4 of the Lighthouse Labs Bootcamp.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <StackIcon icon={javascript} name="JavaScript" />
              <StackIcon icon={node} name="Nodejs" />
              <StackIcon icon={bootstrap} name="Bootstrap" />
              <StackIcon icon={jquery} name="jQuery" />
              <StackIcon icon={express} name="Express" />
              <StackIcon icon={psql} name="PostgresQL" />
              <StackIcon icon={knex} name="Knex" />
            </Row>
          </div>
          <Button type="dashed" name="Smappy1" onClick={this.showModal}>
            App Snap 1
          </Button>
          <Modal
            visible={Smappy1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/RyukyuColin/map_app-midterm/raw/master/images/Create-map-dropdown.png?raw=true"
                alt="Smappy App App Snap"
              />
            </div>
          </Modal>
          <Button type="dashed" name="Smappy2" onClick={this.showModal}>
            App Snap 2
          </Button>
          <Modal
            visible={Smappy2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/RyukyuColin/map_app-midterm/raw/master/images/map-page-marker-info-box.png?raw=true"
                alt="Smappy App Snap #2"
              />
            </div>
          </Modal>
          <a href="https://github.com/RyukyuColin/LHL-smappy">
            <Button type="dashed">Github</Button>
          </a>
          <br />
          <br />
          <hr />
          <br />
        </div>
        <div className="background-project">
          <h2>Tweeter</h2>
          <p>
            Tweeter is a Twitter clone. My first real dive into more complicated
            apps. The focus was on the front end, which uses a lot of jQuery and
            Ajax to make any calls to the server. Live site was pushed to
            Heroku.
          </p>
          <div className="background-stack">
            <Row type="flex" justify="start">
              <StackIcon icon={javascript} name="JavaScript" />
              <StackIcon icon={node} name="Nodejs" />
              <StackIcon icon={jquery} name="jQuery" />
              <StackIcon icon={html} name="HTML5" />
              <StackIcon icon={css} name="CSS3" />
              <StackIcon icon={express} name="Express" />
              <StackIcon icon={heroku} name="Heroku" />
            </Row>
          </div>
          <Button type="dashed" name="Tweeter" onClick={this.showModal}>
            App Snap
          </Button>
          <Modal
            visible={Tweeter}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="modal-image">
              <img
                src="https://github.com/Siic19/tweeter/raw/master/docs/tweeter-app-toggle-open.jpg"
                alt="Tweeter App App Snap"
              />
            </div>
          </Modal>

          <a href="https://github.com/Siic19/tweeter">
            <Button type="dashed">Github</Button>
          </a>

          <a href="https://cryptic-atoll-70432.herokuapp.com/">
            <Button type="dashed">Live Site</Button>
          </a>
        </div>
      </div>
    )
  }
}

export default observer(BackgroundProjects)
