const { GraphQLModule } = require('@graphql-modules/core') ;
const gql  = require('graphql-tag');
const typeDefs = require('./schema')
const db = require('./../../db')

const ChatModule = new GraphQLModule({
  typeDefs,
  resolvers : {
    Query: {
       myChats: (root) =>
           db.chats // add sql query aqui.
    },
  }
});

module.exports = { ChatModule };