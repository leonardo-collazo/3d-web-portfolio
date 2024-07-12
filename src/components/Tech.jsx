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

      <div className="flex flex-row flex-wrap justify-center gap-12 mt-16">
        {technologies.map(technology => (
          <div
            key={technology.name}
            className="w-28 h-28 "
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
