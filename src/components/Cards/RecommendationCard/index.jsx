import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";

const RecommendationCard = ({ index, recommendation, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full xs:w-[320px] p-10 rounded-3xl bg-black"
    >
      <p className="text-5xl font-black text-white">"</p>

      <div className="mt-1">
        <p>{recommendation}</p>

        <div className="flex justify-between items-center gap-1 mt-7">
          <div className="flex flex-1 flex-col">
            <span>@</span> {name}
            <p></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { RecommendationCard };
