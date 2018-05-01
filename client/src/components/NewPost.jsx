import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Input, Button, Select } from 'antd'

class NewPost extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      title: '',
      slug: '',
      category: '',
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { title, slug, category } = this
    let response = null
    
    try {
      response = await this.props.mutate({
        variables: { title, slug, category },
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
    const { title, slug } = this
    const Option = Select.Option;
    return (
      <div className="container">
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
        <Button onClick={this.onSubmit}>Submit</Button>
      </div>
    )
  }
}

const newPostMutation = gql`
  mutation($title: String!, $slug: String!, $category: String!) {
    createPost(title: $title, slug: $slug, category: $category) {
      id
      title
    }
  }
`
export default graphql(newPostMutation)(observer(NewPost))
