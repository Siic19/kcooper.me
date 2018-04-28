import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = ({ data: { loading, allPosts } }) => {
    var layout1 = [
      { i: 'a', x: 0, y: 0, w: 6, h: 4, static: true },
      { i: 'b', x: 6, y: 0, w: 3, h: 2, static: true },
      { i: 'c', x: 9, y: 0, w: 3, h: 2, static: true },
      { i: 'd', x: 6, y: 2, w: 3, h: 2, static: true },
      { i: 'e', x: 9, y: 2, w: 3, h: 2, static: true },
      { i: 'f', x: 0, y: 4, w: 3, h: 2, static: true },
      { i: 'g', x: 3, y: 4, w: 3, h: 2, static: true },
      { i: 'h', x: 6, y: 4, w: 3, h: 2, static: true },
      { i: 'i', x: 9, y: 4, w: 3, h: 2, static: true },
      { i: 'j', x: 0, y: 4, w: 3, h: 2, static: true },
      { i: 'k', x: 3, y: 4, w: 3, h: 2, static: true },
      { i: 'l', x: 6, y: 4, w: 3, h: 2, static: true },
      { i: 'm', x: 9, y: 4, w: 3, h: 2, static: true },
    ]
    var layouts = {lg: layout1}
  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div className="masonry-cell" key="a">a</div>
        <div className="masonry-cell2" key="b">b</div>
        <div className="masonry-cell2" key="c">c</div>
        <div className="masonry-cell2" key="d">b</div>
        <div className="masonry-cell2" key="e">c</div>
        <div className="masonry-cell2" key="f">b</div>
        <div className="masonry-cell2" key="g">c</div>
        <div className="masonry-cell2" key="h">b</div>
        <div className="masonry-cell2" key="i">c</div>
        <div className="masonry-cell2" key="j">b</div>
        <div className="masonry-cell2" key="k">c</div>
        <div className="masonry-cell2" key="l">b</div>
        <div className="masonry-cell2" key="m">c</div>
      </ResponsiveGridLayout>
      {loading
        ? null
        : allPosts
            .slice(0)
            .reverse()
            .map((post) => <h1 key={post.id}>{post.title}</h1>)}
    </div>
  )
}

const allPostsQuery = gql`
  {
    allPosts {
      id
      title
    }
  }
`

export default graphql(allPostsQuery)(Home)
