import React from 'react'
import { Row, Col } from 'antd'
import Markdown from 'react-remarkable'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'
import { Link } from 'react-router-dom'

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

function dateConfig(date) {
  const dateSplit = date.split(' ', 4)
  dateSplit.shift()
  dateSplit[1] = dateSplit[1] += ','
  return dateSplit.join(' ')
}

const PostReturn = (props) => {
  const { title, category, markdown, createdAt, isLoggedIn, slug } = props
  return (
      <Row gutter={10}>
        <Col className="post-col-left" xs={24} sm={24} md={24} lg={6} xl={5}>
          <Row type="flex" justify="center" align="top">
            <Col span={24}>
              <div className="vertical-text">{category}</div>
            </Col>
          </Row>
        </Col>
        <Col className="post-col-right" xs={24} sm={24} md={24} lg={18} xl={19}>
          <div className="post-title">
            <h1>{title}</h1>
            <div className="post-category"><span>{category}</span></div>
            <div className="post-date">{dateConfig(createdAt)}</div>
            {isLoggedIn ? <Link to={{ pathname: `/edit-post/${slug}` }}>Edit Post</Link> : <div>not logged in</div>}
          </div>
          <div className="post-content">
            <Markdown options={{ highlight }} source={markdown} />
          </div>
        </Col>
      </Row>
  )
}

export default PostReturn
