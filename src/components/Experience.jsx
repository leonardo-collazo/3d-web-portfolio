import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { SectionWrapper } from "./SectionWrapper";
import { ExperienceCard } from "./Cards/ExperienceCard";

import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <motion.h2
        className="sectionHeadText"
        variants={textVariant()}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
