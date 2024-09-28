import { motion } from "framer-motion";

import { ComputerCanvas } from "../Canvas/ComputerCanvas";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute inset-0 top-[120px] max-w-content mx-auto paddingX flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-hero-header" />
          <div className="w-1 sm:h-80 h-48 violet-gradient" />
        </div>

        <div>
          <h1 className="mt-2 font-black text-[40px] xs:text-[45px] sm:text-[50px] md:text-[55px] lg:text-[60px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[75px] text-white">
            Hi, I'm <span className="text-hero-header">Leonardo</span>
          </h1>
          <p className="mt-2 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium text-white-100">
            Software Engineer | Game Programmer | Full-Stack Developer
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute bottom-5 w-full flex justify-center items-center">
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
