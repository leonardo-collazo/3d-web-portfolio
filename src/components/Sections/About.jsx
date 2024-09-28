import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "../Cards/ServiceCard";
import { SectionWrapper } from "../SectionWrapper";

import { services } from "../../constants";
import {
  fadeIn,
  textVariant,
  inPlace,
  noTransition,
  sectionAnimationDelay,
  sectionAnimationDuration,
} from "../../utils/motion";

const sectionId = "about";
const contentAmount = 0.1;

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
        variants={fadeIn(inPlace, noTransition, sectionAnimationDelay, sectionAnimationDuration)}
      >
        Graduated with a Bachelor of Science in IT, achieving a GPA of 4.95/5.00. Over 3 years of
        experience in software engineering, game development & web development. Excellent skills in
        problem-solving & troubleshooting. Clear and frequent communication with the team, ensuring
        mutual transparency and collaboration. Versatile in the adaptation of different technologies
        and development tools. Committed to continuous learning and professional growth.
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

export default SectionWrapper(About, sectionId, contentAmount);
