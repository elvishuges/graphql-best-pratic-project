const { GraphQLModule } = require('@graphql-modules/core') ;
const gql  = require('graphql-tag');
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const ChatModule = new GraphQLModule({
  typeDefs,
  resolvers
});

module.exports = { ChatModule };