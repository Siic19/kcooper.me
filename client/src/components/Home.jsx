import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { lg, md, sm, xs, xxs } from '../lib/gridLayouts'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { Helmet } from 'react-helmet'

import avatar from '../images/kelsey_avatar.svg'

const ResponsiveGridLayout = WidthProvider(Responsive)

class Home extends Component {
  render() {
    const layouts = { lg, md, sm, xs, xxs }

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
                    </div>
                  </div>
                  {data.allPosts.map((post, index) => (
                    <div
                      className="masonry-cell2"
                      id={(index + 2).toString()}
                      key={(index + 2).toString()}
                    >
                      <Link to={{ pathname: `/posts/${post.slug}` }}>
                        <div className="cell">{post.title}</div>
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
    allPosts(last: 12) {
      id
      title
      slug
    }
  }
`

export default Home
