
let { dbname, host, password, port, user } = {
    host: process.env.MYSQL_URI,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    dbname: process.env.MYSQL_DBNAME,
    port: process.env.MYSQL_PORT
}



import mariadb from 'mariadb/callback';

var pool = mariadb.createPool({
    user: user,
    password: password,
    host: host,
    port: Number(port),
    database: dbname,
    connectionLimit: 10,
    noControlAfterUse: true,
    resetAfterUse: true,
    idleTimeout: 1,
    acquireTimeout: 1000,
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


export default function connectToDatabase(callback) {
    console.log("active", pool.activeConnections());
    console.log("ide", pool.idleConnections());
    console.log("total", pool.totalConnections());
    pool.getConnection(function (err, connection) {
        callback(err, connection);
    });
}
