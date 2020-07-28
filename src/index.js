const { AppModule } = require('./modules/');
const { ApolloServer } = require('apollo-server');
const { schema, context } = AppModule;

const server = new ApolloServer({
  schema,
  context: (ctx) => {
    // attempting to pass the header on to the graphql endpoint
    return {'authorization': ctx.req.header('authorization')}
  },
  introspection: true,
});

server.listen().then(({url})=>{ console.log(`Apollo server running in : ${url}`);})
