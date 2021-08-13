const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Lot {
    _id: ID
    lotid: String
    address: [String]
    description: String
    link: String
    title: String
  }

  type Event {
    _id: ID
    eventId: String
    category: [String]
    description: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    lotCount: Int
    eventCount: Int
    savedLots: [Lot]
    savedEvents: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  input SavedLotInput {
    lotid: String
    address: [String]
    description: String
    link: String
    title: String
  }

  input SavedEventInput {
    eventId: String
    category: [String]
    description: String
    link: String
    title: String
  }
`;

module.exports = typeDefs;