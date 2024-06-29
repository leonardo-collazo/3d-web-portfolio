import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-content mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-hero-header" />
          <div className="w-1 sm:h-80 h-48 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-hero-header">Leonardo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer, Front-End Developer <br className="hidden sm:block" /> and Game
            Programmer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-32 xs:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
