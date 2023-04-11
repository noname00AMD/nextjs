import prisma from '../prisma/prisma';
import { bigintToString } from "../helper"
var allCategory
var cat = {}

cat.findAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var categories = bigintToString(await prisma.category.findMany({
                where: {
                    visible: true
                }
            }))
            resolve(categories)
        } catch (error) {
            reject(error)
        }
    })
}

cat.getAll = function () {
    return new Promise(async (resolve, reject) => {
        if (allCategory) {
            return resolve(allCategory)
        }
        cat.findAll().then((rs) => {
            allCategory = rs
            resolve(allCategory)
        }).catch((e) => {
            reject(e)
        })
    })
}

export default cat
