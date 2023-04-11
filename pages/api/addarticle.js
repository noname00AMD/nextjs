import postModel from "../../model/posts"
// import prisma from "../../prisma/prisma";
export default async function handler(req, res) {
    // if (req.method === 'POST') {
    //     // Process a POST request
    // } else {
    // Handle any other HTTP method
    try {
        // console.log("here", req.body);
        var post = await postModel.create(req.body)

        // post.map(item => {
        //     item.id = item.id.toString()
        //     item.post_author = item.post_author.toString()
        //     item.post_parent = item.post_parent.toString()
        //     item.comment_count = item.comment_count.toString()
        //     return item
        // });
        res.json({
            post

        }
        )
    } catch (error) {
        console.error(error);
        res.json({
            "ok": "sdd"
        })
    }
    // }
}
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '5mb',
        },
    },
}
