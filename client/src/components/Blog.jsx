import React, { Component } from 'react'

import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import BlogReturn from './BlogReturn'

import { Row, Col, Icon } from 'antd'

import { Helmet } from 'react-helmet'

class Blog extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      offset: 0,
    })
  }

  onClickUp = () => {
    this.offset += 5
  }

  onClickDown = () => {
    if (this.offset > 0) {
      this.offset -= 5
    }
  }
  render() {
    const { offset } = this
    return (
      <div className="post-container">
        <Helmet>
          <title>KCooper.me | Blog</title>
        </Helmet>
        <Row gutter={10}>
          <Col className="post-col-left" xs={24} sm={24} md={17} lg={6} xl={5}>
            <div className="posts-left-container">
              <h1>
                a blog is a place to keep my thoughts, or at least the ones I
                care to share...
              </h1>
              <Row type="flex" justify="space-between" align="top">
                <Icon onClick={this.onClickDown} type="arrow-left" />
                <div>pg.{offset / 5}</div>
                <Icon onClick={this.onClickUp} type="arrow-right" />
              </Row>
            </div>
          </Col>
          <Col
            className="post-col-right"
            xs={24}
            sm={24}
            md={17}
            lg={18}
            xl={19}
          >
            <Query query={allPostsQuery} variables={{ last: 5, offset }}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`

                return (
                  <div>
                    {data.allPosts.map((post) => (
                      <BlogReturn
                        key={post.id}
                        title={post.title}
                        category={post.category}
                        markdown={post.markdown}
                      />
                    ))}
                  </div>
                )
              }}
            </Query>
          </Col>
        </Row>
      </div>
    )
  }
}

const allPostsQuery = gql`
  query($last: Int, $offset: Int!) {
    allPosts(last: $last, offset: $offset) {
      id
      title
      category
      markdown
    }
  }
`

export default observer(Blog)
