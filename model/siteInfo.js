import prisma from '../prisma/prisma';
import helper from "../helper"
var allSiteInfo
var data = {}
var siteInfo = {}
// siteInfo.create = function (key, value) {
//     var conn = connectToDatabase()
//     return new Promise((resolve, reject) => {
//         conn.query("insert into siteInfo (key, value) values  (?,?)", [key, value], function (err, rows, fields) {
//             if (err) {
//                 return reject(err)
//             }
//             siteInfo.findAll().then((rs, err) => {
//                 if (err) {
//                     console.log("err", err)
//                     return
//                 }
//                 siteInfo = allSiteInfo = rs;
//                 return resolve(rows)
//             })
//         })
//     })
// }
siteInfo.findAll = function () {
    // var pool = connectToDatabase()
    return new Promise(async (resolve, reject) => {
        try {
            var site_info = await prisma.siteinfo.findMany()
            resolve(site_info)
        } catch (error) {
            reject(error)
        }
    })
}
// siteInfo.findById = function (id) {
//     var conn = connectToDatabase()
//     return new Promise((resolve, reject) => {
//         conn.query("SELECT * FROM siteInfo where  id = ?;", [id], function (err, rows, fields) {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(rows)
//         })
//     })
// }





siteInfo.getAll = async function () {
    return new Promise(async (resolve, reject) => {
        if (Object.keys(data).length !== 0) {
            return resolve(data)
        }
        siteInfo.findAll().then(rs => {
            allSiteInfo = rs
            data.keyword = parse(allSiteInfo, "keyword")
            data.thumbTypes = parse(allSiteInfo, "thumbTypes")
            data.langSupport = parse(allSiteInfo, "langSupport")
            data.langDefault = parse(allSiteInfo, "langDefault")
            // console.log(data);
            resolve(data)
        }).catch(e => {
            reject(e)
        })
    })
}


function parse(rs, key) {
    return rs.filter(element => {
        if (element.key === key) {
            return true
        }
    }).map(element => {
        return element.value
    })
}



export default siteInfo
