// import p from './database.js'
var p = require("./database1")
p((err, conn) => {
    if (err) {
        console.log("err", err);
    }
    var limit = 20
    conn.query("SELECT * FROM users limit ?;", [limit], function (err, rows, fields) {
        if (err) {
            if (conn) {
                conn.end(() => {
                    console.log("errend");
                })
            }
            console.log("err", err);

        }
        conn.end(() => {
            console.log("end");
            console.log("ok", rows);
        })
    })
}
)
