import ErrorHandle from '../../views/ErrorHandle'
import SiteInfo from '../../views/admin/SiteInfo'
// import prisma from '../../prisma/prisma';
import helper from "../../helper"
import categoryM from "../../model/category"
import siteInfoM from '../../model/siteInfo';
export default function Admin(props) {
    if (props.error) {
        console.error(props.error);
        return <ErrorHandle {...props} />
    }
    return (
        <>
            <SiteInfo {...props} />
        </>
    )
}

export async function getServerSideProps({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.HOST

    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()


    try {

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                host
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
