const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId(session) {

  const Authorization = session.authorization
  const token = Authorization.replace('Bearer ', '')
  //console.log("token",token);
  const { user } = jwt.verify(token, APP_SECRET)
  if (!user) throw new Error('you must be logged in');
    return user
}

module.exports = {
  APP_SECRET,
  getUserId,
}