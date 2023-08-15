import { FacebookChat } from "./components";
import {
  About,
  Affiliates,
  Hero,
  Materials,
  Services,
  Contact,
} from "./containers";
import { Layout } from "./wrapper";

const App = () => {
  return (
    <>
      <Hero />
      <Services />
      <Materials />
      <About />
      <Affiliates />
      <Contact />
      <FacebookChat />
    </>
  );
};
export default Layout(App);
