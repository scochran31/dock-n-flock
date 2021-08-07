

// Import the gql template function
const { gql } = require('apollo-server-express');


// Create typeDefs here
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }


  type Auth {
    token: ID!
    user: User
  }


  type Query {

  }


  type Mutation {

  }

`;

// Export typeDefs
module.exports = typeDefs;