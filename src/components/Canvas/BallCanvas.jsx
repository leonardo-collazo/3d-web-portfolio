import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { Ball } from "../Primitives/Ball";
import { BasicLoader } from "../BasicLoader";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      className="!touch-pan-y"
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<BasicLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon}></Ball>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { BallCanvas };
