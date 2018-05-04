import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PostReturn from './PostReturn'

class Post extends Component {
  render() {
    const slug = this.props.match.params.slug

    return (
      <div className="post-container">
        <Query
          query={allPostsQuery}
          variables={{ slug: slug }}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            const { title, category, markdown } = data.findPost

            return (
              <div>
                {(() => {
                  switch (category) {
                    case 'other':
                      return (
                        <PostReturn
                          title={title}
                          category={category}
                          markdown={markdown}
                          primaryColor="#E6E6E6"
                          secondaryColor="#98E5DC"
                        />
                      )
                    case 'design':
                      return (
                        <PostReturn
                          title={title}
                          category={category}
                          markdown={markdown}
                          primaryColor="#E6E6E6"
                          secondaryColor="#AFE298"
                        />
                      )
                    case 'programming':
                      return (
                        <PostReturn
                          title={title}
                          category={category}
                          markdown={markdown}
                          primaryColor="#E6E6E6"
                          secondaryColor="#BCADEA"
                        />
                      )
                    default:
                      return (
                        <PostReturn
                          title={title}
                          category={category}
                          markdown={markdown}
                          primaryColor="#E6E6E6"
                          secondaryColor="#F9BB62"
                        />
                      )
                  }
                })()}
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
