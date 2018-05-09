import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { lg, md, sm, xs, xxs } from '../lib/gridLayouts'

import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { Helmet } from 'react-helmet'

import avatar from '../images/kelsey_avatar.svg'

import { Motion, spring } from 'react-motion'

const ResponsiveGridLayout = WidthProvider(Responsive)

class Home extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      hoveredID: 0,
    })
  }

  dateConfig(date) {
    const dateSplit = date.split(' ', 4)
    dateSplit.shift()
    dateSplit[1] = dateSplit[1] += ','
    const finalDate = dateSplit.join(' ')
    return finalDate
  }

  render() {
    const layouts = { lg, md, sm, xs, xxs }
    const { hoveredID } = this
    return (
      <div>
        <Query
          query={allPostsQuery}
          // pollInterval={500}
        >
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
                  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                  cols={{ lg: 12, md: 9, sm: 6, xs: 4, xxs: 2 }}
                >
                  <div className="masonry-cell me" key="1">
                    <div className="avatar">
                      <img src={avatar} alt="Kelsey Cooper" />
                      {hoveredID}
                    </div>
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
                            opacity: 0,
                            boxOpacity: 0,
                            boxX: -25,
                            scale: 110,
                            tint: 0
                          }}
                          style={{
                            opacity: spring(hoveredID === index + 2 ? 1 : 0),
                            boxOpacity: spring(hoveredID === index + 2 ? 1 : 0),
                            boxX: spring(hoveredID === index + 2 ? 0 : -25),
                            scale: spring(hoveredID === index + 2 ? 100 : 110),
                            tint: spring(hoveredID === index + 2 ? .75 : 0),
                          }}
                        >
                          {(style) => (
                            <div
                              className="cell"
                              
                            >
                              <div className="cell-container"style={{
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: `${style.scale}%`,
                              }}>
                              
                                {console.log(style)}
                                <div className="cell-tint" style={{opacity: style.tint}}>
                                tint
                                </div>
                                <div
                                  className="cell-box"
                                  style={{
                                    transform: `translateX(${style.boxX}px)`,
                                    opacity: style.boxOpacity,
                                    // transform: translateX(-30px);
                                  }}
                                />
                                <div className="cell-title">{post.title}</div>
                                <div
                                  className="cell-category"
                                  style={{ opacity: style.opacity }}
                                >
                                  {post.category}
                                </div>
                                <div
                                  className="cell-date"
                                  style={{ opacity: style.opacity }}
                                >
                                  {this.dateConfig(post.createdAt)}
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
