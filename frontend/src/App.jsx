import { useEffect } from "react";
import ReactGA from 'react-ga'
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
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  })
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
export default Layout(App);
