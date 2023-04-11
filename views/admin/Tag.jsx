import AdminLayout from "../layout/AdminLayout"
export default function User(props) {
    return (
        <>
            <AdminLayout {...props}>
                <ul>
                    {props.tag_arr.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.tag_name}</span>
                                <span>{item.slug}</span>
                                <span>{item.size}</span>
                            </li>
                        )
                    })}
                </ul>
            </AdminLayout>
        </>
    )
}
