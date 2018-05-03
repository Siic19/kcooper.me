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
          // pollInterval={500}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            const { title, category } = data.findPost

            return (
              <div>
                {(() => {
                  switch (category) {
                    case 'other':
                      return <PostReturn title={title} category={category} primaryColor="lightskyblue" secondaryColor="#b7dff1"/>
                    case 'design':
                      return <PostReturn title={title} category={category} primaryColor="blue" secondaryColor="red"/>
                    case 'programming':
                      return <PostReturn title={title} category={category} primaryColor="pink" secondaryColor="tomato"/>
                    default:
                      return '#FFFFFF'
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
    }
  }
`

export default Post
