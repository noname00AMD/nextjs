import AdminLayout from "../layout/AdminLayout"
export default function Article(props) {
    return (
        <>
            <AdminLayout {...props}>
                <ul className="col-9">
                    {props.article.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.post_title}</span>
                                <span>{item.post_date}</span>
                            </li>
                        )
                    })}
                </ul>
            </AdminLayout>
        </>
    )
}
