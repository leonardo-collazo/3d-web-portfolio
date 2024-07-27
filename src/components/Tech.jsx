import { motion } from "framer-motion";

import { BallCanvas } from "./Canvas/BallCanvas";
import { SectionWrapper } from "./SectionWrapper";

import { technologies } from "../constants/";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.h2
        className="sectionHeadText"
        variants={textVariant()}
      >
        Tech Skills
      </motion.h2>

      <BallCanvas technologies={technologies} />
    </>
  );
};

export default SectionWrapper(Tech, "tech", 0.25);
