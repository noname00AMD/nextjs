import ErrorHandle from '../../../views/ErrorHandle'
import NewUser from '../../../views/admin/NewUser'
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';
import userM from '../../../model/user';
export default function Add(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <NewUser {...props} />
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
