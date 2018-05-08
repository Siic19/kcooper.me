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

const PostsReturn = (props) => {
  const { title, category, markdown } = props
  return <div className="posts-right-container"> {(title, category, markdown)}</div>
}

export default PostsReturn
