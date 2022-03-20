import { useState, useEffect } from "react";
import { client, urlFor } from "../utils";
import { motion } from "framer-motion";
import { MotionWrapper } from "../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div
      id="about"
      className="hero min-h-screen bg-neutral-content text-base-200 flex flex-col justify-evenly text-center py-20"
    >
      <div className="flex flex-col px-4 w-8/12">
        <h2 className="text-5xl font-bold mb-8">About</h2>
        <p className="text-lg">
          See where we have come from and follow our journey!
        </p>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.3 }}
        className="grid grid-row-4 gap-4 text-center p-8"
      >
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="flex flex-col justify-center align-center my-10"
          >
            <p className="p-2 text-lg">{about.date}</p>
            <img
              height={150}
              width={150}
              className="rounded-full m-auto p-2 bg-slate-200"
              src={urlFor(about.imgUrl)}
              alt={about.title}
            />
            <h2 className="text-2xl font-semibold py-4" key={about.title + i}>
              {about.title}
            </h2>
            <p className="m-auto text-center sm:w-8/12 md:w-10/12 lg:w-6/12">
              {about.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrapper(About);
