const { GraphQLModule } = require ('@graphql-modules/core');
const gql = require('graphql-tag') ;
 const UserModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      me(id:ID!): User
    }
    # Este é o User inicial, com apenas o mínimo de um objeto de usuário
    type User {
      id: ID!
      username: String!
      email: String!
    }
  `,
  resolvers: {
    Query: {
       me: (root) => {
        return {
          id: id,
          username: 'jhon',
          email:"elvishuges@hotmail.com"
        };
       },
    },
    User: {
      id: user => user._id,
      username: user => user.username,
      email: user => user.email.address,
    },
  },
});

module.exports = { UserModule };