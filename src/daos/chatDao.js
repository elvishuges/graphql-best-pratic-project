var con = require('./../mysql/connectionMysql');

exports.messages = function () {

    return new Promise(function (fulfill, reject) {

        var sql = "select * from messages";
        con.query(sql, function (err, result) {
            console.log("ERRO: " + err);
                fulfill(result[0]);
        });
    })
}
