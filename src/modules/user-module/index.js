const { GraphQLModule } = require ('@graphql-modules/core');
const gql = require('graphql-tag') ;
const typeDefs = require('./schema.js') ;
const resolvers = require("./resolvers");


 const UserModule = new GraphQLModule({
  typeDefs,
  resolvers
  });

module.exports = { UserModule };