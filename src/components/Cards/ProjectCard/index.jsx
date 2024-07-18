import { motion } from "framer-motion";

import { github } from "../../../assets";
import { fadeIn } from "../../../utils/motion";

const ProjectCard = ({ index, name, description, skills, projectLink, sourceCodeLink }) => {
  return (
    <motion.div
      className="w-full max-w-[840px] relative p-5 border-2 border-solid border-white rounded-3xl bg-tertiary"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <iframe
        width="100%"
        height="420px"
        src={projectLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="mt-5 flex flex-col gap-2">
        <div className="flex justify-start items-center gap-4">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          {sourceCodeLink ? (
            <button
              className="w-10 h-10 flex justify-center items-center p-1 rounded-full black-gradient cursor-pointer"
              onClick={() => window.open(sourceCodeLink, "_blank")}
              type="button"
            >
              <img
                className="w-full h-full object-contain"
                src={github}
                alt="GitHub repository link"
              />
            </button>
          ) : (
            <></>
          )}
        </div>
        <p className="text-base text-secondary">{description}</p>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <h4 className="text-xl font-bold text-white">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <p
              className="text-base leading-4 text-secondary"
              key={skill}
            >
              {index !== skills.length - 1 ? skill + "," : skill}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCard };
