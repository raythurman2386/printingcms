import { useState, useEffect } from "react";
import { client } from "../utils";
import { motion } from "framer-motion";
import { Card } from "../components";
import { MotionWrapper } from "../wrapper";

const Materials = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "materials"]';

    client.fetch(query).then((data) => {
      setMaterials(data);
    });
  }, []);
  return (
    <div
      id="materials"
      className="hero min-h-screen bg-base-200 flex flex-col justify-evenly text-center py-20"
    >
      <div className="flex flex-col px-4 w-8/12">
        <h2 className="text-5xl font-bold mb-8">Materials</h2>
        <p className="text-lg">
          There are a variety materials that can be printed depending on the
          strength needed for your item. Contact us today to discuss material
          selection!
        </p>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-center py-8"
      >
        {materials.map((material, i) => (
          <Card item={material} key={material.title + i} />
        ))}
      </motion.div>
    </div>
  );
};

export default MotionWrapper(Materials);
