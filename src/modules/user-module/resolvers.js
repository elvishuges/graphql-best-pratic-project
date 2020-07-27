const db = require("./../../db");

const resolvers = {
    Query: {
       me: (root,{ id }) => {
          return db.users.find(user => user.id == id); // poderia ser uma consulta sql.
       },
    }
}

module.exports = resolvers