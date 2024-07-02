import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.h2
        className={styles.sectionHeadText}
        variants={textVariant()}
      >
        About
      </motion.h2>

      <motion.p
        className="max-w-5xl mt-4 text-lg text-secondary leading-8"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Graduated with a Bachelor of Science in Information Technology, achieving a GPA of
        4.95/5.00. Excellent skills in software engineering, front-end and game development.
        Committed to continuous learning and professional growth. Proactive in finding optimal
        solutions to complex problems. Clear and frequent communication with the team, ensuring
        mutual transparency and collaboration. Versatile in the adaptation of different technologies
        and development tools.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default About;
