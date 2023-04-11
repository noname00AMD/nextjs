import ErrorHandle from '../../../views/ErrorHandle'
import AdminMedia from '../../../views/admin/Media'
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';
import postM from '../../../model/posts';
export default function Media(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <AdminMedia {...props} />
        </>
    )
}

export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    var media_arr = await postM.findAllMedia()

    try {

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                host,
                media_arr
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
