//const {ApolloServer,gql} = require('apollo-server')
const { AppModule } = require('./modules/');
const { ApolloServer } = require('apollo-server');
const { schema, context } = AppModule;

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
});

server.listen().then(({url})=>{ console.log(`Apollo server running in : ${url}`);})

// const typeDefs = gql `
//    type Query{
//      hello:String
//    }
// `;

// const resolvers = {
//     Query: {
//         hello: (parent, { id }, context, info) => {
//             return "Hello world"
//         },
//     },
// }


 //const server = new ApolloServer({typeDefs,resolvers});

 //server.listen().then(({url})=>{ console.log(`Apollo server running in : ${url}`);})