import { useState, useEffect } from "react";
import { client } from "../utils";
import { motion } from "framer-motion";
import { MotionWrapper } from "../wrapper";
import { ServiceCard } from "../components";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <div
      id="services"
      className="hero min-h-screen bg-neutral-content text-base-200 flex flex-col justify-evenly text-center py-10"
    >
      <div className="flex flex-col px-4 w-8/12">
        <h2 className="text-5xl font-bold mb-8">Services</h2>
        <p className="text-lg">
          3D Printing has endless possibilities, from toys to functional boat
          and car parts. Your appliances may even have some printed parts from
          the factory!
        </p>
      </div>
      {/* TODO: Animation for cards  */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center"
      >
        {services.map((service, i) => (
          <ServiceCard service={service} key={service.title + i} />
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrapper(Services);
