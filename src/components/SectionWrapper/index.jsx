import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion";

// High Order Component (HOC)
const SectionWrapper = (Component, id, amount) =>
  function HOC() {
    return (
      <motion.section
        className={`relative max-w-7xl mx-auto px-7 pt-28 z-0`}
        id={id}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        variants={staggerContainer()}
      >
        <Component />
      </motion.section>
    );
  };

export { SectionWrapper };
