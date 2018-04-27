import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Home = ({data: {loading, allPosts}}) => 
(loading ? null : allPosts.map(post => <h1 key={post.id}>{post.title}</h1>
))

const allPostsQuery = gql`
{
    allPosts {
        id
        title
    }
}
`

export default graphql(allPostsQuery)(Home);
