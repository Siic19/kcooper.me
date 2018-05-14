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
          <Col className="post-col-left" xs={24} sm={24} md={24} lg={6} xl={5}>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className="vertical-text">weblog</div>
              </Col>
            </Row>
          </Col>
          <Col
            className="blog-col-right"
            xs={24}
            sm={24}
            md={24}
            lg={18}
            xl={19}
          >
            <Query query={allPostsQuery} variables={{ last: 5, offset }}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`
                if (data.allPosts.length === 0) {
                  this.offset -= 5
                }
                return (
                  <div>
                    {data.allPosts.map((post) => (
                      <BlogReturn
                        key={post.id}
                        title={post.title}
                        category={post.category}
                        markdown={post.markdown}
                        image={post.image}
                        createdAt={post.createdAt}
                        slug={post.slug}
                      />
                    ))}
                  </div>
                )
              }}
            </Query>
            <Col xs={24} sm={24} md={24} lg={24}>
              <div className="blog-pagination">
                <Row type="flex" justify="center" align="top">
                  <Col xs={6} sm={6} md={6} log={6}>
                    <Icon onClick={this.onClickDown} type="arrow-left" />
                  </Col>
                  <Col xs={6} sm={6} md={6} log={6}>
                  page {offset / 5 + 1}
                  </Col>
                  <Col xs={6} sm={6} md={6} log={6}>
                  <Icon onClick={this.onClickUp} type="arrow-right" />
                  </Col>
                </Row>
              </div>
            </Col>
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
      slug
      image
      createdAt
    }
  }
`

export default observer(Blog)
