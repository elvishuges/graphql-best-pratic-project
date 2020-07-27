const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        me(id:ID!): User,
    }
    type Mutation {
      login(email: String, senha: String): AuthPayload
    }
    type User {
            id: ID
            username: String
            email: String,
            senha: String
     }
     type AuthPayload {
        token: String
        user: User
      }
     `;


module.exports = typeDefs;

