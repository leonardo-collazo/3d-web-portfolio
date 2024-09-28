import { motion } from "framer-motion";

import {
  toRight,
  springTransition,
  cardAnimationDelay,
  cardAnimationDuration,
  fadeIn,
} from "../../../utils/motion";

const RecommendationCard = ({ index, recommendation, name, image, linkedInProfile }) => {
  return (
    <motion.div
      variants={fadeIn(
        toRight,
        springTransition,
        index * cardAnimationDelay,
        cardAnimationDuration
      )}
      className="w-full px-5 py-8 rounded-3xl bg-black"
    >
      <p className="text-5xl font-black text-white">"</p>
      <p className="text-sm xs:text-base sm:text-lg tracking-wider text-white whitespace-pre-line">
        {recommendation}
      </p>

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
