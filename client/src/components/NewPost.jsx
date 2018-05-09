import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'

import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'

import { Input, Button, Select, Col, Row } from 'antd'
const { TextArea } = Input

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
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { title, slug, category, markdown, image } = this
    let response = null

    try {
      response = await this.props.mutate({
        variables: { title, slug, category, markdown, image },
      })
    } catch (err) {
      console.log(response)

      this.props.history.push('/login')
      return
    }
  }

  handleSelectChange = (value) => {
    this.category = value
  }

  render() {
    const { title, slug, markdown, image } = this
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
                <Input
                  name="title"
                  onChange={this.onChange}
                  value={title}
                  placeholder="Title..."
                />
              </div>
              <div className="input">
                <Input
                  name="slug"
                  onChange={this.onChange}
                  value={slug}
                  placeholder="Slug.."
                />
              </div>
              <div className="input">
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
              </div>
              <div className="input">
                <Input
                  name="image"
                  onChange={this.onChange}
                  value={image}
                  placeholder="Image link here..."
                />
              </div>
              <div className="input">
                <TextArea
                  rows={33}
                  name="markdown"
                  onChange={this.onChange}
                  value={markdown}
                  placeholder="Write in markdown!"
                />
              </div>
              <Button onClick={this.onSubmit}>Submit</Button>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="end" gutter={10}>
          <Col xs={24} sm={24} md={17} lg={18} xl={19}>
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
