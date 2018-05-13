import React, { Component } from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Row, Col, Input, Button, Select, Form } from 'antd'
import { graphql, Query, compose, withApollo } from 'react-apollo'
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
      successfullyEdited: false,
    })
  }

  async componentDidMount() {
    const slug = this.props.match.params

    try {
      const response = await this.props.FindPost.refetch({})
      const {
        title,
        category,
        markdown,
        slug,
        image,
        id,
      } = response.data.findPost
      this.title = title
      this.category = category
      this.markdown = markdown
      this.slug = slug
      this.image = image
      this.id = id
    } catch (err) {
      console.log(err)

      return
    }
  }

  onSubmit = async () => {
    console.log(this.id)
    const { title, slug, category, markdown, image, id } = this

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
        this.isLoading = true
        console.log('sp,etjing')
        await this.props.editPost({
          variables: { title, slug, category, markdown, image, id },
        })

        this.successfullyEdited = true
        this.isLoading = false
      } catch (err) {
        console.log(err)

        this.isLoading = false
        return
      }
    }
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  handleSelectChange = (value) => {
    this.category = value
  }

  render() {
    const {
      title,
      markdown,
      image,
      titleError,
      slug,
      slugError,
      category,
      categoryError,
      markdownError,
      imageError,
      isLoading,
    } = this

    return (
      <div className="post-container">
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
                Edit
              </Button>
              {this.successfullyEdited ? <span style={{marginLeft: '10px' }}>Edited!</span> : null}
              <Button loading={isLoading} onClick={this.onSubmitDelete} type="danger" style={{marginLeft: '10px'}}>
                Delete
              </Button>
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

const findPostQuery = gql`
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

const editPostMutation = gql`
  mutation(
    $title: String!
    $slug: String!
    $category: String!
    $markdown: String!
    $image: String!
    $id: Int!
  ) {
    editPost(
      title: $title
      slug: $slug
      category: $category
      markdown: $markdown
      image: $image
      id: $id
    )
  }
`

const EditPostMutations = compose(
  graphql(findPostQuery, {
    name: 'FindPost',
    options: (props) => ({ variables: { slug: props.match.params.slug } }),
  }),
  graphql(editPostMutation, { name: 'editPost' }),
)(observer(EditPost))

export default EditPostMutations

// export default withApollo(EditPost)
