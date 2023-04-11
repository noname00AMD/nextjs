import ErrorHandle from '../../../views/ErrorHandle'
import AdminTag from '../../../views/admin/Tag'
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';
import tagM from '../../../model/tag';
// import userM from '../../../model/user';
export default function Tag(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <AdminTag {...props} />
        </>
    )
}

export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    var tag_arr = await tagM.findAll()
    try {

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                host,
                tag_arr
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
