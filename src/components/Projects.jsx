import { motion } from "framer-motion";

import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./Cards/ProjectCard";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <>
      <motion.h2
        className="sectionHeadText"
        variants={textVariant()}
      >
        Projects
      </motion.h2>

      <div className="w-full flex">
        <motion.p
          className="max-w-5xl mt-4 text-lg leading-8 text-secondary"
          variants={fadeIn("", "", 0.1, 1)}
        >
          The following projects showcase my skills and experience. Each project is briefly
          described and includes links to code repositories. They reflect my ability to solve
          complex problems, work with various technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
