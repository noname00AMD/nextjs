import AdminLayout from "../layout/AdminLayout"
export default function User(props) {
    return (
        <>
            <AdminLayout {...props}>
                <ul>
                    {props.user_arr.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.user_nicename}</span>
                                <span>{item.user_email}</span>
                                <span>{item.user_status}</span>
                                <span>{item.display_name}</span>
                            </li>
                        )
                    })}
                </ul>
            </AdminLayout>
        </>
    )
}
