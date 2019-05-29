import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { lg, md, sm, xs, xxs } from '../lib/gridLayouts'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import HomeMe from './HomeMe'
import { Helmet } from 'react-helmet'
import { Motion, spring } from 'react-motion'
import { dateConfig } from './helpers/date'

const ResponsiveGridLayout = WidthProvider(Responsive)

class Home extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      hoveredID: 0,
      width: 0,
    })
    this.initUpdateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.initUpdateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.width = window.innerWidth
  }

  render() {
    const layouts = { lg, md, sm, xs, xxs }
    const { hoveredID } = this
    const tintWidth =  this.width < 991 ? .75 : 0
    const baseOpacity =  this.width < 991 ? 1 : 0
    const boxX =  this.width < 991 ? 0 : -25
    const scale =  this.width < 991 ? 100 : 110
    const categoryY =  this.width < 991 ? -10 : 0
    const dateY =  this.width < 991 ? -15 : 0

    return (
      <div>
        <Query query={allPostsQuery}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return (
              <div>
                <Helmet>
                  <title>KCooper.me | Home</title>
                </Helmet>
                <ResponsiveGridLayout
                  className="layout"
                  layouts={layouts}
                  breakpoints={{ lg: 1200, md: 991, sm: 768, xs: 480, xxs: 0 }}
                  cols={{ lg: 12, md: 9, sm: 6, xs: 4, xxs: 2 }}
                >
                  <div className="masonry-cell me" key="1">
                    <HomeMe />
                  </div>
                  {data.allPosts.map((post, index) => (
                    <div
                      className="masonry-cell2"
                      id={(index + 2).toString()}
                      key={(index + 2).toString()}
                      onMouseOver={() => (this.hoveredID = index + 2)}
                      onMouseOut={() => (this.hoveredID = 0)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Link to={{ pathname: `/posts/${post.slug}` }}>
                        <Motion
                          defaultStyle={{
                            opacity: baseOpacity,
                            boxOpacity: baseOpacity,
                            boxX,
                            scale,
                            tint: tintWidth, //TODO
                            categoryY,
                            dateY,
                          }}
                          style={{
                            opacity: spring(hoveredID === index + 2 ? 1 : baseOpacity),
                            boxOpacity: spring(hoveredID === index + 2 ? 1 : baseOpacity),
                            boxX: spring(hoveredID === index + 2 ? 0 : boxX),
                            scale: spring(hoveredID === index + 2 ? 100 : scale),
                            tint: spring(hoveredID === index + 2 ? 0.75 : tintWidth), //TODO
                            categoryY: spring(
                              hoveredID === index + 2 ? -10 : categoryY,
                              { stiffness: 120, damping: 40 },
                            ),
                            dateY: spring(hoveredID === index + 2 ? -15 : dateY, {
                              stiffness: 100,
                              damping: 40,
                            }),
                          }}
                        >
                          {(style) => (
                            <div className="cell">
                              <div
                                className="cell-container"
                                style={{
                                  backgroundImage: `url(${post.image})`,
                                  backgroundSize: `${style.scale}%`,
                                }}
                              >
                                <div
                                  className="cell-tint"
                                  style={{ opacity: style.tint }}
                                />
                                <div
                                  className="cell-box"
                                  style={{
                                    transform: `translateX(${style.boxX}px)`,
                                    opacity: style.boxOpacity,
                                  }}
                                />
                                <div className="cell-title">{post.title}</div>
                                <div
                                  className="cell-category"
                                  style={{
                                    opacity: style.opacity,
                                    transform: `translateY(${
                                      style.categoryY
                                    }px)`,
                                  }}
                                >
                                  {post.category}
                                </div>
                                <div
                                  className="cell-date"
                                  style={{
                                    opacity: style.opacity,
                                    transform: `translateY(${style.dateY}px)`,
                                  }}
                                >
                                  {dateConfig(post.createdAt)}
                                </div>
                              </div>
                            </div>
                          )}
                        </Motion>
                      </Link>
                    </div>
                  ))}
                </ResponsiveGridLayout>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

const allPostsQuery = gql`
  {
    allPosts(last: 8) {
      id
      title
      slug
      image
      category
      createdAt
    }
  }
`

export default observer(Home)
