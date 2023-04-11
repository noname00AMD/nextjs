import prisma from '../prisma/prisma.js';
import { bigintToString } from "../helper"
var user = {}

user.findAll = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {
            var user_arr = bigintToString(await prisma.users.findMany({
                take: limit
            }))
            resolve(user_arr)
        } catch (error) {
            reject(error)
        }
    })
}






export default user
