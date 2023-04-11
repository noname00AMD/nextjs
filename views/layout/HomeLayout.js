
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadHomepage from "../head/HeadHomepage"

export default function Layout(props) {
  return (
    <>
      <HeadHomepage {...props} />
      <Header {...props} />

      {props.children}

      <Footer {...props} />
    </>
  )
}
