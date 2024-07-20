import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { Computer } from "../Primitives/Computer";
import { Loader } from "../Loader";

const ComputerCanvas = () => {
  return (
    <Canvas
      className="!touch-pan-y"
      frameloop="demand"
      shadows
      camera={{ position: [31, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
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
