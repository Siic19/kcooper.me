export default `

  type User {
    id: Int!
    username: String!
    email: String!
    createdAt: String
    updatedAt: String
  }

  type Post {
    id: Int!
    title: String!
    slug: String!
    markdown: String!
    image: String!
    category: String!
    createdAt: String!
  }

  type Query {
    allUsers: [User!]!
    loggedInUser: User
    allPosts(last: Int, offset: Int): [Post!]!
    findPost(slug: String!): Post!
  }

  type Mutation {
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    register(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): String! 
    createPost(title: String!, slug: String!, category: String!, markdown: String!, image: String!): Post!
    sendEmail(firstName: String!, lastName: String!, emailAddress: String!, subject: String!, text: String!): Boolean!
  }
`;
