import { motion } from "framer-motion";

import { SectionWrapper } from "./SectionWrapper";
import { RecommendationCard } from "./Cards/RecommendationCard";
import { textVariant } from "../utils/motion";
import { recommendations } from "../constants";

const Recommendations = () => {
  return (
    <div className="mt-2 sm:mt-8 rounded-[20px] bg-black-100">
      <div className="min-h-[300px] sm:px-16 px-6 sm:py-10 py-8 rounded-2xl bg-tertiary">
        <motion.h2
          className="sectionHeadText"
          variants={textVariant()}
        >
          Recommendations
        </motion.h2>
      </div>

      <div className="flex flex-col gap-7 -mt-24 xs:-mt-20 sm:-mt-16 lg:-mt-24 pb-14 paddingX">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={recommendation.id}
            index={index}
            {...recommendation}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Recommendations, "recommendations", 0.05);
