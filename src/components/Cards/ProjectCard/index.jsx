import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { github } from "../../../assets";
import {
  toUp,
  springTransition,
  cardAnimationDelay,
  cardAnimationDuration,
  aspectRatio,
  fadeIn,
} from "../../../utils/motion";

const ProjectCard = ({ index, name, description, skills, projectLink, sourceCodeLink }) => {
  const cardRef = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        setHeight(cardRef.current.offsetWidth * aspectRatio);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [cardRef.current]);

  return (
    <motion.div
      className="w-full max-w-[940px] relative p-5 border-2 border-solid border-white rounded-3xl bg-tertiary"
      variants={fadeIn(toUp, springTransition, index * cardAnimationDelay, cardAnimationDuration)}
    >
      <iframe
        ref={cardRef}
        width="100%"
        height={height}
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
            <a
              href={sourceCodeLink}
              target="_blank"
              className="w-10 min-w-10 h-10 min-h-10 flex justify-center items-center p-1 rounded-full black-gradient"
            >
              <img
                className="w-full h-full object-contain"
                src={github}
                alt="GitHub repository link"
              />
            </a>
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
