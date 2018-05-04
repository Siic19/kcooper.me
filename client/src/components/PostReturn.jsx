import React from 'react'
import { Row, Col } from 'antd'

import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/ocean.css'

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
  const { title, category, primaryColor, secondaryColor, markdown } = props
  return (
    <div
      style={{
        background: `repeating-linear-gradient( 45deg, ${primaryColor}, ${primaryColor} 10px, ${secondaryColor} 10px, ${secondaryColor} 20px)`,
      }}
    >
      <Row>
        <Col className="post-col-left" xs={24} sm={24} md={7} lg={6} xl={5}>
          <div className="vertical-text">{category}</div>
        </Col>
        <Col
          className="post-col-right"
          style={{ backgroundColor: `${primaryColor}` }}
          xs={24}
          sm={24}
          md={17}
          lg={18}
          xl={19}
        >
          <div className="post-title">
            <h1 style={{ color: `${primaryColor}` }}>{title}</h1>
            <hr />
          </div>
          <div className="post-content">
            <Markdown options={{ highlight }} source={markdown}></Markdown>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PostReturn
