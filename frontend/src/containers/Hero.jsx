import { MotionWrapper } from "../wrapper";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md content">
          <h1 className="text-5xl font-bold">Welcome to Saiyan Prints</h1>
          <p className="py-6 text-xl">
            Send files to{" "}
            <span className="text-primary">print@saiyanprints.com</span> for a
            free quote!
          </p>
          <button className="btn btn-primary">Visit Shop</button>
        </div>
      </div>
    </div>
  );
};

export default MotionWrapper(Hero);
