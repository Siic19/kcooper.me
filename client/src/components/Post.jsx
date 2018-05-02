import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Post extends Component {
  render() {

    // Because we are using a HOC for animated transitions, we have to get
    // the pathname from the location.
    const slug = this.props.location.pathname.split("/")
  
    return (
      <div className="container">
        <Query
          query={allPostsQuery}
          variables={{ slug: slug[2] }}
          // pollInterval={500}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            const { title, category } = data.findPost

            return (
              <div className="page-header">
                <h1>{title}</h1>
                <h3>{category}</h3>
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
    }
  }
`

export default Post
