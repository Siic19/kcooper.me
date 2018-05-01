import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Post extends Component {
  render() {
    console.log(this.props.match.params.slug)

    return (
        <div className="container">
      <Query
        query={allPostsQuery}
        variables={{ slug: this.props.match.params.slug }}
        // pollInterval={500}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          const { title } = data.findPost

          return (
              <div className="page-header">
                <h1>{title}</h1>
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
    }
  }
`

export default Post
