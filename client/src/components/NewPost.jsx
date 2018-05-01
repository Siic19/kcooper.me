import React from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Input, Button } from 'antd'

class NewPost extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      title: '',
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { title } = this
    let response = null

    try {
      response = await this.props.mutate({
        variables: { title },
      })
    } catch (err) {
      console.log(response);
      
      this.props.history.push('/login')
      return
    }
  }

  render() {
    const { title } = this
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
          placeholder="title"
          fluid
        />
      </div>
      <Button onClick={this.onSubmit}>Submit</Button>
    </div>
    )
  }
}

const newPostMutation = gql`
  mutation($title: String!) {
    createPost(title: $title) {
      id
      title
    }
  }
`
export default graphql(newPostMutation)(observer(NewPost))
