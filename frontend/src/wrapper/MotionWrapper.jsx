import { motion } from "framer-motion";

const MotionWrapper = (Component) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
      >
        <Component />
      </motion.div>
    );
  };
export default MotionWrapper;