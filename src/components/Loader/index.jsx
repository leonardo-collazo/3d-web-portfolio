import { Html } from "@react-three/drei";

import "./styles.css";

const Loader = () => {
  return (
    <Html>
      <div className="cube-loader top-20 right-1/2 relative w-16 h-16 animate-[animate_4s_linear_infinite]">
        <div className="cube-top absolute w-16 h-16 before:content-[''] before:absolute before:w-16 before:h-16 before:blur-[10px] before:shadow-[0_0_10px_#323232,0_0_20px_hsl(280,42%,41%)_19.6%,0_0_30px_#323232,0_0_40px_hsl(283,42%,41%)_19.6%]"></div>
        <div className="cube-wrapper absolute w-full h-full">
          <span
            className="cube-span absolute w-full h-full"
            style={{ "--i": 0 }}
          ></span>
          <span
            className="cube-span absolute w-full h-full"
            style={{ "--i": 1 }}
          ></span>
          <span
            className="cube-span absolute w-full h-full"
            style={{ "--i": 2 }}
          ></span>
          <span
            className="cube-span absolute w-full h-full"
            style={{ "--i": 3 }}
          ></span>
        </div>
      </div>
    </Html>
  );
};

export { Loader };
