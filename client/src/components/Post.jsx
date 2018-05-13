import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PostReturn from './PostReturn'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import decode from 'jwt-decode'

import { Helmet } from 'react-helmet'

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  try {
    decode(token)
  } catch (err) {
    return false
  }
  return true
}

class Post extends Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      isLoggedIn: false,
    })
  }

  componentWillMount() {
    if (isAuthenticated()) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  render() {
    const slug = this.props.match.params.slug
    const { isLoggedIn } = this

    return (
      <div className="post-container">
        <Query query={allPostsQuery} variables={{ slug: slug }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            const { title, category, markdown, createdAt, slug } = data.findPost

            return (
              <div>
                <Helmet>
                  <title>KCooper.me | {title}</title>
                </Helmet>

                <PostReturn
                  title={title}
                  category={category}
                  markdown={markdown}
                  createdAt={createdAt}
                  isLoggedIn={isLoggedIn}
                  slug={slug}
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
      createdAt
      slug
    }
  }
`

export default observer(Post)
