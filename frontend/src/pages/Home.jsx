import {
  About,
  Affiliates,
  Hero,
  Materials,
  Services,
  Contact,
} from "../containers";
import { Layout } from "../wrapper";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Materials />
      <About />
      <Affiliates />
      <Contact />
    </>
  );
};
export default Layout(Home, "home");
