import AsminLayout from "../layout/AdminLayout"
export default function AdminDashboard(props) {
    console.log(props.siteInfo);
    return (
        <>
            <AsminLayout {...props}>
                <div className="col-9">

                    <h1>siteInfo</h1>
                    {Object.keys(props.siteInfo).map((key) => {
                        return (<>
                            <div>
                                <label>{key}</label>
                                <input style={{ outline: "1px solid black" }} value={props.siteInfo[key]}></input>
                            </div>
                        </>)
                    })}
                </div>
            </AsminLayout>
        </>
    )
}
