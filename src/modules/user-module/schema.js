const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        me(id:ID!): User,
    }
    type Mutation {
      login(email: String, senha: String): AuthPayload
      post(email: String!, senha: String!): Link!
    }
    type User {
            id: ID
            username: String
            email: String,
            senha: String
     }

     type Link {
            id: ID
            description: String
            url: String!
            postedBy: User
      }
     type AuthPayload {
        token: String
        user: User
      }
     `;


module.exports = typeDefs;

