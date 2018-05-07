import React from 'react'
import { Row, Col } from 'antd'

import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'

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

const PostReturn = (props) => {
  const { title, category, markdown } = props
  return (
      <Row gutter={10}>
        <Col className="post-col-left" xs={24} sm={24} md={17} lg={6} xl={5}>
          <Row type="flex" justify="center" align="top">
            <Col span={24}>
              <div className="vertical-text">{category}</div>
            </Col>
          </Row>
        </Col>
        <Col className="post-col-right" xs={24} sm={24} md={17} lg={18} xl={19}>
          <div className="post-title">
            <h1>{title}</h1>
            <hr />
          </div>
          <div className="post-content">
            <Markdown options={{ highlight }} source={markdown} />
          </div>
        </Col>
      </Row>
  )
}

export default PostReturn
