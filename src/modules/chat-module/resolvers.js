const db = require('./../../db')

const resolvers = {
    Query: {
       myChats: () =>  { return db.chats },// add sql query aqui.
    },
    Chat: {
      //Este módulo implementa apenas a parte do `User` que ele adiciona
      users: (chat) =>  db.users.filter((user)=> user.chat_id == chat.id ),
      messages:(chat)=>  db.chatMessages.filter((chatMessage)=> chat.id == chatMessage.chat_id )
    },
  }

  module.exports = resolvers