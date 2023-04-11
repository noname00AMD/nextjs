// // import siteInfo from "../../model/siteInfo"
// import prisma from "../../prisma/prisma";
// export default async function handler(req, res) {

//     try {
//         var site_info = await prisma.siteinfo.findMany()
//         //  await siteInfo.getAll()
//         var data = {}
//         data.keyword = parse(site_info, "keyword")
//         data.thumbTypes = parse(site_info, "thumbTypes")
//         data.langSupport = parse(site_info, "langSupport")
//         res.json(
//             data
//         )
//     } catch (error) {
//         console.error(error);
//     }

// }

