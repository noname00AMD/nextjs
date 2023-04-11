import ErrorHandle from '../../../views/ErrorHandle'
import NewTag from '../../../views/admin/NewTag'
import categoryM from "../../../model/category"
import siteInfoM from '../../../model/siteInfo';

export default function AddTag(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <NewTag {...props} />
        </>
    )
}


export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()

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
