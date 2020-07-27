const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        me(id:ID!): User,
      }
      type User {
            id: ID
            username: String
            email: String
      }
      `;


module.exports = typeDefs;

