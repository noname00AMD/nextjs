// // import userModel from "../../model/user"
// import helper from "../../helper"
// import prisma from "../../prisma/prisma"
// export default async function handler(req, res) {
//     try {
//         var user_arr = await prisma.users.findMany({ limit: 15 })
//         // var user_arr = helper.bigintToString(await userModel.findAll(15))

//         res.json(
//             user_arr
//         )
//     } catch (error) {
//         console.error(error);
//         res.setStatus(500)
//         res.end()
//     }
//     // }
// }
