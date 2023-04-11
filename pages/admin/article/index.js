import ErrorHandle from '../../../views/ErrorHandle'
import AdminArticle from '../../../views/admin/Article'
// import prisma from '../../../prisma/prisma';
// import helper from "../../../helper"
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';
import postsM from '../../../model/posts';
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
export default function Article(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <AdminArticle {...props} />
        </>
    )
}

export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT

    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()

    var article = await postsM.findAll()

    try {

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                host,
                article
            },
        }
    } catch (error) {

        return {
            props: {
                error: JSON.stringify(error)
            }
        }
    }

}
