import { Footer, Navbar } from '../components'

const Layout = (Component) => function HOC() {
  return (
    <>
        <Navbar />
        <Component />
        <Footer />
    </>
  )
}

export default Layout