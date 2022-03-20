import { useState, useEffect } from "react";
import { client } from "../utils";
import { motion } from "framer-motion";
import { Card } from "../components";
import { MotionWrapper } from "../wrapper";

const Affiliates = () => {
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const query = '*[_type == "affiliates"]';

    client.fetch(query).then((data) => {
      setAffiliates(data);
    });
  }, []);

  return (
    <div
      id="affiliates"
      className="hero min-h-screen bg-base-200 flex flex-col justify-evenly text-center py-20"
    >
      <div className="flex flex-col px-4 w-8/12">
        <h2 className="text-5xl font-bold mb-8">Affiliates</h2>
        <p className="text-lg">
          Are you looking to start your 3D printing journey? Check out our
          affiliates for great prices! Contact us for more information!
        </p>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-center py-8"
      >
        {affiliates.map((affiliate, i) => (
          <Card item={affiliate} key={affiliate.title + i} />
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrapper(Affiliates);
