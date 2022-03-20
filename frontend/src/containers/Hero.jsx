import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen">
      <div className="hero-content text-center">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-md content"
        >
          <h1 className="text-5xl font-bold">Welcome to Saiyan Prints</h1>
          <p className="py-6 text-xl">
            Send files to{" "}
            <span className="text-primary">quotes@saiyanprints.com</span> for a
            free quote!
          </p>
          <button className="btn btn-primary">Visit Shop</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
