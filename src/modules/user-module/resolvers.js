const db = require("./../../db");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userDao = require('./../../daos/userDao')
const { APP_SECRET, getUser } = require('./../../utils')

const resolvers = {
    Query: {
       me: (root,{ id }) => {
          return db.users.find(user => user.id == id); // poderia ser uma consulta sql.
       },
    },
    Mutation: {
        login: async (_,{ email,senha }) =>  {

            const login = userDao.login(email,senha)

            return login.then((result)=>{
                if(result){
                    const token = jwt.sign({ user: user }, APP_SECRET)
                    return { token, user }
                 }
            }).catch(()=>{
                throw new Error('No such user found')
            })


        },

        post: async (parent, args, ctx, req) =>{
            const user  = getUser(req.session)
            return user
        }
    }
}

module.exports = resolvers
