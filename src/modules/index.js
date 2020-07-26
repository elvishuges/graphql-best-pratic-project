const { GraphQLModule } = require('@graphql-modules/core') ;
const { UserModule } = require('./user-module') ;
const { ChatModule } = require('./chat-module');
 const AppModule = new GraphQLModule({
  imports: [
    UserModule,
    ChatModule,
  ],
})

module.exports = { AppModule };