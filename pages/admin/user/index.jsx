import ErrorHandle from '../../../views/ErrorHandle'
import AdminUser from '../../../views/admin/User'
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';
import userM from '../../../model/user';
export default function User(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <AdminUser {...props} />
        </>
    )
}

export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    var user_arr = await userM.findAll()

    try {

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                host,
                user_arr
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
