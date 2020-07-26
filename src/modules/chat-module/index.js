const { GraphQLModule } = require('@graphql-modules/core') ;
const gql  = require('graphql-tag');

const ChatModule = new GraphQLModule({
  typeDefs : gql`
    # Query é declarada novamente, adicionando apenas a parte relevante
    type Query {
      myChats: [Chat]
    }
    # User é declarado novamente, estendendo qualquer outro tipo de User carregado no appModule
    type User {
      chats: [Chat]
    }
    type Chat {
      id: ID!
      users: [User]
      messages: [ChatMessage]
    }
    type ChatMessage {
      id: ID!
      content: String!
      user: User!
    }
  `,
  resolvers : {
    Query: {
       myChats: (root, args, { getChats, currentUser }) => getChats(currentUser),
    },
    User: {
      // Este módulo implementa apenas a parte do `User` que ele adiciona
      chats: (user, args, { getChats }) => getChats(user),
    },
  }
});


module.exports = { ChatModule };