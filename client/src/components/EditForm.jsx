import React from 'react'
import { Row, Col, Input, Button, Select, Form } from 'antd'
const { TextArea } = Input
const FormItem = Form.Item
const Option = Select.Option

const EditForm = (props) => {
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
    onChange
  } = props
  return (
    <div>
      <div className="input">
        <FormItem hasFeedback validateStatus={titleError ? 'warning' : null}>
          <Input
            name="title"
            onChange={onChange}
            value={title}
            placeholder="Title..."
          />
        </FormItem>
      </div>
      <div className="input">
        <FormItem hasFeedback validateStatus={slugError ? 'warning' : null}>
          <Input
            name="slug"
            onChange={onChange}
            value={slug}
            placeholder="Slug.."
          />
        </FormItem>
      </div>
      <div className="input">
        <FormItem hasFeedback validateStatus={categoryError ? 'warning' : null}>
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
        <FormItem hasFeedback validateStatus={imageError ? 'warning' : null}>
          <Input
            name="image"
            onChange={onChange}
            value={image}
            placeholder="Image link here..."
          />
        </FormItem>
      </div>
      <div className="input">
        <FormItem hasFeedback validateStatus={markdownError ? 'warning' : null}>
          <TextArea
            rows={25}
            name="markdown"
            onChange={onChange}
            value={markdown}
            placeholder="Write in markdown!"
          />
        </FormItem>
      </div>
    </div>
  )
}

export default EditForm
