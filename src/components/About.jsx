import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./Cards/ServiceCard";
import { SectionWrapper } from "./SectionWrapper";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.h2
        className="sectionHeadText"
        variants={textVariant()}
      >
        About
      </motion.h2>

      <motion.p
        className="max-w-5xl mt-4 text-lg leading-8 text-secondary"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Graduated with a Bachelor of Science in Information Technology, achieving a GPA of
        4.95/5.00. Excellent skills in game, front-end development and software engineering.
        Committed to continuous learning and professional growth. Proactive in finding optimal
        solutions to complex problems. Clear and frequent communication with the team, ensuring
        mutual transparency and collaboration. Versatile in the adaptation of different technologies
        and development tools.
      </motion.p>

      <div className="flex flex-wrap justify-center 2lg:justify-start gap-10 mt-16">
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

export default SectionWrapper(About, "about", 0.1);
