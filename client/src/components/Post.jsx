import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PostReturn from './PostReturn'

import { Helmet } from 'react-helmet'

class Post extends Component {
  render() {
    const slug = this.props.match.params.slug

    return (
      <div className="post-container">
        <Query query={allPostsQuery} variables={{ slug: slug }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            const { title, category, markdown } = data.findPost

            return (
              <div>
                <Helmet>
                  <title>KCooper.me | {title}</title>
                </Helmet>

                <PostReturn
                  title={title}
                  category={category}
                  markdown={markdown}
                />
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

const allPostsQuery = gql`
  query($slug: String!) {
    findPost(slug: $slug) {
      id
      title
      category
      markdown
    }
  }
`

export default Post
