import Layout from "./layout/HomeLayout"
import HomeBody from "./components/HomeBody"

export default function HomePage(props) {
  return (
    <>
      <Layout {...props}>
        <HomeBody {...props} />
      </Layout>
    </>
  )
}
