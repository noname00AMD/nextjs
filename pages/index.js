import HomePage from '../views/Homepage'
import ErrorHandle from '../views/ErrorHandle'
// import prisma from '../prisma/prisma';
// import helper from "../helper"
import categoryM from "../model/category"
import siteInfoM from '../model/siteInfo';
export default function Home(props) {
    if (props.error) {
        console.error("err : ", props.error);
        return <ErrorHandle {...props} />
    }
    return (<>
        <HomePage {...props} />
    </>)
}
export async function getStaticProps(ctx) {
    var canonical = process.env.HOST
    var url = process.env.HOST
    var admin_path = process.env.ADMIN_PATH
    var trendingTags = []
    var host = process.env.HOST
    try {

        var siteInfo = await siteInfoM.getAll()
        var categories = await categoryM.getAll()

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
                canonical,
                url,
                trendingTags,
                host
            },
            revalidate: 60,
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                error: JSON.stringify(error)
            }
        }
    }


}
