var con = require('../mysql/conectionMysql');

exports.login = function (username, password) {

    return new Promise(function (fulfill, reject) {
        console.log("Username: " + username);
        console.log("Password: " + password);

        var sql = "select * from user where email = '" + username + "' and senha = '" + password + "'";
        con.query(sql, function (err, result) {
            console.log("ERRO: " + err);
            if (result[0] != undefined) {
                console.log("Aqui!");
                result[0].funcao = "user"
                fulfill(result[0]);
            } else {
                var sql = "select * from atendente where email = '" + username + "' and senha = '" + password + "'";
                con.query(sql, function (err, result) {
                    console.log("ERRO: " + err);
                    if (result[0] != undefined) {
                        console.log("Aqui2!");

                        result[0].funcao = "atendente"
                        fulfill(result[0]);
                    } else {
                        fulfill("erro");
                    }
                });
            }
        });
    })
}
