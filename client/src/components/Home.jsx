import React, { Component } from 'react'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

import { layoutlg } from '../lib/gridLayouts'

import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

class Home extends Component {
  render() {
    const layouts = { lg: layoutlg }

    return (
      <div>
        <Query query={allPostsQuery} 
        // pollInterval={500}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            return (
              <div>
                <ResponsiveGridLayout
                  className="layout"
                  layouts={layouts}
                  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                  cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                >
                  <div className="masonry-cell" key="1">
                    a
                  </div>
                  {data.allPosts.map((post, index) => (
                    <div className="masonry-cell2" key={(index + 2).toString()}>
                      {post.title}
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
    }
  }
`

export default Home
