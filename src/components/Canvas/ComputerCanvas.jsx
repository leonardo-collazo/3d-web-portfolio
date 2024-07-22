import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { Computer } from "../Primitives/Computer";
import { Loader } from "../Loader";

const ComputerCanvas = () => {
  return (
    <Canvas
      className="!touch-pan-y"
      camera={{ position: [31, 0, 0], fov: 25 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { ComputerCanvas };
