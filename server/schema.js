export default `

  type User {
    id: Int!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String! 
  }

  type Post {
    id: Int!
    title: String!
    createdAt: String!
  }

  type Query {
    allUsers: [User!]!
    loggedInUser: User
    allPosts(last: Int): [Post!]!
    findPost(slug: String!): Post!
  }

  type Mutation {
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    register(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): String! 
    createPost(title: String!): Post!
  }
`;
