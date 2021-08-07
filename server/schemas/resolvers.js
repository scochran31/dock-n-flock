const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { SignToken } = require('../utils/auth');


const resolvers = {
  Query: {
     // Queries go here
  },


  Mutation: {
    // Mutations go here
  }
 
}


module.exports = resolvers;