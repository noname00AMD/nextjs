import AdminLayout from "../layout/AdminLayout"
export default function User(props) {
    return (
        <>
            <AdminLayout {...props}>
                <ul>
                    {props.media_arr.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.post_author_id}</span>
                                <span>{item.post_mime_type}</span>
                            </li>
                        )
                    })}
                </ul>
            </AdminLayout>
        </>
    )
}
