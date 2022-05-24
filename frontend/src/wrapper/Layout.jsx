import { Footer, Navbar, Alert } from "../components";

const Layout = (Component) =>
  function HOC() {
    return (
      <>
        <Navbar />
        <Alert />
        <Component />
        <Footer />
      </>
    );
  };

export default Layout;
