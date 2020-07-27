const { gql } = require('apollo-server')

const typeDefs = gql`
# Query é declarada novamente, adicionando apenas a parte relevante
type Query {
  myChats: [Chat]
}
# User é declarado novamente, estendendo qualquer outro tipo de User carregado no appModule
type User {
  myChats: [Chat]
}
type Chat {
  id: ID!
  title: String
  users: [User]
  messages: [ChatMessage]
}
type ChatMessage {
  id: ID!
  content: String!
}
`;

module.exports = typeDefs