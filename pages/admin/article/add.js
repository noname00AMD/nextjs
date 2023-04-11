import ErrorHandle from '../../../views/ErrorHandle'
import NewArticle from '../../../views/admin/NewArticle'
// import prisma from '../../../prisma/prisma';
// import helper from "../../../helper"
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';
export default function Add(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <NewArticle {...props} />
        </>
    )
}


export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT


    try {
        var siteInfo = await siteInfoM.getAll()
        var categories = await categoryM.getAll()
        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                host,
            },
        }
    } catch (error) {
        throw new Error(error)
        return {
            props: {
                error: error
            }
        }
    }

}
