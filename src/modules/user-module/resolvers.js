const db = require("./../../db");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('./../../utils')

const resolvers = {
    Query: {
       me: (root,{ id }) => {
          return db.users.find(user => user.id == id); // poderia ser uma consulta sql.
       },
    },
    Mutation: {
        login: async (_,{ email,senha }) =>  {
            console.log(email);
            const token = jwt.sign({ userId: email }, APP_SECRET)
            const user = db.users.find(user=>
               user.email == email
            )
            return { token,user }
        }
    }
}

module.exports = resolvers
