import Header from '../components/Header'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

export default function AdminLayout(props) {
    return (
        <>
            <Header {...props} />
            <div className="cont">
                <div className="row">
                    <NavigationBar {...props} />
                    {props.children}

                </div>
            </div>
            <Footer {...props} />
        </>
    )
}
