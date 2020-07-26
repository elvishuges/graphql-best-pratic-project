const { gql } = require('apollo-server')

const typeDefs = gql`

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
`;

module.exports = typeDefs