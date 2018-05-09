import React from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

function dateConfig(date) {
  const dateSplit = date.split(' ', 4)
  dateSplit.shift()
  dateSplit[1] = dateSplit[1] += ','
  return dateSplit.join(' ')
}

function getBlurb(markdown) {
  const blurbSplit = markdown.split(' ', 20)
  return blurbSplit.join(' ')
}

const BlogReturn = (props) => {
  const { title, category, markdown, image, createdAt, slug } = props
  return (
    <div className="blog-right-container">
      <Row type="flex" justify="start">
        <Col xs={12} sm={3} md={2} lg={8}>
          <div className="blog-image-container">
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        </Col>
        <Col xs={6} sm={6} md={8} lg={16}>
          <div className="blog-right-container-container">
            <div className="blog-title">
              <h1>{title}</h1>
            </div>
            <div className="blog-date"><span>{category}</span> {dateConfig(createdAt)}</div>
            <div className="blog-blurb">{getBlurb(markdown)}...</div>
            <div className="blog-link">
              <Link to={{ pathname: `/posts/${slug}` }}>
                <Button type="dashed">Read More...</Button>
              </Link>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default BlogReturn
