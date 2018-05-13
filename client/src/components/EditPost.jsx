import React, { Component } from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Row, Col, Input, Button, Select, Form } from 'antd'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'

import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'

const { TextArea } = Input
const FormItem = Form.Item
const Option = Select.Option

const highlight = (str, lang) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (err) {
      console.error(err)
    }
  }

  try {
    return hljs.highlightAuto(str).value
  } catch (err) {
    console.error(err)
  }

  return ''
}

class EditPost extends Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      id: '',
      title: '',
      slug: '',
      category: '',
      markdown: '',
      image: '',
      titleError: false,
      slugError: false,
      categoryError: false,
      markdownError: false,
      imageError: false,
      isLoading: false,
      successfullyPosted: false,
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  handleSelectChange = (value) => {
    this.category = value
  }

  render() {
    const slugFromUrl = this.props.match.params.slug

    const {
      title,
      markdown,
      image,
      titleError,
      slugError,
      category,
      categoryError,
      markdownError,
      imageError,
      isLoading,
      slug,
    } = this

    return (
      <div className="post-container">
        <Query query={allPostsQuery} variables={{ slug: slugFromUrl }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            const {
              title,
              category,
              markdown,
              createdAt,
              slug,
              image,
              id,
            } = data.findPost
            this.title = title
            this.category = category
            this.markdown = markdown
            this.slug = slug
            this.image = image
            this.id = id

            return null
          }}
        </Query>
        <Helmet>
          <title>KCooper.me | New Post</title>
        </Helmet>
        <Row gutter={10}>
          <Col className="post-col-left" xs={24} sm={24} md={24} lg={6} xl={5}>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className="vertical-text">newpost</div>
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
            <div className="login-or-post-container">
              <div className="input">
                <FormItem
                  hasFeedback
                  validateStatus={titleError ? 'warning' : null}
                >
                  <Input
                    name="title"
                    onChange={this.onChange}
                    value={title}
                    placeholder="Title..."
                  />
                </FormItem>
              </div>
              <div className="input">
                <FormItem
                  hasFeedback
                  validateStatus={slugError ? 'warning' : null}
                >
                  <Input
                    name="slug"
                    onChange={this.onChange}
                    value={slug}
                    placeholder="Slug.."
                  />
                </FormItem>
              </div>
              <div className="input">
                <FormItem
                  hasFeedback
                  validateStatus={categoryError ? 'warning' : null}
                >
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    value={category}
                    placeholder="Select category"
                    optionFilterProp="children"
                    onChange={this.handleSelectChange}
                  >
                    <Option value="programming">Programming</Option>
                    <Option value="design">Design</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </FormItem>
              </div>
              <div className="input">
                <FormItem
                  hasFeedback
                  validateStatus={imageError ? 'warning' : null}
                >
                  <Input
                    name="image"
                    onChange={this.onChange}
                    value={image}
                    placeholder="Image link here..."
                  />
                </FormItem>
              </div>
              <div className="input">
                <FormItem
                  hasFeedback
                  validateStatus={markdownError ? 'warning' : null}
                >
                  <TextArea
                    rows={25}
                    name="markdown"
                    onChange={this.onChange}
                    value={markdown}
                    placeholder="Write in markdown!"
                  />
                </FormItem>
              </div>
              <Button loading={isLoading} onClick={this.onSubmit}>
                Submit
              </Button>
              {this.successfullyPosted ? <span>Posted!</span> : null}
            </div>
            <div className="post-preview">
              <div className="post-preview-title">post preview</div>
              <div className="post-title">
                {this.title ? <h1>{this.title}</h1> : <div>Post Title</div>}

                <div className="blog-date">
                  {this.category ? (
                    <span>{this.category}</span>
                  ) : (
                    <div>Post Category</div>
                  )}
                </div>
              </div>
              <div className="post-content">
                {!this.markdown ? (
                  <div>Post content</div>
                ) : (
                  <Markdown options={{ highlight }} source={this.markdown} />
                )}
              </div>
            </div>
          </Col>
        </Row>
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
      image
    }
  }
`

export default observer(EditPost)
