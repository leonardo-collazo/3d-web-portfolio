import { motion } from "framer-motion";

import {
  toRight,
  springAnimation,
  animationDelay,
  animationDuration,
  fadeIn,
} from "../../../utils/motion";

const RecommendationCard = ({ index, recommendation, name, image, linkedInProfile }) => {
  return (
    <motion.div
      variants={fadeIn(toRight, springAnimation, index * animationDelay, animationDuration)}
      className="w-full p-10 rounded-3xl bg-black"
    >
      <p className="text-5xl font-black text-white">"</p>
      <p className="text-lg tracking-wider text-white whitespace-pre-line">{recommendation}</p>

      <div className="flex justify-start items-center gap-10 mt-7">
        <a
          href={linkedInProfile}
          target="_blank"
          className="text-lg font-medium text-white"
        >
          <span className="blue-text-gradient">@ </span>
          <span className="hover:blue-text-gradient">{name}</span>
        </a>

        <a
          href={linkedInProfile}
          target="_blank"
        >
          <img
            src={image}
            alt={name}
            className="w-14 h-14 object-cover rounded-full"
          />
        </a>
      </div>
    </motion.div>
  );
};

export { RecommendationCard };
