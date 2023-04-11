import AdminLayout from "../layout/AdminLayout"

export default function Category(props) {
    return (
        <>
            <AdminLayout {...props}>
                <ul className="col-9">
                    {props.categories.map((item, index) => {
                        return (

                            <li key={index}>
                                <span>{item.id}</span>
                                <span>{item.cate_name}</span>
                                <span>{item.slug}</span>
                                <span>{item.visible}</span>
                                <span>{item.size}</span>
                                <span>{item.parent}</span>
                                <span>{item.type}</span>
                                <span>{item.description}</span>
                            </li>
                        )
                    })}
                </ul>
            </AdminLayout>
        </>
    )
}
