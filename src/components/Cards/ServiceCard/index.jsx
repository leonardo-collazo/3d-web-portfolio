import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const ServiceCard = ({ index, title, description }) => {
  return (
    <Tilt
      className="w-full max-w-[330px]"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        className="w-full p-[2px] rounded-[20px] green-pink-gradient shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div className="min-h-[400px] flex flex-col justify-start items-center gap-4 px-6 py-8 rounded-[20px] bg-tertiary">
          <h3 className="text-[20px] font-bold leading-7 text-center text-white">{title}</h3>
          <p className="text-base font-normal leading-6 text-white">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export { ServiceCard };
