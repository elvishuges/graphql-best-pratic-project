const { GraphQLModule } = require ('@graphql-modules/core');
const gql = require('graphql-tag') ;
const typeDefs = require('./schema.js') ;
const db = require("./../../db");


 const UserModule = new GraphQLModule({
  typeDefs,
  resolvers: {
    Query: {
       me: (root,{ id }) => {
          return db.users.find(user => user.id == id); // pderia ser uma consulta sql.
       },
    },
  },
});

module.exports = { UserModule };