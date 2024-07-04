import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion";

// High Order Component (HOC)
const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        className="relative max-w-7xl mx-auto padding z-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer()}
      >
        <Component />
      </motion.section>
    );
  };

export { SectionWrapper };
