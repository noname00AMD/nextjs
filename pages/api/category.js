// // import categoryModel from "../../model/category"
// import helper from "../../helper"
// import prisma from "../../prisma/prisma"
// export default async function handler(req, res) {
//     // if (req.method === 'categories') {
//     //     // Process a categories request
//     // } else {
//     // Handle any other HTTP method
//     try {
//         var categories = await prisma.category.findMany()
//         console.log(categories);
//         // helper.bigintToString(await categoryModel.getAll())
//         // console.log(categories);

//         //  categories.map(item => {
//         //     console.log(item)

//         //     item.id = item.id.toString()
//         //     item.size = item.size.toString()
//         //     if (item.parent) {
//         //         item.parent = item.parent.toString()
//         //     }
//         //     return item
//         // });
//         res.json(
//             categories
//         )
//     } catch (error) {
//         console.error(error);
//     }
//     // }
// }
