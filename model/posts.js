import prisma from '../prisma/prisma';
import { bigintToString } from "../helper"
var post = {}
post.create = function (postData) {
    return new Promise(async (resolve, reject) => {
        try {

            var post_arr = await prisma.posts.create({
                data: {
                    post_status: 'elsa@prisma.io',
                    post_title: 'Elsa Prisma',
                }
            })
            resolve(post_arr)
        } catch (error) {
            reject(error)
        }
    })
}


post.findAll = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {

            var post_arr = bigintToString(await prisma.posts.findMany({ take: limit }))
            resolve(post_arr)
        } catch (error) {
            reject(error)
        }
    })
}
post.findAllMedia = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {

            var post_arr = bigintToString(await prisma.posts.findMany({
                take: limit,
                where: {
                    post_type: "media"
                }
            }))
            resolve(post_arr)
        } catch (error) {
            reject(error)
        }
    })
}

export default post
