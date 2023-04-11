
let { dbname, host, password, port, user } = {
    host: "localhost",
    user: "root",
    password: "admin",
    dbname: "news",
    port: 3306
}



// import mariadb from 'mariadb/callback';
var mariadb = require('mariadb/callback');

var pool = mariadb.createPool({
    user: user,
    password: password,
    host: host,
    port: Number(port),
    database: dbname,
    // connectionLimit: 1000,
    // acquireTimeout: 1000000,
    trace: true // dev env

})
pool.on("connection", (e) => {
    console.log("database connected", e.info.threadId)
})
pool.on("release", (e) => {
    console.log("database release", e.info.threadId)
})
pool.on("acquire", (e) => {
    console.log("database acquire", e.info.threadId)
})
pool.on("enqueue", (e) => {
    console.log("database enqueue")
})
pool.on("error", (e) => {
    console.log("database error", e)
})


module.exports = function connectToDatabase(callback) {
    pool.getConnection(function (err, connection) {
        callback(err, connection);
    });
}
