import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { Ball } from "../Primitives/Ball";
import { BasicLoader } from "../BasicLoader";

const BallCanvas = ({ technologies, icon }) => {
  return (
    <Canvas
      className="!touch-pan-y"
      gl={{ powerPreference: "high-performance" }}
    >
      <Suspense fallback={<BasicLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        {/* {technologies.map((tech, index) => (
          <Ball
            key={tech.name}
            index={index}
            imgUrl={tech.icon}
          />
        ))} */}

        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { BallCanvas };
