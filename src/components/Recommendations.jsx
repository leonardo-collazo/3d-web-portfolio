import { motion } from "framer-motion";

import { SectionWrapper } from "./SectionWrapper";
import { RecommendationCard } from "./Cards/RecommendationCard";
import { textVariant } from "../utils/motion";
import { recommendations } from "../constants";

const sectionId = "recommendations";
const contentAmount = 0.05;

const Recommendations = () => {
  return (
    <div className="rounded-[20px] bg-black-100">
      <div className="min-h-[300px] px-6 sm:px-12 py-8 rounded-2xl bg-tertiary">
        <motion.h2
          className="sectionHeadText"
          variants={textVariant()}
        >
          Recommendations
        </motion.h2>
      </div>

      <div className="flex flex-col gap-7 -mt-28 xs:-mt-24 sm:-mt-20 lg:-mt-32 pb-14 px-4 sm:px-6">
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

export default SectionWrapper(Recommendations, sectionId, contentAmount);
