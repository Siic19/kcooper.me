import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'

import { Input, Button, Select } from 'antd'
const { TextArea } = Input

class NewPost extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      title: '',
      slug: '',
      category: '',
      markdown: '',
    })
  }

  onChange = (e) => {
    const { name, value, markdown } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { title, slug, category, markdown } = this
    let response = null

    try {
      response = await this.props.mutate({
        variables: { title, slug, category, markdown },
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
    const { title, slug, markdown } = this
    const Option = Select.Option
    return (
      <div className="container">
        <Helmet>
          <title>KCooper.me | New Post</title>
        </Helmet>
        <div className="page-header">
          <h1>New Post</h1>
        </div>
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
          <TextArea
            rows={40}
            name="markdown"
            onChange={this.onChange}
            value={markdown}
            placeholder="Write in markdown!"
          />
        </div>
        <Button onClick={this.onSubmit}>Submit</Button>
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
  ) {
    createPost(
      title: $title
      slug: $slug
      category: $category
      markdown: $markdown
    ) {
      id
      title
    }
  }
`
export default graphql(newPostMutation)(observer(NewPost))
