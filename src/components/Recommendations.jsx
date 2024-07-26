import { motion } from "framer-motion";

import { SectionWrapper } from "./SectionWrapper";
import { RecommendationCard } from "./Cards/RecommendationCard";
import { fadeIn, textVariant } from "../utils/motion";
import { recommendations } from "../constants";

const Recommendations = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className="min-h-[300px] padding rounded-2xl bg-tertiary">
        <motion.h2
          className="sectionHeadText"
          variants={textVariant()}
        >
          Recommendations
        </motion.h2>
      </div>

      <div className="flex flex-wrap gap-7 -mt-20 pb-14 paddingX">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={recommendation.name}
            index={index}
            {...recommendation}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Recommendations, "recommendations");
