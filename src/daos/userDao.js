var con = require('./../mysql/connectionMysql');

exports.login = function (username, password) {

    return new Promise(function (fulfill, reject) {
        console.log("Username: " + username);
        console.log("Password: " + password);

        var sql = "select * from users"
        var result = con.query(sql, function (err, result) {
            console.log("ERRO: " + result);
            return fulfill(result);
        });
        return result
    })
}
