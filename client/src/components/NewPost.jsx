import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'

import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'

import { Input, Button, Select, Col, Row, Form } from 'antd'
const { TextArea } = Input
const FormItem = Form.Item

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

class NewPost extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
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

  onSubmit = async () => {
    const { title, slug, category, markdown, image } = this

    this.titleError = false
    this.slugError = false
    this.categoryError = false
    this.markdownError = false
    this.imageError = false

    let error = false

    if (!title) {
      this.titleError = true
      error = true
    }

    if (!slug) {
      this.slugError = true
      error = true
    }

    if (!category) {
      this.categoryError = true
      error = true
    }

    if (!markdown) {
      this.markdownError = true
      error = true
    }

    if (!image) {
      this.imageError = true
      error = true
    }

    if (!error) {
      try {
        this.isLoading = true;
        const response = await this.props.mutate({
          variables: { title, slug, category, markdown, image },
        })
        this.successfullyPosted = true;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        return
      }
    }
  }

  handleSelectChange = (value) => {
    this.category = value
  }

  render() {
    const {
      title,
      slug,
      markdown,
      image,
      titleError,
      slugError,
      categoryError,
      markdownError,
      imageError,
      isLoading,
    } = this
    const Option = Select.Option
    return (
      <div className="post-container">
        <Helmet>
          <title>KCooper.me | New Post</title>
        </Helmet>
        <Row gutter={10}>
          <Col className="post-col-left" xs={24} sm={24} md={17} lg={6} xl={5}>
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
            md={17}
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
              <Button loading={isLoading} onClick={this.onSubmit}>Submit</Button>
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

const newPostMutation = gql`
  mutation(
    $title: String!
    $slug: String!
    $category: String!
    $markdown: String!
    $image: String!
  ) {
    createPost(
      title: $title
      slug: $slug
      category: $category
      markdown: $markdown
      image: $image
    ) {
      id
      title
    }
  }
`
export default graphql(newPostMutation)(observer(NewPost))
